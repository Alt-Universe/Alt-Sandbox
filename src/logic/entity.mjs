import Vector from "./vector.mjs"

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Entity {
    constructor(data) {
        this.type = data.type
        this.radius = data.radius
        this.aura = data.aura
        this.speed = data.speed
        this.spawner = data.spawner
        this.harmless = false
        this.color = "#333"
        this.auraColor = this.color
        this.speedMultiplier = 1

        this.angle = Math.random()

        this.pos = new Vector(
            random(this.spawner.x + this.radius + 10, this.spawner.x + this.spawner.w - this.radius - 10),
            random(this.spawner.y + this.radius + 10, this.spawner.y + this.spawner.h - this.radius - 10)
        )
        this.vel = new Vector(
            Math.cos(this.angle * Math.PI * 2) * data.speed,
            Math.sin(this.angle * Math.PI * 2) * data.speed
        )

        if (data.angle || data.angle == 0) {
            this.vel.x = Math.cos(data.angle * Math.PI * 2) * data.speed
            this.vel.y = Math.sin(data.angle * Math.PI * 2) * data.speed
        }

        let mx = this.pos.x, my = this.pos.y

        if (data.x) {
            if (typeof data.x == 'string') {
                if (data.x.endsWith('t')) {
                    mx = this.spawner.x + data.x.slice(0, -1) * this.tile - 15
                } else if (data.x.endsWith('tn')) {
                    mx = this.spawner.x + w - data.x.slice(0, -2) * this.tile + 15
                } else
                    mx = this.spawner.x + eval(data.x)
            } else {
                mx = this.spawner.x + data.x
            }
        }
        if (data.y) {
            if (typeof data.y == 'string') {
                if (data.y.endsWith('t')) {
                    my = this.spawner.y + data.y.slice(0, -1) * this.tile - 15
                } else if (data.x.endsWith('tn')) {
                    my = this.spawner.y + h - data.y.slice(0, -2) * this.tile + 15
                } else {
                    my = this.spawner.y + eval(data.y)
                }
            } else {
                my = this.spawner.y + data.y
            }
        }

        this.pos.x = mx
        this.pos.y = my

        if (data.cx) {
            this.pos.x = data.cx
        }
        if (data.cy) {
            this.pos.y = data.cy
        }

        this.toRemove = false

        this.friction = 0

        this.angle = data.angle

        this.nestedEntities = []
    }

    draw(ctx, off, fov) {
        if (this.aura != 0) {
            ctx.beginPath()
            ctx.fillStyle = this.auraColor
            ctx.globalAlpha = this.auraAlpha || 0.15
            ctx.strokeStyle = "#111"
            ctx.arc((this.pos.x - off.x) / fov, (this.pos.y - off.y) / fov, this.aura, 0, 3.145 * 2)
            ctx.fill()
            ctx.closePath()
        }
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.globalAlpha = 1
        ctx.strokeStyle = "#111"
        ctx.lineWidth = 3
        ctx.arc((this.pos.x - off.x) / fov, (this.pos.y - off.y) / fov, this.radius, 0, 3.145 * 2)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }

    update(timeFix, delta, player) {
        this.behavior(timeFix, delta, player)
        this.move(timeFix, this.friction)
        this.colide(this.spawner)
    }

    behavior(timeFix) {

    }

    move(timeFix, friction) {
        let vel = new Vector(this.vel.x * this.speedMultiplier, this.vel.y * this.speedMultiplier)

        this.pos.x += vel.x * timeFix
        this.pos.y += vel.y * timeFix

        let dim = 1 - friction * timeFix;
        this.vel.x *= dim;
        this.vel.y *= dim;
    }

    angleToVel(ang = this.angle) {
        this.vel.x = Math.cos(ang) * this.speed;
        this.vel.y = Math.sin(ang) * this.speed;
    }

    velToAngle() {
        this.angle = Math.atan2(this.vel.y, this.vel.x);
        var dist = this.d(0, 0, this.vel.x, this.vel.y);
        this.speed = dist;
    }

    colide(boundary) {
        if (this.pos.x - this.radius < boundary.x) {
            this.pos.x = boundary.x + this.radius
            this.vel.x = Math.abs(this.vel.x)
        }
        if (this.pos.x + this.radius > boundary.x + boundary.w) {
            this.pos.x = boundary.x + boundary.w - this.radius
            this.vel.x = -Math.abs(this.vel.x)
        }
        if (this.pos.y - this.radius < boundary.y) {
            this.pos.y = boundary.y + this.radius
            this.vel.y = Math.abs(this.vel.y)
        }
        if (this.pos.y + this.radius > boundary.y + boundary.h) {
            this.pos.y = boundary.y + boundary.h - this.radius
            this.vel.y = -Math.abs(this.vel.y)
        }
    }

    interact(player, data) {
        /*if (!player.god && !this.mirage) {
            if (this.d(player.position.x, player.position.y, this.pos.x, this.pos.y) <= this.radius + player.radius && !player.onSafe && !this.harmless) {
                this.corrosive ? player.ckill() : player.kill()
            }
            if (this.aura != undefined && this.aura > 0) {
                if (this.d(player.position.x, player.position.y, this.pos.x, this.pos.y) <= this.aura + player.radius && !player.onSafe) {
                    this.auraEffect(player, data)
                }
            }
        }*/
    }

    interractWall(zone) {
        let { radius } = this
        let x1 = this.pos.x
        let y1 = this.pos.y
        if (zone.checkOverlap(this.radius, this.pos.x, this.pos.y, zone.x, zone.y, zone.w, zone.h)) {
            if (
                zone.lineal(
                    { x: zone.x, y: zone.y },
                    { x: zone.x + zone.w, y: zone.y + zone.h },
                    { x: x1, y: y1 }
                )
            ) {
                if (
                    zone.lineal(
                        { x: zone.x + zone.w, y: zone.y },
                        { x: zone.x, y: zone.y + zone.h },
                        { x: x1, y: y1 }
                    )
                ) {
                    this.pos.x = zone.x + zone.w + radius + 1
                    this.vel.x = Math.abs(this.vel.x)
                    // consolthis.log('right')
                } else {
                    this.pos.y = zone.y - radius - 1
                    this.vel.y = -Math.abs(this.vel.y)
                    // consolthis.log('top')
                }
            } else {
                if (
                    zone.lineal(
                        { x: zone.x + zone.w, y: zone.y },
                        { x: zone.x, y: zone.y + zone.h },
                        { x: x1, y: y1 }
                    )
                ) {
                    this.pos.y = zone.y + zone.h + radius + 1
                    this.vel.y = Math.abs(this.vel.y)
                } else {
                    this.pos.x = zone.x - radius - 1
                    this.vel.x = -Math.abs(this.vel.x)
                }
            }
        }
    }

    d(x1, y1, x2, y2) {
        return Math.hypot(x2 - x1, y2 - y1);
    }
}

