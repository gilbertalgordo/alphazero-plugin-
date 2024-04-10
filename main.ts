controller.player4.onEvent(ControllerEvent.Connected, function () {
    text_list = ["a", "b", "c"]
})
info.onScore(100, function () {
	
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    0,
    true
    )
})
let text_list: string[] = []
let mySprite = 0
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
0,
true
)
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
if (true) {
    console.logValue("x", 0)
    mySprite += 1
}
