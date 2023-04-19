import Zone from "./zone.mjs"
import Vector from "./vector.mjs"
import { enemiesTypes } from "./entity.mjs"

export default class {
    constructor(data, pos, areasList, { id, wId, worldsList, worldsSize }) {
        this.id = id
        this.wId = wId
        this.ajson = data
        this.pos = pos
        this.areasList = areasList
        this.worldsList = worldsList
        this.worldsSize = worldsSize
        this.size = new Vector(this.ajson.properties.size.width * 32, this.ajson.properties.size.height * 32)

        this.entities = {}
        this.zones = {}
        this.entId = 0
        this.survmode = true
    }

    unload() {
        this.entities = {}
        this.zones = {}
        this.entId = 0
    }

    load() {
        for (let z in this.ajson.zones) {
            let zone = this.ajson.zones[z]
            this.zones[z] = new Zone({ ...zone, aPos: this.pos }, this.size, this.worldsList, this.areasList, this.id, this.wId,this.worldsSize)
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
                            survmode: true,
                            ...enemie
                        })
                        this.entId++
                    }
                }
            }
        }
    }
}