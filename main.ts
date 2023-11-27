let LedX = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    LedX = 0
    for (let index = 0; index < 5; index++) {
        led.plot(LedX, 0)
        basic.pause(200)
        LedX += 1
    }
})
basic.forever(function () {
	
})
