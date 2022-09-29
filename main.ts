input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showString("A = ")
    basic.showNumber(2025)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showString("Solve")
    basic.pause(1000)
    basic.showString("45^2")
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    temp = input.temperature()
    basic.showNumber(temp)
    basic.showString("°C")
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.East)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
})
let temp = 0
basic.showString("Start?")
basic.pause(1000)
basic.showArrow(ArrowNames.West)
basic.clearScreen()
