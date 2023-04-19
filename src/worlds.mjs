export default {
    "Autumn Avenue": {
        "name": "Autumn Avenue",
        "1": {
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
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "2": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "3": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 4.4, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "4": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "normal", "radius": 15, "speed": 3.3, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "5": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "normal", "radius": 20, "speed": 5.2, "amount": 4 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "6": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.3, "amount": 5 },
                        { "type": ["slower","normal"], "radius": 20, "speed": 3.2, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "7": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 3.2, "amount": 7 },
                        { "type": ["normal","slower"], "radius": 20, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "8": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 3.6, "amount": 7 },
                        { "type": ["normal","slower","draining"], "radius": 20, "speed": 4.5, "amount": 6 },
                        { "type": "sand", "radius": 15, "speed": 1.5, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "9": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4, "amount": 7 },
                        { "type": ["normal","slower","draining"], "radius": 20, "speed": 4.2, "amount": 6 },
                        { "type": "sand", "radius": 20, "speed": 1.9, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "10": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 7 },
                        { "type": ["slower","draining","normal"], "radius": 20, "speed": 3.5, "amount": 6 },
                        { "type": "sand", "radius": 20, "speed": 2.5, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            },
            "only-name": "BOSS AREA 10"
        },
        "11": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 7 },
                        { "type": ["quicksand","push"], "radius": 20, "speed": 3.5, "amount": 5 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "12": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 7 },
                        { "type": ["quicksand","push"], "radius": 22.5, "speed": 3.5, "amount": 5 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "13": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 4.5, "amount": 7 },
                        { "type": ["quicksand","push"], "radius": 22.5, "speed": 3.5, "amount": 7 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "14": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 4.5, "amount": 10 },
                        { "type": ["quicksand","push"], "radius": 22.5, "speed": 3.5, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "15": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 4.5, "amount": 10 },
                        { "type": ["quicksand","push","spiral"], "radius": 18.5, "speed": 3.5, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "16": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 4.5, "amount": 6 },
                        { "type": ["quicksand","push","enlarging","bunchleafs"], "radius": 25, "speed": 2.5, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "17": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 4.5, "amount": 8 },
                        { "type": ["quicksand","push","toxic","bunchleafs"], "radius": 25, "speed": 2.5, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "18": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 7 },
                        { "type": ["quicksand","push","toxic","bunchleafs"], "radius": 25, "speed": 3.25, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "19": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": ["quicksand","toxic","changer","bunchleafs"], "radius": 25, "speed": 3.25, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "20": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 35, "speed": 4.5, "amount": 10 },
                        { "type": ["dasher","toxic","changer","bunchleafs"], "radius": 25, "speed": 3.25, "amount": 15 },
                        { "type": "wall", "radius": 30, "speed": 5, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "only-name": "BOSS AREA 20"
            }
        },
        "21": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 35, "speed": 4.5, "amount": 10 },
                        { "type": "freezing", "radius": 15, "speed": 2.5, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "22": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 35, "speed": 4.5, "amount": 10 },
                        { "type": "freezing", "radius": 15, "speed": 2.5, "amount": 3 },
                        { "type": "mine", "radius": 15, "speed": 2.5, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "23": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 35, "speed": 4.5, "amount": 10 },
                        { "type": "freezing", "radius": 15, "speed": 2.5, "amount": 4 },
                        { "type": "pushghost", "radius": 90, "speed": 4, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "24": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "freezing", "radius": 15, "speed": 2.5, "amount": 4 },
                        { "type": ["pushghost", "pullghost","bunchleafs"], "radius": 90, "speed": 4, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "25": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "slippery", "radius": 15, "speed": 2.5, "amount": 2 },
                        { "type": ["pushghost", "pullghost","bunchleafs"], "radius": 90, "speed": 4, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "26": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "turning", "radius": 35, "speed": 4.5, "amount": 6 },
                        { "type": ["pushghost", "pullghost","bunchleafs"], "radius": 90, "speed": 4, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "27": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "turning", "radius": 35, "speed": 4.5, "amount": 7 },
                        { "type": ["pushghost", "pullghost","bunchleafs"], "radius": 50, "speed": 4, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "28": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "turning", "radius": 35, "speed": 4.5, "amount": 7 },
                        { "type": ["pushghost", "pullghost", "wind","bunchleafs"], "radius": 35, "speed": 4, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "29": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "turning", "radius": 20, "speed": 4.5, "amount": 5 },
                        { "type": ["pushghost", "pullghost", "wind","bunchleafs"], "radius": 60, "speed": 4, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "30": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "superdraining", "radius": 20, "speed": 4.5, "amount": 7 },
                        { "type": ["pushghost", "pullghost", "wind","bunchleafs"], "radius": 50, "speed": 4, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "only-name": "BOSS AREA 30"
            }
        },
        "31": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": ["tree","bunchleafs"], "radius": 15, "speed": 4.5, "amount": 4 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "32": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": ["tree","bunchleafs"], "radius": 15, "speed": 4.5, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "33": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": ["tree","bunchleafs"], "radius": 15, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 20, "speed": 4.5, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "34": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": ["tree","bunchleafs"], "radius": 15, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 30, "speed": 4.5, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "35": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 4 },
                        { "type": ["tree","bunchleafs"], "radius": 20, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 15, "speed": 4.5, "amount": 10 },
                        { "type": "icicle", "radius": 35, "speed": 4.5, "amount": 4 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "msg": "It's getting colder.."
            }
        },
        "36": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 4 },
                        { "type": ["tree","bunchleafs"], "radius": 20, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 15, "speed": 4.5, "amount": 10 },
                        { "type": "icicle", "radius": 15, "speed": 4.5, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "37": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 2 },
                        { "type":  ["tree","bunchleafs"], "radius": 22.5, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 15, "speed": 4.5, "amount": 10 },
                        { "type": "poisonsniper", "radius": 15, "speed": 4.5, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "38": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 2 },
                        { "type": ["tree","bunchleafs"], "radius": 25, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 15, "speed": 4.5, "amount": 10 },
                        { "type": "disableghost", "radius": 50, "speed": 10, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "39": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 2 },
                        { "type":  ["tree","bunchleafs"], "radius": 28.5, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 15, "speed": 4.5, "amount": 10 },
                        { "type": "flower", "radius": 30, "speed": 10, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "40": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 2 },
                        { "type":  ["tree","bunchleafs"], "radius": 30, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 15, "speed": 4.5, "amount": 10 },
                        { "type": "flower", "radius": 30, "speed": 10, "amount": 3 },
                        { "type": "sand", "radius": 25, "speed": 3.5, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "only-name": "BOSS AREA 40"
            }
        },
        "41": {
            "zones": [
                {
                    "type": "victory",
                    "x": "2t",
                    "y": 0,
                    "w": "2tn",
                    "h": "16t",
                    "award": {
                        "vp": 3
                    }
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "area-name": "Victory!",
                "msg": "Congratulations, you have passed half of autumn. Awarded 3 VP!"
            }
        },
        "42": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 35, "speed": 6, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "43": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 31, "speed": 6, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "44": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 28, "speed": 6.4, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "45": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 6, "amount": 10 },
                        { "type": "normal", "radius": 15, "speed": 4.3, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "46": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 6, "amount": 10 },
                        { "type": "normal", "radius": 25, "speed": 5.2, "amount": 4 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "47": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 6, "amount": 5 },
                        { "type": ["slower","normal"], "radius": 20, "speed": 5, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "48": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 6, "amount": 7 },
                        { "type": ["normal","slower"], "radius": 20, "speed": 6, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "49": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 6, "amount": 7 },
                        { "type": ["normal","slower","draining"], "radius": 20, "speed": 5, "amount": 6 },
                        { "type": "sand", "radius": 25, "speed": 1.5, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "50": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 6, "amount": 7 },
                        { "type": ["slower","draining","normal"], "radius": 25, "speed": 3.5, "amount": 6 },
                        { "type": "sand", "radius": 25, "speed": 2.5, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "only-name": "BOSS AREA 50"
            }
        },
        "51": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 5.5, "amount": 7 },
                        { "type": ["quicksand","push"], "radius": 20, "speed": 4, "amount": 5 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "52": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 5.5, "amount": 7 },
                        { "type": ["quicksand","push"], "radius": 35, "speed": 3.5, "amount": 5 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "53": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 5.5, "amount": 10 },
                        { "type": ["quicksand","push"], "radius": 28, "speed": 3.5, "amount": 5 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "54": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 5.5, "amount": 7 },
                        { "type": ["quicksand","push"], "radius": 28, "speed": 4.5, "amount": 7 },
                        { "type": "wall", "radius": 30, "speed": 5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "55": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 4.5, "amount": 10 },
                        { "type": ["quicksand","push"], "radius": 22.5, "speed": 3.5, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "56": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 5.5, "amount": 10 },
                        { "type": ["quicksand","push","spiral"], "radius": 25, "speed": 3.5, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 5.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "57": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 5.5, "amount": 6 },
                        { "type": ["quicksand","push","enlarging","bunchleafs"], "radius": 30, "speed": 2.5, "amount": 10 },
                        { "type": "wall", "radius": 32.5, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "58": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 25, "speed": 5.5, "amount": 8 },
                        { "type": ["quicksand","push","toxic","bunchleafs"], "radius": 35, "speed": 4.5, "amount": 10 },
                        { "type": "wall", "radius": 30, "speed": 5.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "59": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 5.5, "amount": 10 },
                        { "type": ["quicksand","toxic","changer","bunchleafs"], "radius": 25, "speed": 4.25, "amount": 10 },
                        { "type": "wall", "radius": 35, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "60": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 5.5, "amount": 10 },
                        { "type": ["quicksand","iciclewarp"], "radius": 25, "speed": 4.25, "amount": 10 },
                        { "type": "wall", "radius": 35, "speed": 4.5, "amount": 6 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "only-name": "BOSS AREA 60"
            }
        },
        "61": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 35, "speed": 5.5, "amount": 10 },
                        { "type": ["speedsniper","regensniper"], "radius": 25, "speed": 3.25, "amount": 5 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "62": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 4.5, "amount": 10 },
                        { "type": ["speedsniper","regensniper","freezing"], "radius": 25, "speed": 3.25, "amount": 5 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "63": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 4.5, "amount": 10 },
                        { "type": ["speedsniper","regensniper","freezing"], "radius": 25, "speed": 4, "amount": 6 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "64": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 4.5, "amount": 10 },
                        { "type": ["spiral"], "radius": 25, "speed": 4, "amount": 6 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "65": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 5.6, "amount": 10 },
                        { "type": ["spiral","wind"], "radius": 25, "speed": 4, "amount": 6 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "66": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 5.6, "amount": 10 },
                        { "type": ["spiral","wind"], "radius": 25, "speed": 5, "amount": 6 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "67": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 5.6, "amount": 10 },
                        { "type": ["snowman","wind"], "radius": 25, "speed": 4, "amount": 8 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "68": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 5.6, "amount": 10 },
                        { "type": ["snowman","wind","flower"], "radius": 25, "speed": 4, "amount": 8 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "69": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 6, "amount": 10 },
                        { "type": ["snowman","wind","flower"], "radius": 25, "speed": 4, "amount": 8 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "70": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": ["authumleaf","bunchleafs"], "radius": 35, "speed": 6, "amount": 15 },
                        { "type": "wind", "radius": 150, "speed": 4, "amount": 4 },
                        { "type": "wall", "radius": 35, "speed": 6, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "only-name":"BOSS AREA 70"
            }
        },
        "71": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": ["tree","bunchleafs"], "radius": 15, "speed": 4.5, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "72": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 7, "amount": 10 },
                        { "type": ["tree","bunchleafs"], "radius": 15, "speed": 4.5, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "73": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 7, "amount": 10 },
                        { "type": ["tree","bunchleafs"], "radius": 15, "speed": 5, "amount": 10 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "74": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 7, "amount": 10 },
                        { "type": ["tree","bunchleafs","octosniper"], "radius": 15, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 20, "speed": 4.5, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "75": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 7, "amount": 10 },
                        { "type": ["tree","bunchleafs","octosniper"], "radius": 15, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 40, "speed": 6, "amount": 13 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "76": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 7, "amount": 10 },
                        { "type": ["tree","bunchleafs","octosniper"], "radius": 15, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 35, "speed": 6, "amount": 10 },
                        { "type": "icicle", "radius": 35, "speed": 4.5, "amount": 4 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "msg": "It's getting colder.."
            }
        },
        "77": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 7, "amount": 10 },
                        { "type": ["tree","bunchleafs","octosniper"], "radius": 15, "speed": 4.5, "amount": 5 },
                        { "type": "grass", "radius": 40, "speed": 6, "amount": 13 },
                        { "type": "icicle", "radius": 15, "speed": 4.5, "amount": 5 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "78": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 30, "speed": 7, "amount": 10 },
                        { "type": ["tree","bunchleafs","octosniper"], "radius": 15, "speed": 5, "amount": 10 },
                        { "type": "grass", "radius": 45, "speed": 6, "amount": 13 },
                        { "type": "poisonsniper", "radius": 15, "speed": 4.5, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "79": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 40, "speed": 5, "amount": 5 },
                        { "type": ["tree","bunchleafs"], "radius": 25, "speed": 4.5, "amount": 10 },
                        { "type": "grass", "radius": 30, "speed": 4.5, "amount": 10 },
                        { "type": "disableghost", "radius": 50, "speed": 10, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                }
            }
        },
        "80": {
            "zones": [
                {
                    "type": "safe",
                    "x": 0,
                    "y": 0,
                    "w": "10t",
                    "h": "16t"
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
                        { "type": "authumleaf", "radius": 40, "speed": 5, "amount": 5 },
                        { "type": ["tree","bunchleafs"], "radius": 160, "speed": 5, "amount": 4 },
                        { "type": "grass", "radius": 15, "speed": 4.5, "amount": 10 },
                        { "type": "flower", "radius": 30, "speed": 10, "amount": 3 }
                    ]
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_next",
                    "translate": {
                        "x": 160,
                        "y": 0
                    }
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "only-name": "BOSS AREA 80"
            }
        },
        "81": {
            "zones": [
                {
                    "type": "victory",
                    "x": "2t",
                    "y": 0,
                    "w": "2tn",
                    "h": "16t",
                    "award": {
                        "vp": 7
                    }
                },
                {
                    "type": "teleport",
                    "x": 0,
                    "y": 0,
                    "w": "2t",
                    "h": "16t",
                    "tpArea": "_prev",
                    "translate": {
                        "x": -160,
                        "y": 0
                    }
                },
                {
                    "type": "teleport",
                    "x": "2tn",
                    "y": "0t",
                    "w": "2t",
                    "h": "16t",
                    "endArea": true
                }
            ],
            "properties": {
                "size": {
                    "width": 80,
                    "height": 16
                },
                "area-name": "Victory!",
                "msg": "This spring will always remain in your memory. Awarded 7 VP!"
            }
        },
        "datas": {
            "fillStyle": "#D79D49",
            "fillAlpha": 0.29,
            "title": {
                "fillStyle": "#D79D49",
                "strokeStyle": "#9E582B"
            }
        }
    },
    "Meandering Mesa": YAML.parse(`
"1":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 15
          speed: 3
          amount: 6
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 13t
      w: 10t
      h: 2t
      tpWorld: "_next"
      translate:
        x: 0
        cy: 2.5t
    - type: teleport
      x: 0t
      "y": 0t
      w: 10t
      h: 2t
      tpWorld: "_prev"
      translate:
        x: 0
        cy: 2.5tn
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"2":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 15
          speed: 4
          amount: 7
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"3":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 15
          speed: 5
          amount: 10
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"4":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 15
          speed: 5
          amount: 14
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"5":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 15
          speed: 5
          amount: 20
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"6":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 15
          speed: 5
          amount: 17
        - type: iciclewarp
          radius: 30
          speed: 3
          amount: 10
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"7":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 30
          speed: 4
          amount: 8
        - type: iciclewarp
          radius: 50
          speed: 3
          amount: 15
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"8":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 50
          speed: 7
          amount: 15
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"9":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 15
          speed: 5
          amount: 12
        - type: iciclewarp
          radius: 30
          speed: 4
          amount: 10
        - type: iciclewarp
          radius: 45
          speed: 3
          amount: 8
        - type: iciclewarp
          radius: 60
          speed: 2
          amount: 6
        - type: iciclewarp
          radius: 75
          speed: 1
          amount: 4
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"10":
  properties:
    size:
      width: 80
      height: 15
    only-name: 'BOSS AREA 10'
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: iciclewarp
          radius: 120
          speed: 4
          amount: 3
        - type: iciclewarp
          radius: 15
          speed: 2
          amount: 50
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"11":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 15
          speed: 5
          amount: 3
        - type: draining
          radius: 15
          speed: 4
          amount: 3
          aura: 150
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"12":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 15
          speed: 5
          amount: 6
        - type: draining
          radius: 15
          speed: 4
          amount: 4
          aura: 150
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"13":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 20
          speed: 5
          amount: 10
        - type: draining
          radius: 15
          speed: 4
          amount: 5
          aura: 150
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"14":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 30
          speed: 5
          amount: 10
        - type: draining
          radius: 20
          speed: 4
          amount: 6
          aura: 150
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"15":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 30
          speed: 4
          amount: 8
        - type: shutter
          radius: 15
          speed: 5
          amount: 13
        - type: draining
          radius: 15
          speed: 4
          amount: 5
          aura: 150
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"16":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 40
          speed: 4
          amount: 7
        - type: shutter
          radius: 20
          speed: 5
          amount: 14
        - type: draining
          radius: 30
          speed: 4
          amount: 7
          aura: 200
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"17":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 50
          speed: 4
          amount: 8
        - type: draining
          radius: 15
          speed: 5
          amount: 15
          aura: 150
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"18":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 45
          speed: 4
          amount: 7
        - type: shutter
          radius: 30
          speed: 5
          amount: 10
        - type: shutter
          radius: 15
          speed: 6
          amount: 15
        - type: draining
          radius: 15
          speed: 4
          amount: 10
          aura: 150
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"19":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 25
          speed: 9
          amount: 20
        - type: draining
          radius: 50
          speed: 5
          amount: 7
          aura: 300
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"20":
  properties:
    size:
      width: 80
      height: 15
    only-name: 'BOSS AREA 20'
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: shutter
          radius: 15
          speed: 3
          amount: 25
        - type: shutter
          radius: 60
          speed: 7
          amount: 6
        - type: draining
          radius: 105
          speed: 5
          amount: 3
          aura: 600
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"21":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 15
          speed: 2
          amount: 5
        - type: push
          radius: 15
          speed: 4
          amount: 3
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"22":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 15
          speed: 2
          amount: 8
        - type: push
          radius: 15
          speed: 4
          amount: 5
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"23":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 15
          speed: 2
          amount: 15
        - type: push
          radius: 15
          speed: 4
          amount: 8
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"24":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 30
          speed: 2
          amount: 7
        - type: dasher
          radius: 15
          speed: 3
          amount: 12
        - type: push
          radius: 15
          speed: 4
          amount: 7
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"25":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 20
          speed: 3
          amount: 15
        - type: dasher
          radius: 40
          speed: 3
          amount: 8
        - type: push
          radius: 15
          speed: 4
          amount: 3
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"26":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 30
          speed: 2
          amount: 20
        - type: push
          radius: 20
          speed: 4
          amount: 10
          aura: 200
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"27":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 15
          speed: 4
          amount: 12
        - type: dasher
          radius: 30
          speed: 3
          amount: 7
        - type: dasher
          radius: 45
          speed: 2
          amount: 5
        - type: push
          radius: 20
          speed: 5
          amount: 10
          aura: 200
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"28":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 50
          speed: 2
          amount: 5
        - type: dasher
          radius: 10
          speed: 3
          amount: 20
        - type: push
          radius: 30
          speed: 4
          amount: 7
          aura: 300
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"29":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 45
          speed: 3
          amount: 15
        - type: push
          radius: 45
          speed: 3
          amount: 7
          aura: 350
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"30":
  properties:
    size:
      width: 80
      height: 15
    only-name: 'BOSS AREA 30'
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: dasher
          radius: 15
          speed: 1
          amount: 30
        - type: dasher
          radius: 105
          speed: 3
          amount: 2
        - type: push
          radius: 105
          speed: 4
          amount: 2
          aura: 600
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"31":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: icicle
          radius: 30
          speed: 3
          amount: 7
        - type: icicle
          radius: 30
          speed: 3
          amount: 3
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 2
        - type: pull
          radius: 15
          speed: 3
          amount: 3
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"32":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: icicle
          radius: 30
          speed: 3
          amount: 12
        - type: icicle
          radius: 30
          speed: 3
          amount: 5
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 3
        - type: pull
          radius: 15
          speed: 3
          amount: 5
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"33":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: icicle
          radius: 15
          speed: 3
          amount: 12
        - type: icicle
          radius: 30
          speed: 3
          amount: 6
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 5
        - type: pull
          radius: 15
          speed: 3
          amount: 7
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"34":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: icicle
          radius: 30
          speed: 3
          amount: 12
        - type: icicle
          radius: 15
          speed: 4
          amount: 7
        - type: icicle
          radius: 30
          speed: 3
          amount: 3
          horizontal: true
        - type: icicle
          radius: 15
          speed: 3
          amount: 7
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 5
        - type: pull
          radius: 15
          speed: 3
          amount: 7
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"35":
  properties:
    size:
      width: 80
      height: 15
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 60t
      h: 15t
      enemies:
        - type: icicle
          radius: 15
          speed: 3
          amount: 30
        - type: icicle
          radius: 30
          speed: 3
          amount: 3
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 7
        - type: pull
          radius: 30
          speed: 4
          amount: 5
          aura: 250
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 10
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 15t
    - type: safe
      x: 10tn
      "y": 15tn
      w: 10t
      h: 15t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 15tn
      w: 2t
      h: 15t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"36":
  properties:
    size:
      width: 100
      height: 20
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 80t
      h: 20t
      enemies:
        - type: icicle
          radius: 25
          speed: 5
          amount: 20
        - type: icicle
          radius: 35
          speed: 5
          amount: 10
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 10
        - type: pull
          radius: 20
          speed: 4
          amount: 12
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 16
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 20t
    - type: safe
      x: 10tn
      "y": 20tn
      w: 10t
      h: 20t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 20t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 20tn
      w: 2t
      h: 20t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"37":
  properties:
    size:
      width: 100
      height: 20
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 80t
      h: 20t
      enemies:
        - type: icicle
          radius: 35
          speed: 5
          amount: 17
        - type: icicle
          radius: 40
          speed: 5
          amount: 12
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 10
        - type: shutter
          radius: 25
          speed: 7
          amount: 7
        - type: dasher
          radius: 25
          speed: 1
          amount: 7
        - type: pull
          radius: 20
          speed: 4
          amount: 12
          aura: 150
          power: 3
        - type: wall
          radius: 30
          speed: 3
          amount: 16
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 20t
    - type: safe
      x: 10tn
      "y": 20tn
      w: 10t
      h: 20t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 20t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 20tn
      w: 2t
      h: 20t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"38":
  properties:
    size:
      width: 100
      height: 20
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 80t
      h: 20t
      enemies:
        - type: icicle
          radius: 15
          speed: 5
          amount: 25
        - type: icicle
          radius: 25
          speed: 5
          amount: 17
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 10
        - type: shutter
          radius: 30
          speed: 7
          amount: 10
        - type: dasher
          radius: 30
          speed: 1
          amount: 10
        - type: pull
          radius: 20
          speed: 4
          amount: 10
          aura: 150
          power: 3
        - type: freezing
          radius: 10
          speed: 4
          amount: 7
          aura: 75
        - type: wall
          radius: 30
          speed: 3
          amount: 16
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 20t
    - type: safe
      x: 10tn
      "y": 20tn
      w: 10t
      h: 20t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 20t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 20tn
      w: 2t
      h: 20t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"39":
  properties:
    size:
      width: 100
      height: 20
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 80t
      h: 20t
      enemies:
        - type: icicle
          radius: 40
          speed: 5
          amount: 15
        - type: icicle
          radius: 40
          speed: 5
          amount: 10
          horizontal: true
        - type: icesniper
          radius: 25
          speed: 3
          amount: 7
        - type: shutter
          radius: 40
          speed: 7
          amount: 7
        - type: dasher
          radius: 40
          speed: 2
          amount: 7
        - type: pull
          radius: 20
          speed: 4
          amount: 9
          aura: 200
          power: 3
        - type: freezing
          radius: 10
          speed: 4
          amount: 10
          aura: 75
        - type: wall
          radius: 30
          speed: 3
          amount: 16
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 20t
    - type: safe
      x: 10tn
      "y": 20tn
      w: 10t
      h: 20t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 20t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 20tn
      w: 2t
      h: 20t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"40":
  properties:
    size:
      width: 100
      height: 20
    only-name: BOSS AREA 40
  zones: 
    - type: active
      x: 10t
      "y": 0t
      w: 80t
      h: 20t
      enemies:
        - type: icicle
          radius: 20
          speed: 5
          amount: 25
        - type: icicle
          radius: 30
          speed: 5
          amount: 10
          horizontal: true
        - type: icesniper
          radius: 15
          speed: 3
          amount: 10
        - type: shutter
          radius: 90
          speed: 12
          amount: 2
        - type: shutter
          radius: 20
          speed: 5
          amount: 7
        - type: dasher
          radius: 90
          speed: 3
          amount: 2
        - type: dasher
          radius: 20
          speed: 3
          amount: 7
        - type: pull
          radius: 60
          speed: 4
          amount: 4
          aura: 400
          power: 3
        - type: freezing
          radius: 10
          speed: 4
          amount: 15
          aura: 75
        - type: wall
          radius: 30
          speed: 3
          amount: 16
    - type: safe
      x: 0t
      "y": 0t
      w: 10t
      h: 20t
    - type: safe
      x: 10tn
      "y": 20tn
      w: 10t
      h: 20t
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 20t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: teleport
      x: 2tn
      "y": 20tn
      w: 2t
      h: 20t
      tpArea: "_next"
      translate:
        x: 160
        y: 0
"41":
  properties:
    size:
      width: 80
      height: 15
    area-name: 'Victory!'
    msg: 'Cold Meandering Mesa has defeated... 4 VP awarded'
  zones: 
    - type: teleport
      x: 0t
      "y": 0t
      w: 2t
      h: 15t
      tpArea: "_prev"
      translate:
        x: -160
        y: 0
    - type: victory
      x: 2t
      y: 0
      w: 2tn
      h: 0tn
      award:
        vp: 3
    - type: teleport
      x: 2tn
      y: 0t
      w: 2t
      h: 15t
      endArea: true
name: "Meandering Mesa"
datas:
  fillStyle: "#00416A"
  fillAlpha: 0.35
  ColorCL: "#7FC7FF"
  title:
    fillStyle: "#D6B975"
    strokeStyle: "#2271B3"
  area:
    zones:
      saveColor: "#2271B3"
      tpColor: "#252850"
    `)
}