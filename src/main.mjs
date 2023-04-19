import addEventListeners from "./doc.mjs"
import Vector from "./logic/vector.mjs"
import Game from "./logic/game.mjs"
import loadImg from "./imgl.mjs"

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let off = new Vector(-1280 / 2, -720 / 2)
let fov = 1


let isActive = true

let game
let textures = loadImg()

let lut = Date.now()
addEventListeners(
    function (d) {
        /*canvas.addEventListener("wheel", e => {
            if (play) {
                if (e.ctrlKey) return
                let m = 0.85 ** (e.deltaY / 125)
                fov /= m
            }
        })*/
        game = new Game(d, textures)
        window.onblur = function () {
            isActive = false
        }
        window.onfocus = function () {
            isActive = true
            lut = Date.now()
        }
    },
    function req() {
        requestAnimationFrame(req)
        if (isActive) {
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

            off.x = game.player.pos.x - (1280 / 2)
            off.y = game.player.pos.y - (720 / 2)
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
            game.draw(ctx, off, fov)
            game.update(timeFix, delta)
            ctx.beginPath()
            ctx.fillStyle = "#666"
            ctx.font = "bold 16px Tahoma, Verdana, Segoe, sans-serif"
            ctx.textAlign = "right"
            ctx.fillText("Deaths: " + game.player.killCount, 80, 20)
            ctx.closePath()
        }
    }
)