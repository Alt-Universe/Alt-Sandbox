import Vector from "./vector.mjs"

export default class {
    constructor(world, name, aSize) {
        this.world = world
        this.area = 1
        this.gPos = new Vector((Math.random() * 10*32) + 2*32, (Math.random() * 10*32) + 2*32)
        this.aPos = new Vector(0, 0)
        this.aSize = aSize
        this.pos = new Vector(this.gPos.x-this.aPos.x, this.gPos.y-this.aPos.y)

        this.vel = new Vector(0, 0)
        this.acc = new Vector(0, 0)

        this.friction = 0.75
        this.radiusMultipler = 1
        this.color = "red"
        this.name = name
        this.radius = 14.5
        this.baseRadius = 14.5
        this.speed = 17
        this.killCount = 0
        this.god = false
        this.noKill = false

        this.dmp = new Vector(0, 0)
        this.noColide = false
        this.radiusMultipler = 1

        //Effects
        this.effects = {}
    }

    draw(ctx, off, fov) {
        ctx.beginPath()
        ctx.globalAlpha = 1
        ctx.fillStyle = this.god ? "#8100C6" : this.color
        ctx.lineWidth = 1
        ctx.arc((this.pos.x - off.x) / fov, (this.pos.y - off.y) / fov, (this.radius) / fov, 0, 3.145 * 2);
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.lineWidth = (1) / fov
        ctx.globalAlpha = 1
        ctx.font = `${12 / fov}px Tahoma, Verdana, Segoe, sans-serif`
        ctx.fillText(this.name, (this.pos.x - off.x) / fov, (this.pos.y - (this.radius + 2) - off.y) / fov)
        ctx.closePath()
    }

    posToGlobal() {
        this.gPos.x = this.pos.x + this.aPos.x
        this.gPos.y = this.pos.y + this.aPos.y
    }

    update(timeFix, delta) {
        let speed = this.speed+0
        if (Math.abs(this.vel.x) > 0.1) {
            this.vel.x = 0
        }
        if (Math.abs(this.vel.y) > 0.1) {
            this.vel.y = 0
        }

        if (!this.god) {
            if (this.effects["enlarging"] != undefined) {
                this.radiusMultipler = 1.66
            }
            if (this.effects["slower"] != undefined) {
                this.speedMultipler *= 0.7
            }
            if (this.effects["freezing"] != undefined) {
                this.speedMultipler *= 0.2
            }
        }
        
        speed *= this.speedMultipler
        this.radius *= this.radiusMultipler

        let slide = [this.dmp.x + 0, this.dmp.y + 0]

        slide[0] *= 1 - (this.friction * timeFix)
        slide[1] *= 1 - (this.friction * timeFix)

        this.acc.x *= timeFix
        this.acc.y *= timeFix

        this.acc.x += slide[0]
        this.acc.y += slide[1]

        this.vel = new Vector(this.acc.x, this.acc.y)

        this.vel.x > this.speed ? this.vel.x = this.speed : 'none'
        this.vel.x < -this.speed ? this.vel.x = -this.speed : 'none'
        this.vel.y > this.speed ? this.vel.y = this.speed : 'none'
        this.vel.y < -this.speed ? this.vel.y = -this.speed : 'none'

        this.gPos.x += this.vel.x * timeFix
        this.gPos.y += this.vel.y * timeFix
        this.pos.x = this.gPos.x - this.aPos.x
        this.pos.y = this.gPos.y - this.aPos.y
        this.dmp.x = this.acc.x + 0
        this.dmp.y = this.acc.y + 0

        this.acc.x = 0
        this.acc.y = 0
        this.noKill = false

        Object.keys(this.effects).forEach((name, index, array) => {
            if (typeof this.effects[name] == "number") {
                if (this.effects[name] > 0) {
                    this.effects[name] -= delta / 1000
                } else {
                    delete this.effects[name]
                }
            } else {
                delete this.effects[name]
            }
        })
        this.speedMultipler = 1
        this.radiusMultipler = 1
        this.radius = this.baseRadius
    }

    move(movement) {
        let speed = this.speed
        let shift = movement.s ? 0.5 : 1
        if (movement.r) {
            this.acc.x = (speed * shift)
        }
        else if (movement.l) {
            this.acc.x = -(speed * shift)
        }
        if (movement.u) {
            this.acc.y = -(speed * shift)
        }
        else if (movement.d) {
            this.acc.y = (speed * shift)
        }
        if (!movement.r && !movement.l) this.acc.x = 0
        if (!movement.u && !movement.d) this.acc.y = 0

        if (movement.mouse) {
            let distance = this.d(0, 0, movement.mouX, movement.mouY)

            let speedX = movement.mouX
            let speedY = movement.mouY

            if (distance > 150) {
                speedX = movement.mouX * (150 / distance)
                speedY = movement.mouY * (150 / distance)
            }

            let angle = Math.atan2(speedY, speedX)

            let mouseDist = Math.min(150, Math.sqrt(movement.mouX ** 2 + movement.mouY ** 2))
            let distMovement = speed * shift
            distMovement *= mouseDist / 150

            this.acc.x = distMovement * Math.cos(angle)
            this.acc.y = distMovement * Math.sin(angle)
        }
    }

    kill() {
        if (!this.god && !this.noKill && this.effects["shield"] == undefined) {
            let tX = 0, tY = 0

            let size = this.aSize
            let position = this.aPos

            if (size.x > size.y) {
                tX = (5 * 32) + position.x
                tY = (size.y / 2) + position.y
            }
            if (size.y > size.x) {
                tX = (size.x / 2) + position.x
                tY = size.y - (5 * 32) + position.y
            }
            this.gPos.x = tX
            this.gPos.y = tY
            this.killCount+=1
            this.noKill = true
        }
    }

    addEffect(eff, data) {this.effects[eff] = data}

    colide(boundary) {
        let x = boundary.x
        let y = boundary.y
        if (this.gPos.x - this.radius < x) {
            this.gPos.x = x + this.radius
        }
        if (this.gPos.x + this.radius > x + boundary.w) {
            this.gPos.x = x + boundary.w - this.radius
        }
        if (this.gPos.y - this.radius < y) {
            this.gPos.y = y + this.radius
        }
        if (this.gPos.y + this.radius > y + boundary.h) {
            this.gPos.y = y + boundary.h - this.radius
        }
        this.pos.x = this.gPos.x - this.aPos.x
        this.pos.y = this.gPos.y - this.aPos.y
    }

    d(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
    }
}