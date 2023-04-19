import Vector from "./vector.mjs"

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Entity {
    constructor(data) {
        this.color = data.color
        this.radius = data.radius
        this.aura = data.aura
        this.speed = data.speed
        this.spawner = data.spawner
        this.harmless = false
        this.color = "#333"
        this.auraColor = this.color
        this.speedMultiplier = 1
        this.survmode = data.survmode
        this.mirage = data.mirage || false

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
                    mx = this.spawner.x + data.x.slice(0, -1) * 32 - 15
                } else if (data.x.endsWith('tn')) {
                    mx = this.spawner.x + w - data.x.slice(0, -2) * 32 + 15
                } else
                    mx = this.spawner.x + eval(data.x)
            } else {
                mx = this.spawner.x + data.x
            }
        }
        if (data.y) {
            if (typeof data.y == 'string') {
                if (data.y.endsWith('t')) {
                    my = this.spawner.y + data.y.slice(0, -1) * 32 - 15
                } else if (data.x.endsWith('tn')) {
                    my = this.spawner.y + h - data.y.slice(0, -2) * 32 + 15
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
        this.alpha = 1
        this.harmless = false
    }

    draw(ctx, off, fov) {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha != 1 ? this.alpha : (this.harmless ? 0.4 : 1)
        ctx.strokeStyle = "#111"
        ctx.lineWidth = 3
        ctx.arc((this.pos.x - off.x) / fov, (this.pos.y - off.y) / fov, this.radius, 0, 3.145 * 2)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }

    drawAura(ctx, off, fov) {
        if (this.aura != 0) {
            ctx.beginPath()
            ctx.fillStyle = this.auraColor
            ctx.globalAlpha = this.auraAlpha || 0.15
            ctx.strokeStyle = "#111"
            ctx.arc((this.pos.x - off.x) / fov, (this.pos.y - off.y) / fov, this.aura, 0, 3.145 * 2)
            ctx.fill()
            ctx.closePath()
        }
    }

    update(timeFix, delta, player) {
        this.behavior(timeFix, delta, player)
        this.move(timeFix, this.friction)
        this.colide(this.spawner)

        this.speedMultiplier = 1
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
        if (!this.mirage && this.survmode) {
            if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= this.radius + player.radius && !player.onSafe && !this.harmless) {
                player.kill()
            }
            if (this.aura != undefined && this.aura > 0) {
                if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= this.aura + player.radius && !player.onSafe) {
                    this.auraEffect(player, data)
                }
            }
        }
    }

    auraEffect(player, data) { }

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

class Bullet extends Entity {
    constructor(data) {
        super(data)
        this.color = "#A05353"
        this.timer = 0
        this.releaseTime = 3000
        this.wind = false
        this.gravity = 64 / 32
    }

    behavior(timeFix, delta) {
        this.timer += delta
        if (this.timer > this.releaseTime) {
            this.toRemove = true
        }
    }

    interact(player, data) {
        if (!player.onSafe) {
            if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= this.radius + player.radius && !player.onSafe) {
                if (!this.wind) {
                    !this.mirage ? player.kill() : 'none'
                    this.toRemove = true
                } else {
                    while (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) < player.radius + this.radius) {
                        let dx = player.pos.x - this.pos.x
                        let dy = player.pos.y - this.pos.y
                        let dist = this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y)
                        let attractAmplitude = Math.pow(2, -(dist / (this.radius / 2)))
                        let moveDist = this.gravity * attractAmplitude
                        let angle = Math.atan2(dy, dx)
                        let timeFix = data.timeFix
                        player.pos.x += (moveDist * Math.cos(angle)) * timeFix
                        player.pos.y += (moveDist * Math.sin(angle)) * timeFix
                        player.posToGlobal()
                    }
                }
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
                    this.toRemove = true
                    // consolthis.log('right')
                } else {
                    this.pos.y = zone.y - radius - 1
                    this.vel.y = -Math.abs(this.vel.y)
                    this.toRemove = true
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
                    this.toRemove = true
                } else {
                    this.pos.x = zone.x - radius - 1
                    this.vel.x = -Math.abs(this.vel.x)
                    this.toRemove = true
                }
            }
        }
    }

    colide(boundary) {
        if (this.pos.x - this.radius < boundary.x) {
            this.toRemove = true
        }
        if (this.pos.x + this.radius > boundary.x + boundary.w) {
            this.toRemove = true
        }
        if (this.pos.y - this.radius < boundary.y) {
            this.toRemove = true
        }
        if (this.pos.y + this.radius > boundary.y + boundary.h) {
            this.toRemove = true
        }
    }
}

class Trail extends Entity {
    constructor(data) {
        super(data)
        this.color = "flametrail"
        this.timer = 0
        this.alpha = 1
        this.ownerSpeed = data.ownerSpeed

    }

    behavior(timeFix, delta, area) {
        this.timer += delta
        this.alpha = 1 - this.timer / (5000 / this.ownerSpeed)
        if (this.timer >= 5000 / this.ownerSpeed) this.toRemove = true;
    }
}

class Leafbullet extends Entity {
    constructor(data) {
        super(data)
        this.color = "#035b12"
        this.timer = 0
        this.weak = true
        this.dir = data.speed / 150
    }

