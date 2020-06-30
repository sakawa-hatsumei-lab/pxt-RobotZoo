// basic.showLeds(`
//     . . . . .
//     . # . # .
//     . . . . .
//     # . . . #
//     . # # # .
//     `);

// 各ピン番号は適宜変更
/* 現行の設定
 * LED:P0, P1
 * sound:P2
 * servo:P15, P16
 */

/* 変更予定
 * 1. LEDはデジタル、他はPWM制御の場合
 * LED:P0,P1 (high/low のみ)
 * sound:P2 (PWM)
 * servo:P15, P16 (PWM)
 * 
 * 2. 全てPWM制御の場合
 * LED:P1 (PWM、左右連動)
 * sound:P2 (PWM、サーボと排他)
 * servo:P15, P16 (PWM、スピーカーと排他)
 * 
 */

//目の明るさ
enum presetEyeBrightness {
    //% block="ふつう"
    usual = 500,
    //% block="つよく"
    strong = 1023,
    //% block="よわく"
    weak = 128
}

// 前後
enum direction {
    //% block="まえ"
    forward = 1,
    //% block="うしろ"
    backward = -1
}

// 左右
enum leftRight {
    //% block="ひだり"
    left = -1,
    //% block="みぎ"
    right = 1
}

//スピード
enum presetSpeed {
    //% block="ふつうに"
    mid = 42,
    //% block="はやく"
    fast = 90,
    //% block="ゆっくり"
    slow = 60
    //% block="とまる"
    // stop = 0
}

// 鳴き声
enum presetSound {}

//初期設定
//スピーカー
//P2を音声出力のピンに設定
pins.analogSetPitchPin(AnalogPin.P2);
music.setVolume(0);
//スピーカーをPWM出力の対象から外す
pins.digitalWritePin(DigitalPin.P2, 0);
//サーボモーター
pins.servoWritePin(AnalogPin.P15, 90);
pins.servoWritePin(AnalogPin.P16, 90);
pins.analogWritePin(AnalogPin.P15, 0);
pins.analogWritePin(AnalogPin.P16, 0);
//LED
let eyeBrightness = presetEyeBrightness.usual;
RobotZoo.openEyes();

/**
 * ロボット動物園
 * P15 : left f180
 * P16 : right f0
 */

//% block="ロボット動物園"
//% weight=200 color=#ff8308 icon=""
//% groups="['かんさつ','つくる']"

/*********************
 *ロボット動物園#2 仕様
 *動きサンプル以外を隠す
 * //% block=""
 *********************/
//つくる
namespace RobotZoo {
    function setServoSpeed(_speed: presetSpeed, _dir:direction){
        let spL = 90 - _speed * _dir;
        let spR = 90 + _speed * _dir;
        pins.servoWritePin(AnalogPin.P15, spL);
        pins.servoWritePin(AnalogPin.P16, spR);
        RobotZoo.openEyes();
    }

    function setServoLeftRight(_speed: presetSpeed, _lr:leftRight){
        let spL = 90 - _speed * _lr;
        let spR = 90 - _speed * _lr;
        pins.servoWritePin(AnalogPin.P15, spL);
        pins.servoWritePin(AnalogPin.P16, spR);
        RobotZoo.openEyes();
    }

    /**
     * ロボットを指定した時間止める
     */
    //% block="じっとする : $_duration|ミリ秒"
    //% _duration.shadow="timePicker" _duration.defl=500
    //% group="つくる"
    //% block="じっとする"
    //% weight=550
    export function keepStill(): void {
        //スピーカーをPWM出力の対象から外す
        pins.digitalWritePin(DigitalPin.P2, 0);

        //サーボを設定
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.analogWritePin(AnalogPin.P15, 0);
        pins.analogWritePin(AnalogPin.P16, 0);
        // RobotZoo.openEyes();
        basic.pause(300);
    }

