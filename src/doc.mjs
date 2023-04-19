import { Entity, addEntity, removeEntity } from "./logic/entity.mjs"
import Worlds from "./worlds.mjs"

export default function (initFunction, animationFunction) {

    let worlds = {}
    for (let world in Worlds) {
        worlds[world] = Worlds[world]
    }
    let worldsList = Object.keys(Worlds)

    let worldsSize = {}
    Object.keys(Worlds).forEach((val) => {
        let world = Worlds[val]
        worldsSize[val] = {}
        for (let a in world) {
            if (!!Number(a)) {
                let area = world[a]
                worldsSize[val][a] = {
                    width: area.properties.size.width * 32,
                    height: area.properties.size.height * 32
                }
            }
        }
    })


    function readFile(file) {
        if (file == undefined) return

        let fr = new FileReader()
        fr.onload = (e) => {
            let lines = e.target.result
            let map
            if (file.name.endsWith(".json")) {
                var newArr = JSON.parse(lines)
                map = newArr
            }
            if (file.name.endsWith(".yaml")
                || file.name.endsWith(".yml")) {
                var newArr = YAML.parse(lines)
                map = newArr
            }
            localStorage.oldFile = map
            worlds = { [map.name]: map }
            worldsList = Object.keys(Worlds)
            let worldsSize = {}
            Object.keys(worlds).forEach((val) => {
                let world = worlds[val]
                worldsSize[val] = {}
                for (let a in world) {
                    if (!!Number(a)) {
                        let area = world[a]
                        worldsSize[val][a] = {
                            width: area.properties.size.width * 32,
                            height: area.properties.size.height * 32
                        }
                    }
                }
            })
        }
        fr.readAsText(file)
    }

    document.getElementById("map-file").addEventListener('change', e => {
        readFile(e.target.files[0])
    })

    document.getElementById("script-file").addEventListener('change', e => {
        let file = e.target.files[0]
        if (file == undefined) return

        let fr = new FileReader()
        fr.onload = (e) => {
            let lines = e.target.result
            let script
            if (file.name.endsWith(".mjs")) {
                script = eval(lines)
            }
            script()
        }
        fr.readAsText(file)
    })

    let canvas = document.getElementById("canvas")
    function resize() {
        let scale = window.innerWidth / canvas.width
        if (window.innerHeight / canvas.height < window.innerWidth / canvas.width) {
            scale = window.innerHeight / canvas.height
        }
        canvas.style.transform = "scale(" + scale + ")"
        canvas.style.left = 1 / 2 * (window.innerWidth - canvas.width) + "px"
        canvas.style.top = 1 / 2 * (window.innerHeight - canvas.height) + "px"
    }


    window.onresize = resize
    window.onload = resize

    document.getElementById("play").onclick = function () {
        document.getElementById("menu").classList.add("hidden")
        document.getElementById("game").classList.remove("hidden")
        let randomNames = ["Alt", "Ctrl", "F4", "C", "V", "WTF", "RAR"]
        const selectedFile = document.getElementById('map-file').files[0]
        if (selectedFile != undefined) {
            readFile(selectedFile)
        }

        initFunction({
            "name": document.getElementById("game-name").value || randomNames[Math.floor(Math.random() * randomNames.length)],
            "worlds": worlds,
            "worldsList": worldsList,
            "worldsSize": worldsSize
        })
        requestAnimationFrame(animationFunction)
    }
}