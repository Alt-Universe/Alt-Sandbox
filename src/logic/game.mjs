import Player from "./player.mjs"
import World from "./world.mjs"
import Vector from "./vector.mjs"

export default class {
    constructor(data, textures) {
        this.worlds = {}

        for (let w in data.worlds) {
            let world = data.worlds[w]
            this.worlds[w] = new World(world, data.worldsList, w, data.worldsSize)
        }

        let worlds = Object.keys(data.worlds)

        this.player = new Player(this.worlds[worlds[0]].mjson.name, data.name, this.worlds[worlds[0]].areas[1].size)
        this.worlds[this.player.world].areas[this.player.area].load()

        this.play = true
        this.movement = {
            u: false,
            d: false,
            l: false,
            r: false,
            s: false,
            mouse: false,
            mouX: 0,
            mouY: 0,
        }
        this.textures = textures
        this.initKeys()
    }

    initKeys() {
        document.addEventListener('keydown', (e) => {
            if (!this.movement.mouse && this.play) {
                if (e.keyCode == 87 || e.keyCode == 38) this.movement.u = true
                if (e.keyCode == 83 || e.keyCode == 40) this.movement.d = true
                if (e.keyCode == 65 || e.keyCode == 37) this.movement.l = true
                if (e.keyCode == 68 || e.keyCode == 39) this.movement.r = true
                if (e.shiftKey) this.movement.s = true
            }
            if (e.keyCode == 81) {
                if (!this.worlds[this.player.world].areasList.includes(this.player.area - 1)) return
                this.teleport(this.player, { area: this.player.area - 1 })
                let tX = 0, tY = 0

                let size = this.worlds[this.player.world].areas[this.player.area].size
                let position = this.worlds[this.player.world].areas[this.player.area].pos

                if (size.x > size.y) {
                    tX = (5 * 32) + position.x
                    tY = (size.y / 2) + position.y
                }
                if (size.y > size.x) {
                    tX = (size.x / 2) + position.x
                    tY = size.y - (5 * 32) + position.y
                }
                this.player.gPos.x = tX
                this.player.gPos.y = tY
            }
            if (e.keyCode == 69) {
                if (!this.worlds[this.player.world].areasList.includes(this.player.area + 1)) return
                this.teleport(this.player, { area: this.player.area + 1 })
                let tX = 0, tY = 0

                let size = this.worlds[this.player.world].areas[this.player.area].size
                let position = this.worlds[this.player.world].areas[this.player.area].pos

                if (size.x > size.y) {
                    tX = (5 * 32) + position.x
                    tY = (size.y / 2) + position.y
                }
                if (size.y > size.x) {
                    tX = (size.x / 2) + position.x
                    tY = size.y - (5 * 32) + position.y
                }
                this.player.gPos.x = tX
                this.player.gPos.y = tY
            }
            if (e.keyCode == 67) {
                this.player.noColide = !this.player.noColide
                this.player.god = !this.player.god
                if (this.player.noColide) this.player.color = "purple"
                else this.player.color = "red"
            }
            if (e.keyCode == 86) {
                this.player.god = !this.player.god
            }
        })
        document.addEventListener("keyup", (e) => {
            if (!this.movement.mouse && this.play) {
                if (e.keyCode == 87 || e.keyCode == 38) this.movement.u = false
                if (e.keyCode == 83 || e.keyCode == 40) this.movement.d = false
                if (e.keyCode == 65 || e.keyCode == 37) this.movement.l = false
                if (e.keyCode == 68 || e.keyCode == 39) this.movement.r = false
                if (!e.shiftKey) this.movement.s = false
            }
        })
        document.addEventListener("mousemove", (e) => {
            if (this.movement.mouse && this.play) {
                this.movement.mouX =
                    Math.round(
                        (e.clientX - document.documentElement.clientWidth / 2) * 100
                    ) / 100
                this.movement.mouY =
                    Math.round(
                        (e.clientY - document.documentElement.clientHeight / 2) * 100
                    ) / 100
            }
        })
        document.addEventListener("mousedown", (e) => {
            if (this.play)
                this.movement.mouse = !this.movement.mouse
        })
    }

    teleport(player, { area, world }) {
        if (area == undefined || area == "") area = player.area
        if (world == undefined || world == "") world = player.world
        this.worlds[player.world].areas[player.area].unload()
        player.area = area
        player.world = world
        player.aPos = new Vector(
            this.worlds[player.world].areas[player.area].pos.x,
            this.worlds[player.world].areas[player.area].pos.y
        )
        player.pos.x = player.gPos.x - player.aPos.x
        player.pos.y = player.gPos.y - player.aPos.y
        player.aSize = this.worlds[player.world].areas[player.area].size
        this.worlds[world].areas[area].load()
    }

