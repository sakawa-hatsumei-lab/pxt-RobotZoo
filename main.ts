basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

pins.analogSetPitchPin(AnalogPin.P2)

// TODO
/*
  - Add a reference for your blocks here
  - Add "icon.png" image (300x200) in the root folder
  - Add "- beta" to the GitHub project description if you are still iterating it.
  - 時間の単位は「秒」が最適か？「長め」「短め」「しばらく」などの表現の方がプログラミングしやすいのでは？
 */

// 各ピン番号は適宜変更
/*
 * LED:P0, P1
 * sound:P2
 * servo:P15, P16
 */

//リファレンス
/*
 * https://makecode.microbit.org/blocks/custom
 * https://makecode.com/extensions/getting-started/simple-extension
 */


//目の明るさ
enum presetEyeBrightness {
    ふつう = 512,
    つよく = 1023,
    よわく = 256
}

// 前後
enum direction {
    まえ = 0,
    うしろ = 1
}

// 左右
enum leftRight {
    みぎまわり = 0,
    ひだりまわり = 1
}

//スピード
enum speed {
    ふつう = 70,
    はやく = 100,
    ゆっくり = 40

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
    pins.servoWritePin(AnalogPin.P15, 90);
    pins.servoWritePin(AnalogPin.P16, 90);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 0);
    let eyeBrightness = presetEyeBrightness.ふつう;

    /**
     * ロボットが進む向き、スピード、動く時間を決める
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block
    export function まえにすすむ(_speed: number, _duration: number): void {
        let sp = Math.map(_speed, 0, 100, 0, 90);
        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 122);

        //pins.servoWritePin(AnalogPin.P15, 90 + sp);
        //pins.servoWritePin(AnalogPin.P16, 90 - sp);

        // pins.servoWritePin(AnalogPin.P15, 180);
        // pins.servoWritePin(AnalogPin.P16, 0);

        basic.pause(_duration * 1000);
    }

    /**
     * ロボットが下がる向き、スピード、動く時間を決める
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block
    export function うしろにさがる(_speed: number, _duration: number): void {
        let sp = Math.map(_speed, 0, 100, 0, 90);
        pins.servoWritePin(AnalogPin.P15, 122);
        pins.servoWritePin(AnalogPin.P16, 48);

        // pins.servoWritePin(AnalogPin.P15, 90 + sp);
        // pins.servoWritePin(AnalogPin.P16, 90 - sp);

        // pins.servoWritePin(AnalogPin.P15, 180);
        // pins.servoWritePin(AnalogPin.P16, 0);

        basic.pause(_duration * 1000);
    }

    /**
     * ロボットが曲がる向きスピード、動く時間を決める
     * * 向き：右、左
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block
    export function まがる(_dir: leftRight, _speed: number, _duration: number): void {
        if(_dir==0){
            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 100);
        }else if(_dir==1){
            pins.servoWritePin(AnalogPin.P15, 122);
            pins.servoWritePin(AnalogPin.P16, 80);
        }
        basic.pause(_duration * 1000);
    }

    /**
     * ロボットがどちらに振り向くか、スピード、動く時間を決める
     * 向き：右まわり、左まわり
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block
    export function ふりむく(_dir: leftRight, _speed: number, _duration: number): void {
        let sp = Math.map(_speed, 0, 100, 0, 90);
        if(_dir==0){
            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 48);
        }else if(_dir==1){
            pins.servoWritePin(AnalogPin.P15, 122);
            pins.servoWritePin(AnalogPin.P16, 122);
        }
        basic.pause(_duration * 1000);
    }

    /**
     * 直前の動きを指定した時間続ける
     * 止める時間：秒
     */
    //% block
    export function つづける(_duration: number): void {
        basic.pause(_duration * 1000);
    }

    /**
     * ロボットを指定した時間止める
     * 止める時間：秒
     */
    //% block
    export function じっとする(_duration: number): void {
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        basic.pause(_duration * 1000);
    }

    /**
     * ロボットの目の明るさを決める
     * 明るさ
     */
    //% block
    export function めぢから(_eBri: presetEyeBrightness): void {
        eyeBrightness = _eBri;
    }

    /**
     * 目を開ける
     * 明るさ
     */
    //% block
    export function めをあける(): void {
        pins.analogWritePin(AnalogPin.P0, eyeBrightness);
        pins.analogWritePin(AnalogPin.P1, eyeBrightness);
    }

    /**
     * ロボットのまばたき
     * 明るさ
     */
    //% block
    export function まばたき(): void {
        pins.analogWritePin(AnalogPin.P0, eyeBrightness);
        pins.analogWritePin(AnalogPin.P1, eyeBrightness);
        basic.pause(100);
        pins.analogWritePin(AnalogPin.P0, 0);
        pins.analogWritePin(AnalogPin.P1, 0);
        basic.pause(300);
        pins.analogWritePin(AnalogPin.P0, eyeBrightness);
        pins.analogWritePin(AnalogPin.P1, eyeBrightness);
    }

    /**
     * 目をつぶる
     * 明るさ
     */
    //% block
    export function めをつぶる(): void {
        pins.analogWritePin(AnalogPin.P0, 0);
        pins.analogWritePin(AnalogPin.P1, 0);
    }

    /**
     * ロボットの鳴き声を決める
     * 鳴き声の種類、鳴く時間
     */
    //% block
    /*
    export function なきごえ(_animal: sound, _duration: number): void {
        // speaker
        //music.playTone(Note.C, _duration);
    }
    */

    /*
    let musicFlag = 0
    music.onEvent(MusicEvent.MelodyStarted, function () {
        musicFlag = 1
    })
    music.onEvent(MusicEvent.MelodyEnded, function () {
        musicFlag = 0
    })
    */
}