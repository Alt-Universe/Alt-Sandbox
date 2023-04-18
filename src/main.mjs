import Player from "./logic/player.mjs"
import addEventListeners from "./doc.mjs"
import Vector from "./logic/vector.mjs"
import World from "./logic/world.mjs"
import loadImg from "./imgl.mjs"

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let off = new Vector(-1280 / 2, -720 / 2)
let fov = 1

let world,
    player

let movement = {
    u: false,
    d: false,
    l: false,
    r: false,
    s: false,
    mouse: false,
    mouX: 0,
    mouY: 0,
}

let textures = loadImg()
console.log(textures)

let play = false

let lut = Date.now()
addEventListeners(
    function (d) {
        world = new World(d.world)
        player = new Player(d.world.name, d.name, world.areas[1].size)
        world.areas[player.area].load()
        play = true
        document.addEventListener('keydown', (e) => {
            if (!movement.mouse && play) {
                if (e.keyCode == 87 || e.keyCode == 38) movement.u = true
                if (e.keyCode == 83 || e.keyCode == 40) movement.d = true
                if (e.keyCode == 65 || e.keyCode == 37) movement.l = true
                if (e.keyCode == 68 || e.keyCode == 39) movement.r = true
                if (e.keyCode == 81) {
                    if (!world.areasList.includes(player.area-1)) return
                    world.teleport(player, { area: player.area-1 })
                    let tX = 0, tY = 0

                    let size = world.areas[player.area].size
                    let position = world.areas[player.area].pos

                    if (size.x > size.y) {
                        tX = (5 * 32) + position.x
                        tY = (size.y / 2) + position.y
                    }
                    if (size.y > size.x) {
                        tX = (size.x / 2) + position.x
                        tY = size.y - (5 * 32) + position.y
                    }
                    player.gPos.x = tX
                    player.gPos.y = tY
                }
                if (e.keyCode == 69) {
                    if (!world.areasList.includes(player.area+1)) return
                    world.teleport(player, { area: player.area+1 })
                    let tX = 0, tY = 0

                    let size = world.areas[player.area].size
                    let position = world.areas[player.area].pos

                    if (size.x > size.y) {
                        tX = (5 * 32) + position.x
                        tY = (size.y / 2) + position.y
                    }
                    if (size.y > size.x) {
                        tX = (size.x / 2) + position.x
                        tY = size.y - (5 * 32) + position.y
                    }
                    player.gPos.x = tX
                    player.gPos.y = tY
                }
                if (e.keyCode == 67) {
                    player.noColide = !player.noColide
                    if (player.noColide) player.color="purple"
                    else player.color = "red"
                }
                if (e.shiftKey) movement.s = true
            }
        })
        document.addEventListener("keyup", (e) => {
            if (!movement.mouse && play) {
                if (e.keyCode == 87 || e.keyCode == 38) movement.u = false
                if (e.keyCode == 83 || e.keyCode == 40) movement.d = false
                if (e.keyCode == 65 || e.keyCode == 37) movement.l = false
                if (e.keyCode == 68 || e.keyCode == 39) movement.r = false
                if (!e.shiftKey) movement.s = false
            }
        })
        document.addEventListener("mousemove", (e) => {
            if (movement.mouse && play) {
                movement.mouX =
                    Math.round(
                        (e.clientX - document.documentElement.clientWidth / 2) * 100
                    ) / 100
                movement.mouY =
                    Math.round(
                        (e.clientY - document.documentElement.clientHeight / 2) * 100
                    ) / 100
            }
        })
        document.addEventListener("mousedown", (e) => {
            if (play)
                movement.mouse = !movement.mouse
        })
        /*canvas.addEventListener("wheel", e => {
            if (play) {
                if (e.ctrlKey) return
                let m = 0.85 ** (e.deltaY / 125)
                fov /= m
            }
        })*/
    },
    function req() {
        requestAnimationFrame(req)
        let ct = Date.now()
        let delta = ct - lut
        let timeFix = delta / (1000 / 30)
        lut = Date.now()

        ctx.beginPath()
        ctx.clearRect(0, 0, 1280, 720)
        ctx.globalAlpha = 1
        ctx.fillStyle = "#333"
        ctx.fillRect(0, 0, 1280, 720)
        ctx.closePath()

        for (let key in textures) {
            let yoff = -24
            let invFov = -fov + 2
            textures[key].type == 'pattern' &&
                textures[key].img.setTransform({
                    a: 1,
                    d: 1,
                    e: -off.x,
                    f: -off.y,
                })
            if (textures[key].type == 'pack') {
                for (let key2 in textures[key])
                    textures[key][key2].type == 'pattern' &&
                        textures[key][key2].img.setTransform({
                            a: 1,
                            d: 1,
                            e: - off.x,
                            f: - off.y,
                        })
            }
        }

        player.move(movement)
        player.update(timeFix, delta)
        world.draw(ctx, off, fov, player, textures)
        world.update(timeFix, delta, player)

        off.x = player.pos.x - (1280 / 2)
        off.y = player.pos.y - (720 / 2)
        player.draw(ctx, off, fov)
    }
)