    update(timeFix, delta) {
        let area = this.worlds[this.player.world].areas[this.player.area]
        let player = this.player
        this.player.update(timeFix, delta)
        this.player.move(this.movement)
        this.player.colide({ x: area.pos.x, y: area.pos.y, w: area.size.x, h: area.size.y })
        let onTele = false
        let onSafe = false
        for (let z in area.zones) {
            let zone = area.zones[z]
            if (zone != undefined) {
                if (zone.type == "teleport" && !player.noColide && zone.active) {
                    let overlap = zone.distance(
                        player.gPos,
                        zone.transforme(
                            player.gPos,
                            {
                                x: zone.x + player.aPos.x,
                                y: zone.y + player.aPos.y,
                            },
                            {
                                x: zone.w,
                                y: zone.h,
                            }
                        )
                    )

                    if (overlap < player.radius && !player.onTele) {
                        let tr = zone.translate
                        if (tr.x != undefined && tr.x != 0)
                            this.player.gPos.x += zone.translate.x
                        if (tr.y != undefined && tr.y != 0)
                            this.player.gPos.y += zone.translate.y
                        if (tr.cx != undefined && tr.cx != 0)
                            this.player.gPos.x = tr.cx
                        if (tr.cy != undefined && tr.cy != 0)
                            this.player.gPos.y = tr.cy
                        if (tr.sx != undefined && tr.sx != 0)
                            this.player.gPos.x = tr.sx + this.player.aPos.x
                        if (tr.sy != undefined && tr.sy != 0)
                            this.player.gPos.y = tr.sy + this.player.aPos.x
                        this.teleport(this.player, {
                            area: zone.tpArea,
                            world: zone.tpWorld
                        })
                    }
                    if (overlap < player.radius) onTele = true
                }
                if (zone.type == "wall" && !player.noColide) {
                    zone.interractPlayer(player)
                    for (let e in area.entities) {
                        zone.interractEnemie(area.entities[e])
                    }
                }
                if (zone.type == "safe") {
                    if (
                        player.pos.x - player.radius > zone.x &&
                        player.pos.x + player.radius < zone.x + zone.w &&
                        player.pos.y - player.radius > zone.y &&
                        player.pos.y + player.radius < zone.y + zone.h
                    ) {
                        onSafe = true
                    }
                }
                for (let e in area.entities) {
                    area.entities[e].interact(player, { timeFix, delta })
                }
            }
        }
        player.onTele = onTele
        player.onSafe = onSafe
        for (let e in area.entities) {
            let ent = area.entities[e]
            area.entities[e].update(timeFix, delta, player)
            for (let eE in ent.nestedEntities) {
                this.worlds[player.world].areas[player.area].entities[area.entId] = ent.nestedEntities[eE]
                area.entId++
                delete this.worlds[player.world].areas[player.area].entities[e].nestedEntities[eE]
            }
            if (ent.toRemove) delete this.worlds[player.world].areas[player.area].entities[e]
        }

    }

    draw(ctx, off, fov) {
        let area = this.worlds[this.player.world].areas[this.player.area]

        let fillStyle = area.ajson.properties.fillStyle || this.worlds[this.player.world].mjson.datas.fillStyle
        for (let z in area.zones) {
            if (area.zones[z].type != "wall")
                area.zones[z].draw(ctx, off, fov, this.textures)
        }
        ctx.beginPath()
        ctx.globalAlpha = this.worlds[this.player.world].mjson.datas.fillAlpha || 0.19
        ctx.fillStyle = fillStyle
        ctx.fillRect((-off.x) / fov, (-off.y) / fov, (area.size.x) / fov, (area.size.y) / fov)
        ctx.closePath()
        for (let z in area.zones) {
            if (area.zones[z].type == "wall")
                area.zones[z].draw(ctx, off, fov, this.textures)
        }
        this.player.draw(ctx, off, fov)
        for (let e in area.entities) {
            if (area.entities[e].aura != 0) {
                area.entities[e].drawAura(ctx, off, fov)
            }
        }
        for (let e in area.entities) {
            area.entities[e].draw(ctx, off, fov)
        }

        ctx.beginPath()
        ctx.fillStyle = this.worlds[this.player.world].mjson.datas.title.fillStyle
        ctx.strokeStyle = this.worlds[this.player.world].mjson.datas.title.strokeStyle
        ctx.globalAlpha = 1
        ctx.lineWidth = 6
        ctx.textAlign = "center"
        ctx.font = "bold 35px Tahoma, Verdana, Segoe, sans-serif"
        let name = `: Area ${this.player.area}`
        let ajson = area.ajson
        if (ajson.properties["only-name"] || ajson.properties["area-name"]) name = ": " + (ajson.properties["only-name"] || ajson.properties["area-name"])
        ctx.strokeText(this.worlds[this.player.world].mjson.name + name, 1280 / 2, 40)
        ctx.fillText(this.worlds[this.player.world].mjson.name + name, 1280 / 2, 40)
        ctx.closePath()
    }
}