    /**
     * ロボットが進む向き、スピード、動く時間を決める
     */
    //% block=" $_speed|まえにすすむ : $_duration|ミリ秒"
    //% _speed.min=0 _speed.max=100
    //% _duration.shadow="timePicker"
    //% group="つくる"
    //% weight=1000
    //% block=""
    export function goStraigt(_speed: presetSpeed, _duration: number): void {
        //スピーカーをPWM出力の対象から外す
        pins.digitalWritePin(DigitalPin.P2, 0);

        //サーボを設定
        // setServoSpeed(_speed, direction.まえ);
        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 132);
        basic.pause(_duration);
    }

    /**
     * ロボットが下がる向き、スピード、動く時間を決める
     */
    //% block=" $_speed|うしろにさがる : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    //% group="つくる"
    //% weight=900
    //% block=""
    export function goBack(_speed: presetSpeed, _duration: number): void {
        //スピーカーをPWM出力の対象から外す
        pins.digitalWritePin(DigitalPin.P2, 0);

        //サーボを設定
        //setServoSpeed(_speed, direction.うしろ);
        pins.servoWritePin(AnalogPin.P15, 132);
        pins.servoWritePin(AnalogPin.P16, 48);
        basic.pause(_duration);
    }

    /**
     * ロボットが曲がる向きスピード、動く時間を決める
     */
    //% block="$_dir|にまがる : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    //% group="つくる"
    //% weight=800
    //% block=""
    export function turn(_dir: leftRight, _speed: presetSpeed, _duration: number): void {
        //スピーカーをPWM出力の対象から外す
        pins.digitalWritePin(DigitalPin.P2, 0);

        //サーボを設定
        if(_dir==1){
            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 90);
        }else if(_dir==-1){
            pins.servoWritePin(AnalogPin.P15, 132);
            pins.servoWritePin(AnalogPin.P16, 90);
        }
        basic.pause(_duration);
    }

    /**
     * ロボットがどちらに振り向くか、スピード、動く時間を決める
     */
    //% block="$_lr|にふりむく : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    //% group="つくる"
    //% weight=700
    //% block=""
    export function lookBack(_lr: leftRight, _speed: presetSpeed, _duration: number): void {
        //スピーカーをPWM出力の対象から外す
        pins.digitalWritePin(DigitalPin.P2, 0);

        //サーボを設定
        // setServoLeftRight(_speed, _lr);
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
     */
    //% block="つづける : $_duration|ミリ秒間 "
    //% _duration.shadow="timePicker"
    //% group="つくる"
    //% weight=600
    //% block=""
    export function keep(_duration: number): void {
        basic.pause(_duration);
    }

    /**
     * ロボットの目の明るさを決める
     */
    //% block="めぢから : $_eBri"
    //% group="つくる"
    //% weight=500
    //% block=""
    export function setImpression(_eBri: presetEyeBrightness): void {
        eyeBrightness = _eBri;
        RobotZoo.openEyes();
    }

    /**
     * 目を開ける
     */
    //% block="めをあける"
    //% group="つくる"
    //% weight=400
    //% block=""
    export function openEyes(): void {
        pins.analogWritePin(AnalogPin.P0, eyeBrightness);
        pins.analogWritePin(AnalogPin.P1, eyeBrightness);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P16, 1);
    }

    /**
     * 目をつぶる
     */
    //% block="めをつぶる"
    //% group="つくる"
    //% weight=300
    //% block=""
    export function closeEyes(): void {
        pins.analogWritePin(AnalogPin.P0, 0);
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
    }

    /**
     * ロボットのまばたき
     */
    //% block="まばたき"
    //% group="つくる"
    //% weight=200
    //% block=""
    export function blink(): void {
        RobotZoo.openEyes();
        basic.pause(400);
        RobotZoo.closeEyes();
        basic.pause(200);
        RobotZoo.openEyes();
    }

    /**
     * ウインクする
     */
    //% block="$lr ウインク"
    //% group="つくる"
    //% weight=100
    //% block=""
    export function wink(_lr:number): void {

    }

    /**
     * ロボットの鳴き声を決める
     * 鳴き声の種類、鳴く時間
     */
    //% block="なきごえ"
    //% group="つくる"
    //% weight=50
    //% block=""
    export function sound(_animal: presetSound, _duration: number): void {
        //サーボをPWM出力の対象から外す
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        //P2を音声出力のピンに設定
        pins.analogSetPitchPin(AnalogPin.P2);
        music.playTone(Note.C, _duration);
        //スピーカーをPWM出力の対象から外す
        pins.digitalWritePin(DigitalPin.P2, 0);
    }

    //「ずっと」内でのメロディー再生用のフラグ
    // let musicFlag = 0
    // music.onEvent(MusicEvent.MelodyStarted, function () {
    //     musicFlag = 1
    // })
    // music.onEvent(MusicEvent.MelodyEnded, function () {
    //     musicFlag = 0
    // })
}