export default {
    "normal": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "#939393"
        }
    },
    "black": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "#000"
        }
    },
    "slower": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "red"
            this.aura = data.aura != undefined ? data.aura : 150
            this.auraColor = "red"
        }
    },
    "draining": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "blue"
            this.aura = data.aura != undefined ? data.aura : 150
            this.auraColor = "blue"
        }
    },
    "freezing": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "#64C1B9"
            this.auraAlpha = 0.3
            this.aura = data.aura != undefined ? data.aura : 90
            this.auraColor = this.color
        }
    },
    "disabler": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "#A87C86"
            this.auraAlpha = 0.5
            this.aura = data.aura != undefined ? data.aura : 150
            this.auraColor = "rgb(255, 191, 206)"
        }
    },
    "shutter": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "#003c66"
            this.realVel = new Vector(this.vel.x, this.vel.y)

            this.timer = 0
    
            this.friction = 0.030
            this.dashed = false
        }
    
        behavior(timeFix, delta) {
            this.timer += delta
            if (this.timer > 4500) {
                this.vel = new Vector(this.realVel.x, this.realVel.y)
                this.dashed = false
                this.timer = this.timer % 4500
            }
            if (this.timer > 3750 && !this.dashed) {
                this.vel = new Vector(this.realVel.x / 5, this.realVel.y / 5)
                this.dashed = true
            }
        }
    
        colide(boundary) {
            if (this.pos.x - this.radius < boundary.x) {
                this.pos.x = boundary.x + this.radius
                this.vel.x = Math.abs(this.vel.x)
                this.realVel.x = Math.abs(this.realVel.x)
            }
            if (this.pos.x + this.radius > boundary.x + boundary.w) {
                this.pos.x = boundary.x + boundary.w - this.radius
                this.vel.x = -Math.abs(this.vel.x)
                this.realVel.x = -Math.abs(this.realVel.x)
            }
            if (this.pos.y - this.radius < boundary.y) {
                this.pos.y = boundary.y + this.radius
                this.vel.y = Math.abs(this.vel.y)
                this.realVel.y = Math.abs(this.realVel.y)
            }
            if (this.pos.y + this.radius > boundary.y + boundary.h) {
                this.pos.y = boundary.y + boundary.h - this.radius
                this.vel.y = -Math.abs(this.vel.y)
                this.realVel.y = -Math.abs(this.realVel.y)
            }
        }
    },
    "icicle": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "#adf8ff"
            if (data.horizontal) {
                this.vel.x = (Math.floor(Math.random() * 2) * 2 - 1) * this.speed
                this.vel.y = 0
            } else {
                this.vel.x = 0
                this.vel.y = (Math.floor(Math.random() * 2) * 2 - 1) * this.speed
            }
            this.wallHit = false
            this.timer = 0
        }
    
        behavior(timerFix, delta) {
            if (this.wallHit) {
                this.timer += delta
                this.speedMultiplier = 0
                if (this.timer > 2500) {
                    this.timer = 0
                    this.wallHit = false
                    this.speedMultiplier = 1
                }
            }
        }
    
        interractWall(zone) {
            let { radius } = this
            let x1 = this.pos.x
            let y1 = this.pos.y
            if (zone.checkOverlap(this.radius, this.pos.x, this.pos.y, zone.x, zone.y, zone.w, zone.h)) {
                if (
                    zone.lineal(
                        { x: zone.x, y: zone.y },
                        { x: zone.x + zone.w, y: zone.y + zone.h },
                        { x: x1, y: y1 }
                    )
                ) {
                    if (
                        zone.lineal(
                            { x: zone.x + zone.w, y: zone.y },
                            { x: zone.x, y: zone.y + zone.h },
                            { x: x1, y: y1 }
                        )
                    ) {
                        this.pos.x = zone.x + zone.w + radius + 1
                        this.vel.x = Math.abs(this.vel.x)
                        this.wallHit = true
                        this.speedMultiplier = 0
                        // consolthis.log('right')
                    } else {
                        this.pos.y = zone.y - radius - 1
                        this.vel.y = -Math.abs(this.vel.y)
                        this.wallHit = true
                        this.speedMultiplier = 0
                        // consolthis.log('top')
                    }
                } else {
                    if (
                        zone.lineal(
                            { x: zone.x + zone.w, y: zone.y },
                            { x: zone.x, y: zone.y + zone.h },
                            { x: x1, y: y1 }
                        )
                    ) {
                        this.pos.y = zone.y + zone.h + radius + 1
                        this.vel.y = Math.abs(this.vel.y)
                        this.wallHit = true
                        this.speedMultiplier = 0
                    } else {
                        this.pos.x = zone.x - radius - 1
                        this.vel.x = -Math.abs(this.vel.x)
                        this.wallHit = true
                        this.speedMultiplier = 0
                    }
                }
            }
        }
    
        colide(boundary) {
            super.colide(boundary)
            if (this.pos.x == boundary.x + boundary.w - this.radius || this.pos.x == boundary.x + this.radius) {
                this.wallHit = true
                this.speedMultiplier = 0
            }
            if (this.pos.y == boundary.y + boundary.h - this.radius || this.pos.y == boundary.y + this.radius) {
                this.wallHit = true
                this.speedMultiplier = 0
            }
        }
    },
    "wall": class Wall extends Entity {
        constructor(data) {
            super(data)
            this.color = "#333"

            let count = data.amount
            let num = data.num
            this.dirAct = 1
            if (data.inverse) {
                this.dirAct = -1
            }

            let angle = 0

            this.velToAngle()

            let newBound = {
                x: this.spawner.x + this.radius,
                y: this.spawner.y + this.radius,
                w: this.spawner.w - this.radius * 2,
                h: this.spawner.h - this.radius * 2
            }

            var peri = this.perimeter(newBound) / count * num + this.spawner.w / 2
            var posAround = this.warpAround(newBound, peri)

            this.pos.x = posAround.x
            this.pos.y = posAround.y

            if (posAround.dir == 0) {
                this.vel.y = 0
                this.vel.x = this.speed * this.dirAct
            }
            if (posAround.dir == 1) {
                this.vel.x = 0
                this.vel.y = this.speed * this.dirAct
            }
            if (posAround.dir == 2) {
                this.vel.y = 0
                this.vel.x = -this.speed * this.dirAct
            }
            if (posAround.dir == 3) {
                this.vel.x = 0
                this.vel.y = -this.speed * this.dirAct
            }

            this.angle = angle
            this.immune = true
        }

        perimeter(rect) {
            return (rect.w * 2 + rect.h * 2);
        }

        warpAround(rect, lengthT) {
            var result = {}
            var length = lengthT % (rect.w * 2 + rect.h * 2)
            var xpos
            var ypos
            var dir;
            if (length < rect.w) {
                dir = 0
                ypos = rect.y
                xpos = rect.x + length
            } else if (length < rect.w + rect.h) {
                dir = 1
                xpos = rect.x + rect.w
                ypos = rect.y + (length - rect.w)
            } else if (length < rect.w * 2 + rect.h) {
                dir = 2
                ypos = rect.y + rect.h
                xpos = (rect.x + rect.w) - (length - (rect.w + rect.h))
            } else if (length < rect.w * 2 + rect.h * 2) {
                dir = 3
                xpos = rect.x
                ypos = (rect.y + rect.h) - (length - (rect.w * 2 + rect.h))
            }
            result.x = xpos
            result.y = ypos
            result.dir = dir
            return result
        }

        update(...data) {
            super.update(...data)
        }

        colide(boundary) {
            if (this.pos.x - this.radius < boundary.x) {
                this.pos.x = this.radius + this.spawner.x + 1
                this.vel.x = 0
                this.vel.y = -this.speed * this.dirAct
            }
            if (this.pos.x + this.radius > boundary.x + boundary.w) {
                this.pos.x = this.spawner.w - this.radius + this.spawner.x
                this.vel.x = 0
                this.vel.y = this.speed * this.dirAct
            }
            if (this.pos.y - this.radius < boundary.y) {
                this.y = this.spawner.y + this.radius
                this.vel.x = this.speed * this.dirAct
                this.vel.y = 0
            }
            if (this.pos.y + this.radius > boundary.y + boundary.h) {
                this.y = this.spawner.y + this.spawner.h - this.radius
                this.vel.x = -this.speed * this.dirAct
                this.vel.y = 0
            }
            super.colide(boundary)
        }
    }
}