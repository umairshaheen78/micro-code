input.onButtonPressed(Button.A, function () {
    basic.showString("" + (images.createBigImage(`
        . # # # . . # . . #
        # . . . # . # . # .
        # . . . # . # # . .
        # . . . # . # . # .
        . # # # . . # . . #
        `)))
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # # # .
        . # # # .
        `)
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
})
input.onGesture(Gesture.Shake, function () {
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
})
basic.pause(1000)
basic.showString("Start?")
