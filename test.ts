// tests go here; this will not be compiled when this package is used as a library
//---- init ----
basic.showIcon(IconNames.Happy)
init()

//---- main.ts ----
RobotZoo.blink(3, 1800)
for(let i = 0; i < 90; i++) {
    pins.servoWritePin(servoLeftPin, 90+i)
    pins.servoWritePin(servoRightPin, 90-i)
    led.plotBarGraph(i, 90)
    basic.pause(50)
}
for(let i = 90; i > 0; i--) {
    pins.servoWritePin(servoLeftPin, 90+i)
    pins.servoWritePin(servoRightPin, 90-i)
    led.plotBarGraph(i, 90)
    basic.pause(50)
}
RobotZoo.keepStill(500)

led.plotBarGraph(presetSpeed.slow, 90)
RobotZoo.goStraigt(presetSpeed.slow, 1000)
RobotZoo.keepStill(500)
led.plotBarGraph(presetSpeed.mid, 90)
RobotZoo.goStraigt(presetSpeed.mid, 1000)
RobotZoo.keepStill(500)
led.plotBarGraph(presetSpeed.fast, 90)
RobotZoo.goStraigt(presetSpeed.fast, 1000)
RobotZoo.keepStill(500)
led.plotBarGraph(presetSpeed.mid, 90)
RobotZoo.goBack(presetSpeed.mid, 1000)
RobotZoo.keepStill(500)

//---- samples.ts ----
RobotZoo.toddle()
RobotZoo.keepStill(300)
// RobotZoo.swift()
// RobotZoo.keepStill(300)
RobotZoo.poke()
RobotZoo.keepStill(300)
RobotZoo.stroll()
RobotZoo.keepStill(300)
RobotZoo.lookAlound()
RobotZoo.keepStill(300)
// RobotZoo.rush()
// RobotZoo.keepStill(300)