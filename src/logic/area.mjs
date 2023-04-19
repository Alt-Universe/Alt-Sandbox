import Zone from "./zone.mjs"
import Vector from "./vector.mjs"
import { enemiesTypes } from "./entity.mjs"

export default class {
    constructor(data, mdata, vec, id, areas, areasSize, survmode) {
        this.id = id
        this.ajson = data
        this.mjson = mdata
        this.pos = vec
        this.areas = areas
        this.areasSize = areasSize
        this.size = new Vector(this.ajson.properties.size.width * 32, this.ajson.properties.size.height * 32)

        this.entities = {}
        this.zones = {}
        this.entId = 0
        this.survmode = survmode
    }

    unload() {
        this.entities = {}
        this.zones = {}
    }

    draw(ctx, off, fov, textures, player) {
        let fillStyle = this.ajson.properties.fillStyle || this.mjson.datas.fillStyle
        for (let z in this.zones) {
            if (this.zones[z].type != "wall")
                this.zones[z].draw(ctx, off, fov, textures)
        }
        ctx.beginPath()
        ctx.globalAlpha = this.mjson.datas.fillAlpha || 0.19
        ctx.fillStyle = fillStyle
        ctx.fillRect((-off.x) / fov, (-off.y) / fov, (this.size.x) / fov, (this.size.y) / fov)
        ctx.closePath()
        for (let z in this.zones) {
            if (this.zones[z].type == "wall")
                this.zones[z].draw(ctx, off, fov, textures)
        }
        player.draw(ctx, off, fov)
        for (let e in this.entities) {
            if (this.entities[e].aura != 0) {
                this.entities[e].drawAura(ctx, off, fov)
            }
        }
        for (let e in this.entities) {
            this.entities[e].draw(ctx, off, fov)
        }
    }

    load() {
        for (let z in this.ajson.zones) {
            let zone = this.ajson.zones[z]
            this.zones[z] = new Zone({ ...zone, aPos: this.pos }, this.size, this.areas, this.areasSize, this.id)
            if (zone.type == "active") {
                for (let e in zone.enemies) {
                    let amount = zone.enemies[e].amount == undefined ? 1 : zone.enemies[e].amount

                    let dir = Math.round(Math.random() * 4)// For Quicksand

                    for (let i = 0; i < amount; i++) {
                        let enemie = zone.enemies[e]
                        let etype = enemie.type || "normal"

                        let rand = etype[0].toLowerCase() + etype.slice(1)
                        if (typeof enemie.type == "object") {
                            let mirorRand = etype[Math.floor(Math.random() * enemie.type.length)]
                            rand = mirorRand[0].toLowerCase() + mirorRand.slice(1)
                        }

                        if (!Object.keys(enemiesTypes).includes(rand)) {
                            rand = "normal"
                        }

                        let Type = enemiesTypes[rand]

                        this.entities[this.entId] = new Type({
                            spawner: {
                                x: this.zones[z].x,
                                y: this.zones[z].y,
                                w: this.zones[z].w,
                                h: this.zones[z].h,
                            },
                            amount: enemie.amount,
                            num: i,
                            dir: dir,
                            survmode: this.survmode,
                            ...enemie
                        })
                        this.entId++
                    }
                }
            }
        }
    }
}