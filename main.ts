basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

// 各ピン番号は適宜変更
/*
 * LED:P0, P1
 * sound:P2
 * servo:P15, P16
 */

/*
   https://makecode.microbit.org/blocks/custom
   https://makecode.com/extensions/getting-started/simple-extension
 */

/*
  ## TODO
  - Add a reference for your blocks here
  - Add "icon.png" image (300x200) in the root folder
  - Add "- beta" to the GitHub project description if you are still iterating it.
 */

//目の明るさ
enum eyeBrigthness {
    つよく = 1023,
    ふつう = 512,
    よわく = 256
}

// 進む方向
enum direction {
    まえ = 0,
    うしろ = 1
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
    export function まっすぐすすむ(dir: direction, speed: number, duration: number): void {

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
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        basic.pause(duration * 1000);
    }

    /**
     * ロボットの目の明るさを決める
     * 明るさ
     */
    //% block
    export function あかるさ(brigthness: eyeBrigthness): void {
        pins.analogWritePin(AnalogPin.P0, brigthness);
        pins.analogWritePin(AnalogPin.P1, brigthness);
    }

    /**
     * ロボットの目を閉じる
     * 明るさ
     */
    //% block
    export function きえる(): void {
        pins.analogWritePin(AnalogPin.P0, 0);
        pins.analogWritePin(AnalogPin.P1, 0);
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