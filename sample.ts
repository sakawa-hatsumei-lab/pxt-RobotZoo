namespace ロボット動物園 {
    /**
     * 動きサンプル1
     */
    //% block
    export function _ちょこちょこ() {
        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 90);
        basic.pause(200);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 122);
        basic.pause(200);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
    }

    /**
     * 動きサンプル2
     */
    //% block
    export function _すいすい() {
        
    }

    /**
     * 動きサンプル3
     */
    //% block
    export function _つんつん() {
        
    }

    /**
     * 動きサンプル4
     */
    //% block
    export function _ふらふら() {
        
    }

    /**
     * 動きサンプル5
     */
    //% block
    export function _きょろきょろ() {
        
    }

    /**
     * 動きサンプル6
     */
    //% block
    export function _ぐんぐん() {
        
    }
}