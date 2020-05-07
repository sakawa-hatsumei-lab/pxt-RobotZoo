basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);


// 各ピン番号は適宜変更

/**
 * https://makecode.microbit.org/blocks/custom
 * https://makecode.com/extensions/getting-started/simple-extension
 */

// 目の色のプリセット
enum eyeColor {
    白 = 0,
    赤 = 1,
    緑 = 2,
    青 = 3,
}

// 進む方向
enum direction {
    前進 = 0,
    後退 = 1
}

// 鳴き声のプリセット
enum sound {
    cat = 0,
    dog = 1
}

/**
 * カスタムブロック
 * P15 : left f180
 * P16 : right f0
 */
//% weight=100 color=#ff8308 icon=""
namespace ロボット動物園 {
    /**
     * ロボットが進む向き、スピード、進む時間を決める
     * 向き：前進、後退
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block
    export function すすむ(dir: direction, speed: number, duration: number): void {

        let sp = Math.map(speed, 0, 100, 0, 90)
        if (!dir) { //前進
            // pins.servoWritePin(AnalogPin.P15, 90 + sp);
            // pins.servoWritePin(AnalogPin.P16, 90 - sp);
            
            // pins.servoWritePin(AnalogPin.P15, 180);
            // pins.servoWritePin(AnalogPin.P16, 0);
        }
        else { // 後退
            // pins.servoWritePin(AnalogPin.P15, 90 - sp);
            // pins.servoWritePin(AnalogPin.P16, 90 + sp);
            
            // pins.servoWritePin(AnalogPin.P15, 0);
            // pins.servoWritePin(AnalogPin.P16, 180);
        }

        basic.pause(duration * 1000);
    }


    /**
     * ロボットを指定した時間の間止める
     * 止める時間：秒
     */
    //% block
    export function とまる(duration: number): void {
        // pins.servoWritePin(AnalogPin.P15, 90);
        // pins.servoWritePin(AnalogPin.P16, 90);
        basic.pause(duration * 1000);
    }

    /**
     * ロボットの目の色を決める
     * 目の色
     */
    //% block
    export function いろ(color: eyeColor): void {
        // neopixel
    }


    /**
     * ロボットの目の色と明るさを決める
     * 目の色、明るさ
     */
    //% block
    export function いろとあかるさ(color: eyeColor, brightness: number): void {
        // neopixel
    }

    /**
     * ロボットの鳴き声を決める
     * 鳴き声の種類、鳴く時間
     */
    //% block
    export function なきごえ(animal: sound, duration: number): void {
        // speaker
        music.playTone(Note.C, duration);
    }
}