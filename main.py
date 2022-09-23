def Win():
    global CanGo, Li
    CanGo = 0
    Li = 0
    for index in range(6):
        music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
                5000,
                0,
                255,
                0,
                500,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            SoundExpressionPlayMode.IN_BACKGROUND)
        basic.pause(300)
        music.stop_all_sounds()
    basic.pause(550)
    strip.show_rainbow(1, 350)
    strip2.show_rainbow(1, 350)
    music.play_sound_effect(music.builtin_sound_effect(soundExpression.happy),
        SoundExpressionPlayMode.IN_BACKGROUND)
    for index2 in range(100):
        basic.clear_screen()
        strip.rotate(1)
        strip2.rotate(1)
        strip.show()
        strip2.show()
        basic.pause(25)
    for index3 in range(280):
        basic.clear_screen()
        strip.rotate(1)
        strip2.rotate(1)
        strip.show()
        strip2.show()
        basic.pause(25)
    basic.pause(2500)
    Resetgame()

def on_button_pressed_a():
    Win()
input.on_button_pressed(Button.A, on_button_pressed_a)

def Gamelooplight():
    while True:
        pass

def on_button_pressed_b():
    strip.show_rainbow(1, 350)
    for index4 in range(140):
        strip.rotate(1)
        strip.show()
        basic.pause(25)
    Resetgame()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    global Li, CanGo, Score, range2
    if CanGo == 1:
        Li = 0
        CanGo = 0
        Score = Score + 1
        range2 = strip2.range(1, Score + 0)
        range2.show_color(neopixel.colors(NeoPixelColors.WHITE))
        range2.show()
        basic.show_number(Score)
        if Score >= 6:
            Win()
        else:
            music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
                    5000,
                    0,
                    255,
                    0,
                    500,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                SoundExpressionPlayMode.IN_BACKGROUND)
            music.play_sound_effect(music.builtin_sound_effect(soundExpression.twinkle),
                SoundExpressionPlayMode.IN_BACKGROUND)
            for index5 in range(20):
                strip.show_rainbow(1, 350)
                range2.show_color(neopixel.colors(NeoPixelColors.WHITE))
                strip.show()
                range2.show()
                basic.pause(100)
                strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
                range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
                basic.pause(75)
            range2.show_color(neopixel.colors(NeoPixelColors.WHITE))
            strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
            range2.show()
        Li = 1
        CanGo = 1
        music.stop_melody(MelodyStopOptions.ALL)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_melody_started():
    pass
music.on_event(MusicEvent.MELODY_STARTED, on_melody_started)

def Startmusic():
    music.play_tone(262, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(294, music.beat(BeatFraction.HALF))
    music.play_tone(330, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(262, music.beat(BeatFraction.HALF))
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.WHOLE))
def Resetgame():
    global Score, Indx, Li, CanGo, strip, strip2, range2
    Score = 0
    Indx = 1
    Li = 1
    basic.show_number(Score)
    CanGo = 1
    Startmusic()
    strip = neopixel.create(DigitalPin.P0, 35, NeoPixelMode.RGB)
    strip2 = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
    range2 = strip2.range(1, Score + 0)
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    strip2.show_color(neopixel.colors(NeoPixelColors.BLACK))
Indx = 0
range2: neopixel.Strip = None
Score = 0
strip2: neopixel.Strip = None
strip: neopixel.Strip = None
Li = 0
CanGo = 0
Resetgame()

def on_every_interval():
    global Indx
    if Li == 1:
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
        strip.set_pixel_color(Indx, neopixel.colors(NeoPixelColors.YELLOW))
        range2.show_color(neopixel.colors(NeoPixelColors.WHITE))
        range2.show()
        strip.show()
        basic.pause(5)
        Indx = Indx + 1
        if Indx > 35:
            Indx = 1
loops.every_interval(25, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
