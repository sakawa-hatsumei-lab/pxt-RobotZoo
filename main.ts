basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

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
 * https://makecode.com/defining-blocks
 * https://makecode.com/playground
 */


//目の明るさ
enum presetEyeBrightness {
    ふつう = 500,
    つよく = 1023,
    よわく = 128
}

// 前後
enum direction {
    まえ = 1,
    うしろ = -1
}

// 左右
enum leftRight {
    みぎまわり = 1,
    ひだりまわり = -1
}

//スピード
enum presetSpeed {
    ふつうに = 42,
    はやく = 90,
    ゆっくり = 60

}

// 鳴き声のプリセット
enum sound {
    cat = 0,
    dog = 1
}

/**
 * ロボット動物園
 * P15 : left f180
 * P16 : right f0
 */
//% weight=200 color=#ff8308 icon=""
namespace ロボット動物園 {
    //初期設定
    //スピーカー
    pins.analogSetPitchPin(AnalogPin.P2);
    music.setVolume(0);
    //サーボモーター
    pins.servoWritePin(AnalogPin.P15, 90);
    pins.servoWritePin(AnalogPin.P16, 90);
    pins.analogWritePin(AnalogPin.P15, 0);
    pins.analogWritePin(AnalogPin.P16, 0);
    //LED
    let eyeBrightness = presetEyeBrightness.ふつう;
    ロボット動物園.めをあける();

    function setServoSpeed(_speed: presetSpeed, _dir:direction){
        let spL = 90 - _speed * _dir;
        let spR = 90 + _speed * _dir;
        pins.servoWritePin(AnalogPin.P15, spL);
        pins.servoWritePin(AnalogPin.P16, spR);
        ロボット動物園.めをあける();
        
    }

    function setServoLeftRight(_speed: presetSpeed, _lr:leftRight){
        let spL = 90 - _speed * _lr;
        let spR = 90 - _speed * _lr;
        pins.servoWritePin(AnalogPin.P15, spL);
        pins.servoWritePin(AnalogPin.P16, spR)
        ロボット動物園.めをあける();
    }

    /**
     * ロボットが進む向き、スピード、動く時間を決める
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block=" $_speed|まえにすすむ : $_duration|ミリ秒"
    // _speed.min=0 _speed.max=100 _speed.defl=50
    //% _duration.shadow="timePicker"
    export function まえにすすむ(_speed: presetSpeed, _duration: number): void {
        //setServoSpeed(_speed, direction.まえ);
        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 132);
        basic.pause(_duration);
    }

    /**
     * ロボットが下がる向き、スピード、動く時間を決める
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block=" $_speed|うしろにさがる : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    export function うしろにさがる(_speed: presetSpeed, _duration: number): void {
        //setServoSpeed(_speed, direction.うしろ);
        pins.servoWritePin(AnalogPin.P15, 132);
        pins.servoWritePin(AnalogPin.P16, 48);
        basic.pause(_duration);
    }

    /**
     * ロボットが曲がる向きスピード、動く時間を決める
     * 向き：右、左
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block
    //% _duration.shadow="timePicker"
    export function まがる(_dir: leftRight, _speed: presetSpeed, _duration: number): void {
        if(_dir==1){
            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 100);
        }else if(_dir==-1){
            pins.servoWritePin(AnalogPin.P15, 132);
            pins.servoWritePin(AnalogPin.P16, 80);
        }
        basic.pause(_duration);
    }

    /**
     * ロボットがどちらに振り向くか、スピード、動く時間を決める
     * 向き：右まわり、左まわり
     * スピード：0 ~ 100
     * 進む時間：秒
     */
    //% block
    //% _duration.shadow="timePicker"
    export function ふりむく(_lr: leftRight, _speed: presetSpeed, _duration: number): void {
        //setServoLeftRight(_speed, _lr);
        if(_lr==1){
            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 48);
        }else if(_lr==-1){
            pins.servoWritePin(AnalogPin.P15, 132);
            pins.servoWritePin(AnalogPin.P16, 132);
        }
        basic.pause(_duration);
    }

    /**
     * 直前の動きを指定した時間続ける
     * 止める時間：秒
     */
    //% block="$_duration|ミリ秒間 つづける"
    //% _duration.shadow="timePicker"
    export function つづける(_duration: number): void {
        basic.pause(_duration);
    }

    /**
     * ロボットを指定した時間止める
     * 止める時間：秒
     */
    //% block="じっとする : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    export function じっとする(_duration: number): void {
        //pins.servoWritePin(AnalogPin.P15, 90);
        //pins.servoWritePin(AnalogPin.P16, 90);
        pins.analogWritePin(AnalogPin.P15, 0);
        pins.analogWritePin(AnalogPin.P16, 0);
        ロボット動物園.めをあける();
        basic.pause(_duration);
    }

    /**
     * ロボットの目の明るさを決める
     */
    //% block
    export function めぢから(_eBri: presetEyeBrightness): void {
        eyeBrightness = _eBri;
        //ロボット動物園.めをあける();
    }

    /**
     * 目を開ける
     */
    //% block
    export function めをあける(): void {
        pins.analogWritePin(AnalogPin.P0, eyeBrightness);
        pins.analogWritePin(AnalogPin.P1, eyeBrightness);
    }

    /**
     * 目をつぶる
     */
    //% block
    export function めをつぶる(): void {
        pins.analogWritePin(AnalogPin.P0, 0);
        pins.analogWritePin(AnalogPin.P1, 0);
    }

    /**
     * ロボットのまばたき
     */
    //% block
    export function まばたき(): void {
        ロボット動物園.めをあける();
        basic.pause(400);
        ロボット動物園.めをつぶる();
        basic.pause(200);
        ロボット動物園.めをあける();
    }

    /**
     * ロボットの鳴き声を決める
     * 鳴き声の種類、鳴く時間
     */
    //% block
    /*
    export function なきごえ(_animal: sound, _duration: number): void {
        // speaker
        pins.analogSetPitchPin(AnalogPin.P2);
        music.playTone(Note.C, _duration);
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