    behavior(timeFix, delta) {
        this.velToAngle()
        this.angle += this.dir * (delta / 30)
        this.angleToVel()
        this.timer += delta
        if (this.timer >= 2000) {
            this.toRemove = true
        }
    }

    colide(boundary) {
        if (this.pos.x - this.radius < boundary.x) {
            this.toRemove = true
        }
        if (this.pos.x + this.radius > boundary.x + boundary.w) {
            this.toRemove = true
        }
        if (this.pos.y - this.radius < boundary.y) {
            this.toRemove = true
        }
        if (this.pos.y + this.radius > boundary.y + boundary.h) {
            this.toRemove = true
        }
    }
}

let enemiesTypes = {
    "normal": class Normal extends Entity {
        constructor(data) {
            super(data)
            this.color = "#939393"
        }
    },
    "black": class Black extends Entity {
        constructor(data) {
            super(data)
            this.color = "#000"
        }
    },
    "slower": class Slower extends Entity {
        constructor(data) {
            super(data)
            this.color = "red"
            this.aura = data.aura != undefined ? data.aura : 150
            this.auraColor = "red"
        }

        auraEffect(player, data) {
            player.speedMultiplier *= 0.7
        }
    },
    "draining": class Draining extends Entity {
        constructor(data) {
            super(data)
            this.color = "blue"
            this.aura = data.aura != undefined ? data.aura : 150
            this.auraColor = "blue"
        }
    },
    "freezing": class Freezing extends Entity {
        constructor(data) {
            super(data)
            this.color = "#64C1B9"
            this.auraAlpha = 0.3
            this.aura = data.aura != undefined ? data.aura : 90
            this.auraColor = this.color
        }

        auraEffect(player, data) {
            player.speedMultiplier *= 0.2
        }
    },
    "disabler": class Disabler extends Entity {
        constructor(data) {
            super(data)
            this.color = "#A87C86"
            this.auraAlpha = 0.5
            this.aura = data.aura != undefined ? data.aura : 150
            this.auraColor = "rgb(255, 191, 206)"
        }
    },
    "shutter": class Shutter extends Entity {
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
    "icicle": class Icicle extends Entity {
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
    },
    "bee": class Bee extends Entity {
        constructor(data) {
            super(data)
            this.color = "#A0780A"

            this.targetAngle = this.angle
        }
        behavior(timeFix, delta, player) {
            let min = 5.625 * 32
            let index
            if (!player.onSafe)
                if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= min && !player.onSafe) {
                    min = this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y)
                    index = player
                }
            if (index != undefined) {
                let dX = index.pos.x - this.pos.x
                let dY = index.pos.y - this.pos.y
                this.targetAngle = Math.atan2(dY, dX)
            }
            this.velToAngle()
            let dif = this.targetAngle - this.angle
            let angleDif = Math.atan2(Math.sin(dif), Math.cos(dif))
            let angleIncrement = 0.04
            if (Math.abs(angleDif) >= angleIncrement) {
                if (angleDif < 0) {
                    this.angle -= angleIncrement * (delta / 30)
                } else {
                    this.angle += angleIncrement * (delta / 30)
                }
            }
            this.angleToVel()
        }

        colide(boundary) {
            if (this.pos.x - this.radius < boundary.x) {
                this.pos.x = boundary.x + this.radius
                this.vel.x = Math.abs(this.vel.x)
                this.velToAngle()
                this.targetAngle = this.angle
            }
            if (this.pos.x + this.radius > boundary.x + boundary.w) {
                this.pos.x = boundary.x + boundary.w - this.radius
                this.vel.x = -Math.abs(this.vel.x)
                this.velToAngle()
                this.targetAngle = this.angle
            }
            if (this.pos.y - this.radius < boundary.y) {
                this.pos.y = boundary.y + this.radius
                this.vel.y = Math.abs(this.vel.y)
                this.velToAngle()
                this.targetAngle = this.angle
            }
            if (this.pos.y + this.radius > boundary.y + boundary.h) {
                this.pos.y = boundary.y + boundary.h - this.radius
                this.vel.y = -Math.abs(this.vel.y)
                this.velToAngle()
                this.targetAngle = this.angle
            }
        }
    },
    "dasher": class Dasher extends Entity {
        constructor(data) {
            super(data)
            this.color = "#6789EF"
        }
        interact(player, data) {
            if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= 32 * 5 + player.radius && !player.onSafe) {
                this.speedMultiplier = 5
            }
        }
    },
    "spiral": class Spiral extends Entity {
        constructor(data) {
            super(data)
            this.color = "#D1C732"
            this.angleIncrement = 0.15
            this.angleIncrementChange = 0.004
            this.dir = 1
        }

        behavior(timeFix, delta) {
            if (this.angleIncrement < 0.001) {
                this.angleAdd = true;
            } else if (this.angleIncrement > 0.35) {
                this.angleAdd = false;
            }
            if (this.angleIncrement < 0.05) {
                this.angleIncrementChange = 0.0022;
            } else {
                this.angleIncrementChange = 0.004;
            }
            if (this.angleAdd) {
                this.angleIncrement += this.angleIncrementChange * timeFix;
            } else {
                this.angleIncrement -= this.angleIncrementChange * timeFix;
            }
            this.velToAngle();
            this.angle += this.angleIncrement * this.dir * timeFix;
            this.angleToVel();
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
                        this.dir = -this.dir
                        // consolthis.log('right')
                    } else {
                        this.pos.y = zone.y - radius - 1
                        this.vel.y = -Math.abs(this.vel.y)
                        this.dir = -this.dir
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
                        this.dir = -this.dir
                    } else {
                        this.pos.x = zone.x - radius - 1
                        this.vel.x = -Math.abs(this.vel.x)
                        this.dir = -this.dir
                    }
                }
            }
        }

        colide(boundary) {
            if (this.pos.x - this.radius < boundary.x) {
                this.pos.x = boundary.x + this.radius
                this.vel.x = Math.abs(this.vel.x)
                this.dir = -this.dir
            }
            if (this.pos.x + this.radius > boundary.x + boundary.w) {
                this.pos.x = boundary.x + boundary.w - this.radius
                this.vel.x = -Math.abs(this.vel.x)
                this.dir = -this.dir
            }
            if (this.pos.y - this.radius < boundary.y) {
                this.pos.y = boundary.y + this.radius
                this.vel.y = Math.abs(this.vel.y)
                this.dir = -this.dir
            }
            if (this.pos.y + this.radius > boundary.y + boundary.h) {
                this.pos.y = boundary.y + boundary.h - this.radius
                this.vel.y = -Math.abs(this.vel.y)
                this.dir = -this.dir
            }
        }
    },
    "rush": class Rush extends Entity {
        constructor(data) {
            super(data)
            this.color = "#ecc4ef"
            this.aura = data.aura != undefined ? data.aura : 150
            this.auraStatic = data.aura != undefined ? data.aura : 150

            this.gravity = data.power || 2.5
        }

        auraEffect(player, data) {
            let dx = player.pos.x - this.pos.x
            let dy = player.pos.y - this.pos.y
            let dist = this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y)
            let attractAmplitude = Math.pow(2, -(dist / 120))
            let moveDist = this.gravity * attractAmplitude
            let angle = Math.atan2(dy, dx)
            let timeFix = data.timeFix
            player.globalpos.x += (moveDist * Math.cos(angle)) * timeFix
            player.globalpos.y += (moveDist * Math.sin(angle)) * timeFix
        }
    },
    "iciclewarp": class Iciclewarp extends Entity {
        constructor(data) {
            super(data)
            this.color = "#93C1F5"
            this.vel.x = 0
            this.vel.y = Math.random() > 0.5 ? this.speed : -this.speed
            this.retring = this.vel.y > 0 ? true : false
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
                        this.pos.x = boundary.x - this.radius * 2
                        // consolthis.log('right')
                    } else {
                        this.pos.y = zone.y - radius - 1
                        this.vel.y = -Math.abs(this.vel.y)
                        this.pos.y = boundary.y + boundary.h - this.radius
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
                        this.pos.y = boundary.y - this.radius
                    } else {
                        this.pos.x = zone.x - radius - 1
                        this.vel.x = -Math.abs(this.vel.x)
                        this.pos.x = boundary.x + boundary.w - this.radius
                    }
                }
            }
        }

        colide(boundary) {
            if (this.pos.x <= boundary.x - this.radius) {
                this.pos.x = boundary.x + boundary.w - this.radius
            }
            if (this.pos.x - this.radius >= boundary.x + boundary.w) {
                this.pos.x = boundary.x - this.radius * 2
            }
            if (this.pos.y <= boundary.y - this.radius && !this.retring) {
                this.pos.y = boundary.y + boundary.h - this.radius
            }
            if (this.pos.y - this.radius >= boundary.y + boundary.h && this.retring) {
                this.pos.y = boundary.y - this.radius
            }
        }
    },
    "sizer": class Sizer extends Entity {
        constructor(data) {
            super(data)
            this.color = "#F27743"
            this.growing = true

            this.maxRadius = this.radius * 2.5
            this.minRadius = this.radius / 2.5
        }

        behavior(timeFix, delta) {
            if (this.growing) {
                this.radius += (timeFix * 0.08) * this.minRadius
                this.baseRadius = this.radius
                if (this.radius > this.maxRadius) {
                    this.growing = false
                }
            } else {
                this.radius -= ((delta / 30) * 0.08) * this.minRadius
                this.baseRadius = this.radius
                if (this.radius < this.minRadius) {
                    this.growing = true
                }
            }
        }
    },
    "mine": class Mine extends Entity {
        constructor(data) {
            super(data)
            this.color = "#b4b83f"

            this.speedMultiplier = 0
        }
        update(...props) {
            super.update(...props)
            this.speedMultiplier = 0
        }

        interact(player) {
            super.interact(player)

            if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= (5.25 * 32) + player.radius && !player.died && !player.god && !player.onSafe) {
                this.speedMultiplier = 1
            }
        }
    },
    "sniper": class Sniper extends Entity {
        constructor(data) {
            super(data)
            this.color = "#A05353"
            this.delay = 3000
            this.timer = Math.random() * this.delay

            this.bulletsize = data.bulletsize || this.radius / 2
        }

        behavior(timeFix, delta) {
            this.timer += delta
        }

        interact(player) {
            super.interact(player)
            if (this.timer > this.delay && !player.onSafe) {
                let target
                if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= 20 * 32) {
                    target = player
                }

                if (target) {
                    let angl = Math.atan2(target.pos.y - this.pos.y, target.pos.x - this.pos.x)

                    let bullet = new Bullet({
                        cx: this.pos.x,
                        cy: this.pos.y,
                        radius: this.bulletsize,
                        speed: 10,
                        spawner: this.spawner
                    })
                    bullet.vel.x = Math.cos(angl) * bullet.speed
                    bullet.vel.y = Math.sin(angl) * bullet.speed

                    this.nestedEntities.push(bullet)
                    this.timer = 0
                }
            }
        }
    },
    "octosniper": class Octosniper extends Entity {
        constructor(data) {
            super(data)
            this.color = "#D3134F"
            this.delay = 4000
            this.timer = Math.random() * this.delay

            this.bulletsize = data.bulletsize || 8
        }

        behavior(timeFix, delta) {
            this.timer += delta
            if (this.timer > this.delay) {
                for (let i = 0; i < 9; i++) {
                    let bullet = new Bullet({
                        cx: this.pos.x,
                        cy: this.pos.y,
                        radius: this.bulletsize,
                        speed: 8,
                        spawner: this.spawner
                    })
                    bullet.color = "#D3134F"
                    bullet.vel.x = Math.cos(i * Math.PI / 4) * bullet.speed
                    bullet.vel.y = Math.sin(i * Math.PI / 4) * bullet.speed

                    this.nestedEntities.push(bullet)
                }
                this.timer = 0
            }
        }
    },
    "growing": class Growing extends Entity {
        constructor(data) {
            super(data)
            this.color = "#70E099"
            this.isEnemy = true

            this.fixedRadius = data.radius

            this.sizeChange = 0
            this.maxRadius = data.maxRadius || this.radius * 3
            this.radiusSpeed = data.radiusSpeed / 10 || 0.3

            this.ispl = false
        }

        behavior(timeFix, delta) {
            if (!this.ispl) {
                if (this.radius > this.fixedRadius) {
                    this.sizeChange = -this.radiusSpeed
                } else {
                    this.sizeChange = 0
                    this.radius = this.fixedRadius
                }
            } else {
                if (this.radius < this.maxRadius) {
                    this.sizeChange = this.radiusSpeed
                } else {
                    this.sizeChange = 0
                    this.radius = this.maxRadius
                }
            }

            this.radius += this.sizeChange * delta / 10
            this.baseRadius = this.radius
        }

        interact(player) {
            super.interact(player)
            let radiusG = 7 + (this.radius / 30)
            let ispl = false

            if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= radiusG * 32 && !player.died && !player.onSafe && !player.god) {
                ispl = true
            }

            this.ispl = ispl
        }
    },
    "changer": class Changer extends Entity {
        constructor(data) {
            super(data)
            this.color = "#565656"

            this.timer = 0
            this.disable = false

            if (data.num >= data.amount / 2) {
                this.disable = true
            }
        }

        behavior(timerFix, delta) {
            this.timer += delta

            if (this.timer > 5000) {
                this.disable = !this.disable
            }

            this.harmless = this.disable


            this.timer = this.timer % 5000
        }
    },
    "wine": class Wine extends Entity {
        constructor(data) {
            super(data)
            this.color = "#1E5945"

            this.detected = false
        }

        interact(player) {
            super.interact(player)
            if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= (5.25 * 32) + player.radius && !player.died && !player.god && !player.onSafe) {
                this.speedMultiplier = 0.25
            }
        }
    },
    "warpe": class Warpe extends Entity {
        constructor(data) {
            super(data)
            this.color = "#4E1609"

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
            if (this.pos.y <= boundary.y - this.radius) {
                this.pos.y = boundary.y + boundary.h - this.radius
            }
            if (this.pos.y - this.radius >= boundary.y + boundary.h) {
                this.pos.y = boundary.y - this.radius
            }
        }
    },
    "oscillating": class Oscillating extends Entity {
        constructor(data) {
            super(data)
            this.color = "#869E0F"

            this.timer = 0
        }

        behavior(timeFix, delta) {
            this.timer += delta
            if (this.timer > 1000) {
                this.vel.x = -this.vel.x
                this.vel.y = -this.vel.y
            }
            this.timer = this.timer % 1000
        }
    },
    "zoning": class Zoning extends Entity {
        constructor(data) {
            super(data)
            this.color = "#A03811"

            this.switchInterval = 1000;
            this.switchTime = Math.random() * this.switchInterval;
            this.turnAngle = Math.PI / 2
            this.turnAngle *= (Math.floor(Math.random() * 2) * 2) - 1
        }

        behavior(timeFix, delta) {
            if (this.switchTime > 0) {
                this.switchTime -= delta
            } else {
                this.switchTime = this.switchInterval
                this.velToAngle();
                this.angle += this.turnAngle
                this.angleToVel();
            }
        }
    },
    "flame": class Flame extends Entity {
        constructor(data) {
            super(data)
            this.color = "#D53E07"
            this.timer = 0

            this.light = true

            this.nestedEntities = []
        }

        behavior(timeFix, delta) {
            this.timer += delta
            if (this.timer >= 32.5 * ((this.radius * 2) / this.speed)) {
                const trail = new Trail({
                    cx: this.pos.x,
                    cy: this.pos.y,
                    radius: this.radius,
                    speed: 0,
                    spawner: this.spawner,
                    ownerSpeed: this.speed
                })
                this.nestedEntities.push(trail)

                this.timer = 0
            }
        }
    },
    "lava": class Lava extends Entity {
        constructor(data) {
            super(data)
            this.color = "#f78306"
            this.auraAlpha = 0.5
            this.auraColor = "rgb(247, 131, 6)"
            this.aura = data.aura != undefined ? data.aura : 150
        }
    },
    "corrosive": class Corrosive extends Entity {
        constructor(data) {
            super(data)
            this.color = "#00EB00"
        }
    },
    "corrosivesniper": class Corrosivesniper extends Entity {
        constructor(data) {
            super(data)
            this.color = "#61FF61"

            this.delay = 3000
            this.timer = Math.random() * this.delay

            this.bulletsize = data.bulletsize || this.radius / 2
        }

        behavior(timeFix, delta) {
            this.timer += delta
        }

        interact(player) {
            super.interact(player)
            if (this.timer > this.delay && !player.onSafe) {
                let target
                if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= 20 * 32) {
                    target = player
                }

                if (target) {
                    let angl = Math.atan2(target.pos.y - this.pos.y, target.pos.x - this.pos.x)

                    let bullet = new Bullet({
                        cx: this.pos.x,
                        cy: this.pos.y,
                        radius: this.bulletsize,
                        speed: 10,
                        spawner: this.spawner
                    })
                    bullet.color = "#61FF61"
                    bullet.vel.x = Math.cos(angl) * bullet.speed
                    bullet.vel.y = Math.sin(angl) * bullet.speed

                    this.nestedEntities.push(bullet)
                    this.timer = 0
                }
            }
        }
    },
    "rapiditysniper": class Rapiditysniper extends Entity {
        constructor(data) {
            super(data)
            this.color = "#8C01B7"

            this.delay = 3000
            this.timer = Math.random() * this.delay

            this.bulletsize = data.bulletsize || this.radius / 2
        }

        behavior(timeFix, delta) {
            this.timer += delta
        }

        interact(player) {
            super.interact(player)
            if (this.timer > this.delay && !player.onSafe) {
                let target
                if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= 20 * 32) {
                    target = player
                }

                if (target) {
                    let angl = Math.atan2(target.pos.y - this.pos.y, target.pos.x - this.pos.x)

                    let bullet = new Bullet({
                        cx: this.pos.x,
                        cy: this.pos.y,
                        radius: this.bulletsize,
                        speed: 10,
                        spawner: this.spawner
                    })
                    bullet.color = "#8C01B7"
                    bullet.vel.x = Math.cos(angl) * bullet.speed
                    bullet.vel.y = Math.sin(angl) * bullet.speed

                    this.nestedEntities.push(bullet)
                    this.timer = 0
                }
            }
        }
    },
    "shield": class Shield extends Entity {
        constructor(data) {
            super(data)
            this.color = "#29ffc6"
            this.auraAlpha = 0.3
            this.auraColor = "rgb(41, 255, 198)"
            this.aura = data.aura != undefined ? data.aura : 90
        }

        auraEffect(player, data) {
            player.addEffect("shield", true)
        }
    },
    "tree": class Tree extends Entity {
        constructor(data) {
            super(data)
            this.color = "#4e2700"

            this.staticSpeed = data.speed + 0
            this.releaseTime = 4000
            this.timer = Math.random() * 3500
            this.timer2 = Math.random() * 500
            this.timer3 = 0
            this.waiting = true
            this.shake = false
            this.currentVel = { x: this.vel.x + 0, y: this.vel.y + 0 }
            this.beforeShakeVel = { x: this.vel.x + 0, y: this.vel.y + 0 }
        }

        behavior(timeFix, delta) {
            this.timer += delta
            this.timer2 += delta
            this.timer3 += delta
            if (this.timer > this.releaseTime) {
                let count = Math.floor(Math.random() * 6) + 2
                for (let i = 0; i < count; i++) {
                    let bullet = new Leafbullet({
                        cx: this.pos.x,
                        cy: this.pos.y,
                        radius: 12,
                        speed: 6,
                        spawner: this.spawner
                    })
                    bullet.vel.x = Math.cos(i * Math.PI / (count / 2)) * bullet.speed
                    bullet.vel.y = Math.sin(i * Math.PI / (count / 2)) * bullet.speed

                    this.nestedEntities.push(bullet)
                }
                this.timer = 0
                this.vel.x = this.beforeShakeVel.x
                this.vel.y = this.beforeShakeVel.y
                this.shake = false
            }
            if (this.vel.x !== 0 && this.vel.y != 0) {
                this.currentVel.x = this.vel.x
                this.currentVel.y = this.vel.y
            }
            if (this.timer2 > 500) {
                this.waiting = !this.waiting
                this.timer2 = 0
            }
            if (this.timer > 3500) {
                if (!this.shake) {
                    this.beforeShakeVel.x = this.currentVel.x
                    this.beforeShakeVel.y = this.currentVel.y
                }
                this.shake = true
                if (this.timer3 > 50) {
                    this.vel.x = -this.currentVel.x
                    this.vel.y = -this.currentVel.y
                    this.timer3 = 0
                }
            } else if (this.waiting) {
                this.vel.x = 0
                this.vel.y = 0
            } else {
                this.vel.x = this.currentVel.x
                this.vel.y = this.currentVel.y
                let deg = (this.timer2 / 5 + 90) * Math.PI / 180
                this.speedMultiplier = Math.abs(Math.sin(deg))
                if (this.speedMultiplier > 1.5) this.speedMultiplier = 1.5
            }
            if (this.waiting) {
                this.speedMultiplier *= 1
            }
        }
    },
    "pull": class Pull extends Entity {
        constructor(data) {
            super(data)
            this.color = "#78148C"
            this.auraColor = this.color
            this.aura = data.aura != undefined ? data.aura : 150
            this.gravity = data.power || 2.5
        }

        auraEffect(player, data) {
            let dx = player.pos.x - this.pos.x
            let dy = player.pos.y - this.pos.y
            let dist = this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y)
            let attractAmplitude = Math.pow(2, -(dist / 120))
            let moveDist = this.gravity * attractAmplitude
            let angle = Math.atan2(dy, dx)
            let timeFix = data.timeFix
            player.gPos.x -= (moveDist * Math.cos(angle)) * timeFix
            player.gPos.y -= (moveDist * Math.sin(angle)) * timeFix
        }
    },
    "push": class Push extends Entity {
        constructor(data) {
            super(data)
            this.color = "#7B9DB2"
            this.auraColor = this.color
            this.aura = data.aura != undefined ? data.aura : 150
            this.gravity = data.power || 2.5
        }

        auraEffect(player, data) {
            let dx = player.pos.x - this.pos.x
            let dy = player.pos.y - this.pos.y
            let dist = this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y)
            let attractAmplitude = Math.pow(2, -(dist / 120))
            let moveDist = this.gravity * attractAmplitude
            let angle = Math.atan2(dy, dx)
            let timeFix = data.timeFix
            player.gPos.x += (moveDist * Math.cos(angle)) * timeFix
            player.gPos.y += (moveDist * Math.sin(angle)) * timeFix
        }
    },
    "slippery": class Slippery extends Entity {
        constructor(data) {
            super(data)
            this.color = "#1AACBF"
            this.auraColor = this.color
            this.auraAlpha = 0.5
            this.aura = data.aura != undefined ? data.aura : 150
        }
    },
    "enlarging": class Enlarging extends Entity {
        constructor(data) {
            super(data)
            this.color = "#4d0163"
            this.auraColor = this.color
            this.auraAlpha = 0.5
            this.aura = data.aura != undefined ? data.aura : 150
        }

        auraEffect(player, data) {
            player.addEffect("enlarging", true)
        }
    },
    "zigzag": class Zigzag extends Entity {
        constructor(data) {
            super(data)
            this.color = "#B371F2"

            this.switchInterval = 500;
            this.switchTime = 500;
            this.switchAdd = false;
            this.turnAngle = Math.PI / 2
        }

        behavior(timeFix, delta) {
            if (this.switchTime > 0) {
                this.switchTime -= delta
            } else {
                this.switchTime = this.switchInterval
                if (!this.switchAdd) {
                    this.velToAngle();
                    this.angle -= this.turnAngle
                    this.angleToVel();
                    this.switchAdd = true;
                } else {
                    this.velToAngle();
                    this.angle += this.turnAngle
                    this.angleToVel();
                    this.switchAdd = false;
                }
            }
        }
    },
    "toxic": class Toxic extends Entity {
        constructor(data) {
            super(data)
            this.color = "#00C700"
            this.auraColor = this.color
            this.auraAlpha = 0.2
            this.aura = data.aura != undefined ? data.aura : 150
        }
    },
    "speedsniper": class Speedsniper extends Entity {
        constructor(data) {
            super(data)
            this.color = "#FF9000"
            this.delay = 3000
            this.timer = Math.random() * this.delay

            this.bulletsize = data.bulletsize || this.radius / 2
        }

        behavior(timeFix, delta) {
            this.timer += delta
        }

        interact(player) {
            super.interact(player)
            if (this.timer > this.delay && !player.onSafe) {
                let target
                if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= 20 * 32) {
                    target = player
                }

                if (target) {
                    let angl = Math.atan2(target.pos.y - this.pos.y, target.pos.x - this.pos.x)

                    let bullet = new Bullet({
                        cx: this.pos.x,
                        cy: this.pos.y,
                        radius: this.bulletsize,
                        speed: 10,
                        spawner: this.spawner
                    })
                    bullet.color = "#FF9000"
                    bullet.mirage = true
                    bullet.vel.x = Math.cos(angl) * bullet.speed
                    bullet.vel.y = Math.sin(angl) * bullet.speed

                    this.nestedEntities.push(bullet)
                    this.timer = 0
                }
            }
        }
    },
    "regensniper": class Regensniper extends Entity {
        constructor(data) {
            super(data)
            this.color = "#00CC8E"
            this.delay = 3000
            this.timer = Math.random() * this.delay

            this.bulletsize = data.bulletsize || this.radius / 2
        }

        behavior(timeFix, delta) {
            this.timer += delta
        }

        interact(player) {
            super.interact(player)
            if (this.timer > this.delay && !player.onSafe) {
                let target
                if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= 20 * 32) {
                    target = player
                }

                if (target) {
                    let angl = Math.atan2(target.pos.y - this.pos.y, target.pos.x - this.pos.x)

                    let bullet = new Bullet({
                        cx: this.pos.x,
                        cy: this.pos.y,
                        radius: this.bulletsize,
                        speed: 10,
                        spawner: this.spawner
                    })
                    bullet.mirage = true
                    bullet.color = "#00CC8E"
                    bullet.vel.x = Math.cos(angl) * bullet.speed
                    bullet.vel.y = Math.sin(angl) * bullet.speed

                    this.nestedEntities.push(bullet)
                    this.timer = 0
                }
            }
        }
    },
    "turning": class Turning extends Entity {
        constructor(data) {
            super(data)
            this.color = "#29521A"

            this.dir = this.speed / 150
        }

        behavior(timeFix, delta) {
            this.velToAngle()
            this.angle += this.dir * (delta / 30)
            this.angleToVel()
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
                        this.dir = -this.dir
                        // consolthis.log('right')
                    } else {
                        this.pos.y = zone.y - radius - 1
                        this.vel.y = -Math.abs(this.vel.y)
                        this.dir = -this.dir
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
                        this.dir = -this.dir
                    } else {
                        this.pos.x = zone.x - radius - 1
                        this.vel.x = -Math.abs(this.vel.x)
                        this.dir = -this.dir
                    }
                }
            }
        }

        colide(boundary) {
            if (this.pos.x - this.radius < boundary.x) {
                this.pos.x = boundary.x + this.radius
                this.vel.x = Math.abs(this.vel.x)
                this.dir = -this.dir
            }
            if (this.pos.x + this.radius > boundary.x + boundary.w) {
                this.pos.x = boundary.x + boundary.w - this.radius
                this.vel.x = -Math.abs(this.vel.x)
                this.dir = -this.dir
            }
            if (this.pos.y - this.radius < boundary.y) {
                this.pos.y = boundary.y + this.radius
                this.vel.y = Math.abs(this.vel.y)
                this.dir = -this.dir
            }
            if (this.pos.y + this.radius > boundary.y + boundary.h) {
                this.pos.y = boundary.y + boundary.h - this.radius
                this.vel.y = -Math.abs(this.vel.y)
                this.dir = -this.dir
            }
        }
    },
    "wavy": class Wavy extends Entity {
        constructor(data) {
            super(data)
            this.color = "#B11E1F"
            this.velToAngle();
            this.angle = Math.PI / 2;
            this.angleToVel();
            this.circleSize = 100;
            this.dir = 1;
            this.switchInterval = 800;
            this.switchTime = 400;
            this.angleIncrement = (this.speed + 6) / this.circleSize
        }

        behavior(timeFix, delta) {
            if (this.switchTime > 0) {
                this.switchTime -= delta
            } else {
                this.switchTime = this.switchInterval
                this.dir *= -1;
            }
            this.velToAngle();
            this.angle += this.angleIncrement * this.dir * timeFix;
            this.angleToVel();
        }

        colide(boundary) {
            if (this.pos.x - this.radius < boundary.x) {
                this.pos.x = boundary.x + this.radius
                this.vel.x = Math.abs(this.vel.x)
                this.dir = - this.dir
            }
            if (this.pos.x + this.radius > boundary.x + boundary.w) {
                this.pos.x = boundary.x + boundary.w - this.radius
                this.vel.x = -Math.abs(this.vel.x)
                this.dir = - this.dir
            }
            if (this.pos.y - this.radius < boundary.y) {
                this.pos.y = boundary.y + this.radius
                this.vel.y = Math.abs(this.vel.y)
                this.dir = - this.dir
            }
            if (this.pos.y + this.radius > boundary.y + boundary.h) {
                this.pos.y = boundary.y + boundary.h - this.radius
                this.vel.y = -Math.abs(this.vel.y)
                this.dir = - this.dir
            }
        }
    },
    "wind": class Wind extends Entity {
        constructor(data) {
            super(data)
            this.color = "#82c2a5"
            this.gravity = 16 / 32
            this.harmless = true
            this.imune = true
            this.alpha = 0.4
        }

        interact(player, data) {
            while (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) < player.radius + this.radius) {
                let dx = player.pos.x - this.pos.x
                let dy = player.pos.y - this.pos.y
                let dist = this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y)
                let attractAmplitude = Math.pow(2, -(dist / (this.radius / 2)))
                let moveDist = this.gravity * attractAmplitude
                let angle = Math.atan2(dy, dx)
                let timeFix = data.timeFix
                player.pos.x += (moveDist * Math.cos(angle)) * timeFix
                player.pos.y += (moveDist * Math.sin(angle)) * timeFix
                player.posToGlobal()
            }
        }
    },
    "windsniper": class Windsniper extends Entity {
        constructor(data) {
            super(data)
            this.color = "#9de3c6"
            this.delay = 3000
            this.timer = Math.random() * this.delay

            this.bulletsize = data.bulletsize || this.radius / 2
        }

        behavior(timeFix, delta) {
            this.timer += delta
        }

        interact(player) {
            super.interact(player)
            if (this.timer > this.delay && !player.onSafe) {
                let target
                if (this.d(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= 20 * 32) {
                    target = player
                }

                if (target) {
                    let angl = Math.atan2(target.pos.y - this.pos.y, target.pos.x - this.pos.x)

                    let bullet = new Bullet({
                        cx: this.pos.x,
                        cy: this.pos.y,
                        radius: this.bulletsize,
                        speed: 10,
                        spawner: this.spawner
                    })
                    bullet.wind = true
                    bullet.color = "#9de3c6"
                    bullet.vel.x = Math.cos(angl) * bullet.speed
                    bullet.vel.y = Math.sin(angl) * bullet.speed

                    this.nestedEntities.push(bullet)
                    this.timer = 0
                }
            }
        }
    },
    "snowman": class Snowman extends Entity {
        constructor(data) {
            super(data)
            this.color = "#fff"

            this.wallHit = false
            this.snowmanRadiusMultipler = 1
            this.growthRate = 0.05 / 2
            this.maxRadiusMultipler = 3
            this.wallTime = 1500
            this.wallDuration = this.wallTime
            this.wallDuration2 = this.wallTime
            this.fixatedShink = false
            this.shrinkingRemaining = 1
        }

        colide(boundary) {
            if (this.pos.x - this.radius < boundary.x) {
                this.pos.x = boundary.x + this.radius
                this.vel.x = Math.abs(this.vel.x)
                this.wallHit = true
            }
            if (this.pos.x + this.radius > boundary.x + boundary.w) {
                this.pos.x = boundary.x + boundary.w - this.radius
                this.vel.x = -Math.abs(this.vel.x)
                this.wallHit = true
            }
            if (this.pos.y - this.radius < boundary.y) {
                this.pos.y = boundary.y + this.radius
                this.vel.y = Math.abs(this.vel.y)
                this.wallHit = true
            }
            if (this.pos.y + this.radius > boundary.y + boundary.h) {
                this.pos.y = boundary.y + boundary.h - this.radius
                this.vel.y = -Math.abs(this.vel.y)
                this.wallHit = true
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
                        // consolthis.log('right')
                    } else {
                        this.pos.y = zone.y - radius - 1
                        this.vel.y = -Math.abs(this.vel.y)
                        this.wallHit = true
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
                    } else {
                        this.pos.x = zone.x - radius - 1
                        this.vel.x = -Math.abs(this.vel.x)
                        this.wallHit = true
                    }
                }
            }
        }

        behavior(timeFix, delta) {
            if (this.wallHit) {
                if (!this.fixatedShink) this.shrinkingRemaining = this.snowmanRadiusMultipler
                this.fixatedShink = true
                let radiusDifference = this.shrinkingRemaining * (Math.ceil(this.wallDuration2) / this.wallTime)
                this.snowmanRadiusMultipler = radiusDifference
                this.snowmanRadiusMultipler = Math.max(this.snowmanRadiusMultipler, 1)
                this.radiusMultiplier *= this.snowmanRadiusMultipler
                this.wallDuration -= delta
                this.wallDuration2 -= delta * 2
                this.speedMultiplier = 0
                if (this.wallDuration < 0) {
                    this.wallDuration = this.wallTime
                    this.wallDuration2 = this.wallTime
                    this.wallHit = false
                    this.fixatedShink = false
                }
            } else {
                this.snowmanRadiusMultipler = Math.min(this.snowmanRadiusMultipler + this.growthRate, this.maxRadiusMultipler)
                this.radiusMultiplier *= this.snowmanRadiusMultipler
            }
        }
    },
    "star": class Star extends Entity {
        constructor(data) {
            super(data)
            this.color = "#faf46e"

            this.timer = 0
            this.starPos = true
        }

        move(timeFix, friction) {
            let vel
            if (this.starPos) {
                vel = new Vector(Math.abs(this.vel.x) * this.speedMultiplier * 2, Math.abs(this.vel.y) * this.speedMultiplier * 2)
            } else {
                vel = new Vector((-Math.abs(this.vel.x)) * this.speedMultiplier * 2, (-Math.abs(this.vel.y)) * this.speedMultiplier * 2)
            }

            this.pos.x += vel.x
            this.pos.y += vel.y

            let dim = 1 - friction * timeFix;
            this.vel.x *= dim;
            this.vel.y *= dim;
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


        behavior(timeFix, delta) {
            this.timer += delta
            this.speedMultiplier = 0
            if (this.timer > 500) {
                this.speedMultiplier = 1
                this.starPos = !this.starPos
                this.timer = this.timer % 500
            }
        }
    },
    "pullghost": class Pullghost extends Entity {
        constructor(data) {
            super(data)
            this.color = "#78148C"
            this.harmless = true
        }
    },
    "pushghost": class Pushghost extends Entity {
        constructor(data) {
            super(data)
            this.color = "#7B9DB2"
            this.harmless = true
        }
    }
}

function addEntity(name, entityClass) {
    enemiesTypes[name] = entityClass
}

function removeEntity(name) {
    delete enemiesTypes[name]
}

export { enemiesTypes, addEntity, removeEntity, Entity } 