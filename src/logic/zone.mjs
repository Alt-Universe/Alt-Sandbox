import Vector from "./vector.mjs"

export default class {
    constructor(data, areaSizeS, worlds, areas, id, wId, worldsSize) {
        let w = areaSizeS.x
        let h = areaSizeS.y
        this.area = Number(id)
        this.world = wId
        this.aPos = data.aPos

        this.w = this.tileString(data.w, w)
        this.h = this.tileString(data.h, h)
        this.x = this.tileString(data.x, w)
        this.y = this.tileString(data.y, h)

        this.worlds = worlds
        this.areas = areas

        this.enemies = data.enemies

        this.color = "#333"
        this.type = data.type
        switch (data.type) {
            case "teleport": this.color = "#FFF46C"; break;
            case "victory": this.color = "#FFF46C"; break;
            case "safe": this.color = "#c1c1c1"; break;
            case "active": this.color = "#fff"; break;
            case "inversivity": this.color = "rgb(167,60,227,0.5)"; break;
            case "storm": this.color = "rgba(242,165,60, 0.5)"; break;
            case "slowdown": this.color = "#ECAC9B"; break;
            case "magnetism": this.color = "#B5A1E6"; break;
        }

        if (this.type == "teleport") {
            this.tpArea = ""
            this.tpWorld = ""
            this.active = true

            this.endArea = data.endArea || false

            this.tpArea = data.tpArea != undefined ? (data.tpArea == "_next" ? "_next" : (data.tpArea == "_prev" ? "_prev" : data.tpArea)) : this.area
            this.tpWorld = data.tpWorld != undefined ? (data.tpWorld == "_next" ? "_next" : (data.tpWorld == "_prev" ? "_prev" : data.tpWorld)) : this.world

            if (this.tpArea == "_prev") {
                if (this.areas.includes(this.area - 1)) {
                    this.tpArea = this.area - 1
                }
                else this.tpArea = this.area
            }
            if (this.tpArea == "_next") {
                if (this.areas.includes(this.area + 1))
                    this.tpArea = this.area + 1
                else this.tpArea = this.area
            }
            if (!this.areas.includes(this.tpArea)) this.tpArea = this.area
            if (this.tpWorld == "_prev") {
                let mapIndex = null
                for (let i in this.worlds) {
                    if (this.worlds[i] == this.world) {
                        mapIndex = Math.trunc(i)
                    }
                }
                if (mapIndex == 0) {
                    this.tpWorld = this.worlds[Object.keys(this.worlds).length - 1]
                } else {
                    this.tpWorld = this.worlds[Number(mapIndex) - 1]
                }
            }
            if (this.tpWorld == "_next") {
                let mapIndex = null
                for (let i in this.worlds) {
                    if (this.worlds[i] == this.world) {
                        mapIndex = Math.trunc(i)
                    }
                }
                if (mapIndex == Object.keys(this.worlds).length - 1) {
                    this.tpWorld = this.worlds[0]
                } else {
                    this.tpWorld = this.worlds[Number(mapIndex) + 1]
                }
            }

            let areaSize
            if (this.tpWorld == undefined || this.tpArea == undefined || !this.worlds.includes(this.tpWorld)) {
                areaSize = areaSizeS
                if (!this.worlds.includes(this.tpWorld) && data.tpWorld) {
                    this.tpWorld = this.world
                    this.tpArea = this.area
                    this.active = false
                }
            } else {
                areaSize = new Vector(worldsSize[this.tpWorld][this.tpArea].width, worldsSize[this.tpWorld][this.tpArea].height)    
            }

            if (data.translate != undefined)
                this.translate = {
                    x: data.translate.x || 0,
                    y: data.translate.y || 0,
                    cx: this.tileString(data.translate.cx, areaSize.x) || 0,
                    cy: this.tileString(data.translate.cy, areaSize.y) || 0,
                    sx: this.tileString(data.translate.sx, areaSize.x) || 0,
                    sy: this.tileString(data.translate.sy, areaSize.y) || 0,
                }
            console.log(this.translate)
        }
    }

    lineal(a, b, c) {
        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) < 0
    }

    checkOverlap(R, Xc, Yc, X, Y, W, H) {
        let Xn = Math.max(X, Math.min(Xc, X + W));
        let Yn = Math.max(Y, Math.min(Yc, Y + H));

        let Dx = Xn - Xc;
        let Dy = Yn - Yc;
        return (Dx * Dx + Dy * Dy) <= R * R;
    }

    interractEnemie(en) {
        en.interractWall(this)
    }

    interractPlayer(player) {
        let { radius } = player
        let x1 = player.pos.x
        let y1 = player.pos.y
        if (this.checkOverlap(player.radius, player.pos.x, player.pos.y, this.x, this.y, this.w, this.h)) {
            if (
                this.lineal(
                    { x: this.x, y: this.y },
                    { x: this.x + this.w, y: this.y + this.h },
                    { x: x1, y: y1 }
                )
            ) {
                if (
                    this.lineal(
                        { x: this.x + this.w, y: this.y },
                        { x: this.x, y: this.y + this.h },
                        { x: x1, y: y1 }
                    )
                ) {
                    player.pos.x = this.x + this.w + radius
                    player.posToGlobal()
                    // consolthis.log('right')
                } else {
                    player.pos.y = this.y - radius
                    player.posToGlobal()
                    // consolthis.log('top')
                }
            } else {
                if (
                    this.lineal(
                        { x: this.x + this.w, y: this.y },
                        { x: this.x, y: this.y + this.h },
                        { x: x1, y: y1 }
                    )
                ) {
                    player.pos.y = this.y + this.h + radius
                    player.posToGlobal()
                } else {
                    player.pos.x = this.x - radius
                    player.posToGlobal()
                }
            }
        }
    }

    tileString(data, w) {
        let mx = 0
        if (data) {
            if (typeof data == 'string') {
                if (data.endsWith('t')) {
                    mx = data.slice(0, -1) * 32
                } else if (data.endsWith('tn')) {
                    mx = w - data.slice(0, -2) * 32
                } else
                    mx = eval(data)
            } else {
                mx = data
            }
        }
        return mx
    }

    distance(pos1, pos2) {
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2))
    }

    transforme(pos, rectpos, rectsize) {
        var xpos = pos.x;
        var ypos = pos.y;
        if (xpos < rectpos.x) {
            xpos = rectpos.x
        }
        if (xpos > rectpos.x + rectsize.x) {
            xpos = rectpos.x + rectsize.x;
        }
        if (ypos < rectpos.y) {
            ypos = rectpos.y
        }
        if (ypos > rectpos.y + rectsize.y) {
            ypos = rectpos.y + rectsize.y;
        }
        return { x: xpos, y: ypos };
    }

    draw(ctx, off, fov, textures) {
        ctx.beginPath()
        let texture
        if (this.type == "victory") {
            texture = textures["normal"]["teleport"].img
        } else if (this.type != "wall") {
            try {
                texture = textures["normal"][this.type].img
            } catch { texture = "#333" }
        } else {
            texture = "#333"
        }
        ctx.fillStyle = texture || this.color
        ctx.globalAlpha = 1
        ctx.fillRect((this.x - off.x) / fov, (this.y - off.y) / fov, this.w / fov, this.h / fov)
        ctx.closePath()
    }
}