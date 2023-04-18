import Vector from "./vector.mjs"
import Area from "./area.mjs"

export default class {
    constructor(data) {
        this.mjson = data

        this.areas = {}
        this.acc = new Vector(0, 0)

        this.areasList = []
        Object.keys(this.mjson).forEach(val => {
            if (Number.isInteger(Number(val))) this.areasList.push(Number(val))
        })

        this.areasSize = {}
        Object.keys(this.mjson).forEach(val => {
            if (Number.isInteger(Number(val))) {
                this.areas[Number(val)] = new Vector(this.mjson[val].properties.size.width * 32, this.mjson[val].properties.size.height * 32)
            }
        })

        this.loadFromArray()
    }

    draw(ctx, off, fov, player, textures) {
        //this.areas[player.area].draw(ctx, off, fov)
        let area = this.areas[player.area]
        player.colide({ x: area.pos.x, y: area.pos.y, w: area.size.x, h: area.size.y })
        let ajson = area.ajson
        area.draw(ctx, off, fov, textures)
        ctx.beginPath()
        ctx.fillStyle = this.mjson.datas.title.fillStyle
        ctx.strokeStyle = this.mjson.datas.title.strokeStyle
        ctx.globalAlpha = 1
        ctx.lineWidth = 6
        ctx.textAlign = "center"
        ctx.font = "bold 35px Tahoma, Verdana, Segoe, sans-serif"
        let name = `: Area ${player.area}`
        if (ajson.properties["only-name"] || ajson.properties["area-name"]) name = ": " + (ajson.properties["only-name"] || ajson.properties["area-name"])
        ctx.strokeText(this.mjson.name + name, 1280 / 2, 40)
        ctx.fillText(this.mjson.name + name, 1280 / 2, 40)
        ctx.closePath()
    }

    update(timeFix, delta, player) {
        let area = this.areas[player.area]
        let onTele = false
        let onSafe = false
        for (let z in area.zones) {
            let zone = area.zones[z]
            if (zone != undefined) {
                if (zone.type == "teleport" && !player.noColide) {
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
                        this.teleport(player, {
                            area: zone.tpArea
                        })
                        let tr = zone.translate
                        if (tr.x != undefined && tr.x != 0)
                            player.gPos.x += zone.translate.x
                        if (tr.y != undefined && tr.y != 0)
                            player.gPos.y += zone.translate.y
                        if (tr.cx != undefined && tr.cx != 0)
                            player.gPos.x = tr.cx
                        if (tr.cy != undefined && tr.cy != 0)
                            player.gPos.y = tr.cy
                        if (tr.sx != undefined && tr.sx != 0)
                            player.gPos.x = tr.sx + player.aPos.x
                        if (tr.sy != undefined && tr.sy != 0)
                            player.gPos.y = tr.sy + player.aPos.x
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
                this.areas[player.area].entities[area.entId] = ent.nestedEntities[eE]
                area.entId++
                delete this.areas[player.area].entities[e].nestedEntities[eE]
            }
            if (ent.toRemove) delete this.areas[player.area].entities[e]
        }
    }

    teleport(player, { area }) {
        if (area == undefined || area == "") area = player.area
        this.areas[player.area].unload()
        player.area = area
        player.aPos = new Vector(
            this.areas[player.area].pos.x,
            this.areas[player.area].pos.y
        )
        player.aSize = this.areas[player.area].size
        this.areas[area].load()
    }

    tileString(data, w) {
        let mx = 0
        if (data) {
            if (typeof data == 'string') {
                if (data == "-lastY") {
                    mx = this.acc.y - ((w) * 32)
                } else if (data == "-lastX") {
                    mx = this.acc.x - ((w) * 32)
                } else if (data == "lastX") {
                    mx = this.acc.x + ((w) * 32)
                } else if (data == "lastY") {
                    mx = this.acc.y + ((w) * 32)
                } else {
                    if (data.endsWith('t')) {
                        mx = data.slice(0, -1) * 32
                    } else
                        mx = eval(data)
                }
            } else {
                mx = data
            }
        }
        return mx
    }

    loadFromArray() {
        let lpx = 0, lpy = 0
        let areasList = []
        Object.keys(this.mjson).forEach(val => {
            if (Number.isInteger(Number(val))) areasList.push(Number(val))
        })
        Object.keys(this.mjson).forEach((val, ind, arr) => {
            if (Number.isInteger(Number(val))) {
                let vec = new Vector(lpx, lpy)
                if (this.mjson[val].properties.position != undefined) {
                    vec.x = this.tileString(this.mjson[val].properties.position.x, this.mjson[val].properties.size.width)
                    vec.y = this.tileString(this.mjson[val].properties.position.y, this.mjson[val].properties.size.height)

                    this.acc.x = this.tileString(this.mjson[val].properties.position.x, this.mjson[val].properties.size.width)
                    this.acc.y = this.tileString(this.mjson[val].properties.position.y, this.mjson[val].properties.size.height)
                }
                this.areas[val] = new Area(this.mjson[val], this.mjson, vec, val, this.areasList, this.areasSize)
                lpx += this.mjson[val].properties.size.width * 32
            }
        })
    }
}