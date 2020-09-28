/*
 * LED(digital):P0(L),P1(R)
 * sound(PWM):P2
 * servo(PWM):P15(L), P16(R)
 */

/*
 * P15 : left f180
 * P16 : right f0
 */

//LEDピン番号
const ledLeftPin = DigitalPin.P0;
const ledRightPin = DigitalPin.P1;

//スピーカーピン番号
const speakerPin = AnalogPin.P2;

//サーボピン番号
const servoLeftPin = AnalogPin.P15;
const servoRightPin = AnalogPin.P16;

// 左右
enum direction {
    //% block="ひだり"
    left = -1,
    //% block="みぎ"
    right = 1
}

//スピード
enum presetSpeed {
    //% block="ゆっくり"
    slow = 13,
    //% block="ふつうに"
    mid = 30,
    //% block="はやく"
    fast = 80,
    //% block="とまる"
    // stop = 0
}

// 鳴き声
enum presetSound {}

//初期設定
function init(){
    //スピーカー
    //P2を音声出力のピンに設定
    pins.analogSetPitchPin(speakerPin);
    music.setVolume(255);
    //サーボモーター
    pins.servoWritePin(AnalogPin.P15, 90);
    pins.servoWritePin(AnalogPin.P16, 90);
    pins.analogWritePin(servoLeftPin, 0);
    pins.analogWritePin(servoRightPin, 0);
    //LED
    RobotZoo.openEyes();
    basic.pause(300);
}

init();
//% block="ロボット動物園"
//% weight=200 color=#ff8308 icon=""
//% groups="['つくる','かんさつ']"

//つくる
namespace RobotZoo {
    /**
     * ロボットを指定した時間止める
     */
    //% block="じっとする : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="つくる"
    // block=""
    //% weight=550
    export function keepStill(_duration: number): void {
        //サーボを設定
        pins.servoWritePin(servoLeftPin, 90);
        pins.servoWritePin(servoRightPin, 90);
        pins.analogWritePin(servoLeftPin, 0);
        pins.analogWritePin(servoRightPin, 0);
        basic.pause(_duration);
    }

    /**
     * ロボットが進む向き、スピード、動く時間を決める
     */
    //% block=" $_speed|まえにすすむ : $_duration|ミリ秒"
    //% _speed.min=0 _speed.max=100
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="つくる"
    //% weight=1000
    // block=""
    export function goStraigt(_speed: presetSpeed, _duration: number): void {
        pins.servoWritePin(servoLeftPin, 90+_speed);
        pins.servoWritePin(servoRightPin, 90-_speed);
        basic.pause(_duration);
        keepStill(0);
    }

    /**
     * ロボットが下がる向き、スピード、動く時間を決める
     */
    //% block=" $_speed|うしろにさがる : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="つくる"
    //% weight=900
    // block=""
    export function goBack(_speed: presetSpeed, _duration: number): void {
        pins.servoWritePin(servoLeftPin, 90-_speed);
        pins.servoWritePin(servoRightPin, 90+_speed);
        basic.pause(_duration);
        keepStill(0);
    }

    /**
     * ロボットが曲がる向き、スピード、動く時間を決める
     */
    //% block="$_speed|$_dir|にまがる : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="つくる"
    //% weight=800
    // block=""
    export function turn(_dir: direction, _speed: presetSpeed, _duration: number): void {
        //サーボを設定
        if(_dir==1){ //right
            pins.servoWritePin(servoLeftPin, 90+_speed);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoRightPin, 0);
        }else if(_dir==-1){ //left
            pins.servoWritePin(servoLeftPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.servoWritePin(servoRightPin, 90-_speed);
        }
        basic.pause(_duration);
        keepStill(0);
    }

    /**
     * ロボットがどちらに振り向くか、スピード、動く時間を決める
     */
    //% block="$_speed|$_dir|にふりむく : $_duration|ミリ秒"
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="つくる"
    //% weight=700
    // block=""
    export function lookBack(_dir: direction, _speed: presetSpeed, _duration: number): void {
        if(_dir==1){ //right
            pins.servoWritePin(servoLeftPin, 90+_speed);
            pins.servoWritePin(servoRightPin, 90+_speed);
        }else if(_dir==-1){ //left
            pins.servoWritePin(servoLeftPin, 90-_speed);
            pins.servoWritePin(servoRightPin, 90-_speed);
        }
        basic.pause(_duration);
        keepStill(0);
    }

    /**
     * 直前の動きを指定した時間続ける
     */
    //% block="つづける : $_duration|ミリ秒間 "
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="つくる"
    //% weight=600
    // block=""
    export function keep(_duration: number): void {
        basic.pause(_duration);
    }

    /**
     * 目を開ける
     */
    //% block="めをあける"
    //% group="つくる"
    //% weight=400
    // block=""
    export function openEyes(): void {
        pins.digitalWritePin(ledLeftPin, 1);
        pins.digitalWritePin(ledRightPin, 1);
    }

    /**
     * 目をつぶる
     */
    //% block="めをつぶる"
    //% group="つくる"
    //% weight=300
    // block=""
    export function closeEyes(): void {
        pins.digitalWritePin(ledLeftPin, 0);
        pins.digitalWritePin(ledRightPin, 0);
    }

    /**
     * ロボットのまばたきの回数、かける時間を決める
     */
    //% block="$_duration|ミリ秒かけて$_count|回まばたきする "
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="つくる"
    //% weight=200
    // block=""
    export function blink(_count:number, _duration: number): void {
        let _elapse = _duration/(_count*2);
        for(let i = 0; i < _count; i++) {
            RobotZoo.closeEyes();
            RobotZoo.keep(_elapse);
            RobotZoo.openEyes();
            RobotZoo.keep(_elapse);
        }
    }

    /**
     * ウインクする
     */
    //% block="$_duration|ミリ秒かけて$_dir|めをウインクする"
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="つくる"
    //% weight=100
    // block=""
    export function wink(_dir:direction, _duration: number): void {
        if(_dir==-1){ //left
            pins.digitalWritePin(ledLeftPin, 0);
            pins.digitalWritePin(ledRightPin, 1);
        }else if(_dir==1){ //right
            pins.digitalWritePin(ledLeftPin, 1);
            pins.digitalWritePin(ledRightPin, 0);
        }
        RobotZoo.keep(_duration/2);
        pins.digitalWritePin(ledLeftPin, 1);
        pins.digitalWritePin(ledRightPin, 1);
        RobotZoo.keep(_duration/2);
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
        //P2を音声出力のピンに設定
        pins.analogSetPitchPin(speakerPin);
        music.setVolume(0);
        music.playMelody("C5 B A G F E D C ", 120);
        //スピーカーをPWM出力の対象から外す
        // pins.digitalWritePin(DigitalPin.P2, 0);
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