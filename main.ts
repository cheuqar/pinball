function Win () {
    CanGo = 0
    Li = 0
    for (let index = 0; index < 6; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.pause(300)
        music.stopAllSounds()
    }
    basic.pause(550)
    strip.showRainbow(1, 350)
    strip2.showRainbow(1, 350)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
    for (let index = 0; index < 100; index++) {
        basic.clearScreen()
        strip.rotate(1)
        strip2.rotate(1)
        strip.show()
        strip2.show()
        basic.pause(25)
    }
    for (let index = 0; index < 280; index++) {
        basic.clearScreen()
        strip.rotate(1)
        strip2.rotate(1)
        strip.show()
        strip2.show()
        basic.pause(25)
    }
    basic.pause(2500)
    Resetgame()
}
input.onButtonPressed(Button.A, function () {
    Win()
})
function Gamelooplight () {
    while (true) {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 350)
    for (let index = 0; index < 140; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(25)
    }
    Resetgame()
})
input.onPinPressed(TouchPin.P1, function () {
    if (CanGo == 1) {
        music.stopAllSounds()
        Li = 0
        CanGo = 0
        Score = Score + 1
        range2 = strip2.range(1, Score + 0)
        range2.showColor(neopixel.colors(NeoPixelColors.White))
        range2.show()
        basic.showNumber(Score)
        if (Score >= 6) {
            Win()
        } else {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
            for (let index = 0; index < 12; index++) {
                strip.showRainbow(1, 350)
                range2.showColor(neopixel.colors(NeoPixelColors.White))
                strip.show()
                range2.show()
                basic.pause(100)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
                range2.showColor(neopixel.colors(NeoPixelColors.Black))
                basic.pause(75)
            }
            range2.showColor(neopixel.colors(NeoPixelColors.White))
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            range2.show()
        }
        Li = 1
        CanGo = 1
        music.stopMelody(MelodyStopOptions.All)
        music.stopAllSounds()
    }
})
music.onEvent(MusicEvent.MelodyStarted, function () {
	
})
function Startmusic () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function Startmusic2 () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function Resetgame () {
    Score = 0
    Indx = 1
    Li = 1
    basic.showNumber(Score)
    CanGo = 1
    Startmusic()
    strip = neopixel.create(DigitalPin.P0, 35, NeoPixelMode.RGB)
    strip2 = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
    range2 = strip2.range(1, Score + 0)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip2.showColor(neopixel.colors(NeoPixelColors.Black))
}
let Indx = 0
let range2: neopixel.Strip = null
let Score = 0
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let Li = 0
let CanGo = 0
Resetgame()
loops.everyInterval(25, function () {
    if (Li == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(Indx, neopixel.colors(NeoPixelColors.Yellow))
        range2.showColor(neopixel.colors(NeoPixelColors.White))
        range2.show()
        strip.show()
        basic.pause(5)
        Indx = Indx + 1
        if (Indx > 35) {
            Indx = 1
        }
    }
})
basic.forever(function () {
	
})
