import Vector from "./vector.mjs"
import Area from "./area.mjs"

export default class {
    constructor(data, worldsList, id, worldsSize) {
        this.mjson = data
        this.id = id

        this.areas = {}
        this.acc = new Vector(0, 0)

        this.worldsList = worldsList
        this.worldsSize = worldsSize
        this.areasList = []

        this.loadFromArray()
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
                this.areas[val] = new Area(
                    this.mjson[val],
                    vec,
                    areasList,
                    { id: val, wId: this.id, worldsList: this.worldsList, worldsSize: this.worldsSize }
                    )
                lpx += this.mjson[val].properties.size.width * 32
            }
        })
        this.areasList = areasList
    }
}