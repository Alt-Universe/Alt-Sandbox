export default function (initFunction, animationFunction) {

    let world = {
        "1": {
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            },
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t",
                    "mSpeed": 10
                },
                {
                    "type": "safe",
                    "x": "10tn",
                    "y": "16tn",
                    "w": "10t",
                    "h": "16t"
                },
                {
                    "type": "active",
                    "x": "10t",
                    "y": 0,
                    "w": "60t",
                    "h": "16t",
                    "enemies": [
                        {
                            "type": [
                                "disabler"
                            ],
                            "radius": 30,
                            "speed": 4,
                            "amount": 4
                        }
                    ]
                },
                {
                    "type": "teleport",
                    "x": "0t",
                    "y": "14t",
                    "w": "10t",
                    "h": "2t",
                    "tpWorld": "_next",
                    "translate": {
                        "x": 0,
                        "cy": "2.5t"
                    }
                },
                {
                    "type": "teleport",
                    "x": "0t",
                    "y": "0t",
                    "w": "10t",
                    "h": "2t",
                    "tpWorld": "_prev",
                    "translate": {
                        "x": 0,
                        "cy": "2.5tn"
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "16tn",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ]
        },
        "name": "Gooded Map",
        "datas": {
            "fillStyle": "#888",
            "title": {
                "fillStyle": "#fff",
                "strokeStyle": "#969275"
            }
        }
    }

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
            localStorage.oldFile = file
            world = map
        }
        fr.readAsText(file)
    }

    document.getElementById("map-file").addEventListener('change', e => {
        readFile(e.target.files[0])
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
            "world": world
        })
        requestAnimationFrame(animationFunction)
    }
}