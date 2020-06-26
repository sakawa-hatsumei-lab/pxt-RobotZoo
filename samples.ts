//% weight=200 color=#ff8308 icon=""
//% groups="['かんさつ','つくる']"
//かんさつ
namespace ロボット動物園 {
    /**
     * 動きサンプル1 : 
     * 左右交互に少しずつ前に進む
     */
    //% block
    //% group="かんさつ"
    //% weight=600
    export function _ちょこちょこ() {
        for(let i = 0; i < 4; i++) {
            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 90);
            //ロボット動物園.めをあける();
            basic.pause(200);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 132);
            //ロボット動物園.めをあける();
            basic.pause(200);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            //ロボット動物園.めをあける();
        }
    }

    /**
     * 動きサンプル2 : 
     * 緩やかにカーブしながら前に進む
     */
    //% block
    //% group="かんさつ"
    //% weight=500
    //% block=""
    export function _すいすい() {
        for(let i = 0; i < 2; i++) {
            pins.servoWritePin(AnalogPin.P15, 40);
            pins.servoWritePin(AnalogPin.P16, 100);
            //ロボット動物園.めをあける();
            basic.pause(700);
            pins.servoWritePin(AnalogPin.P15, 80);
            pins.servoWritePin(AnalogPin.P16, 130);
            //ロボット動物園.めをあける();
            basic.pause(700);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            //ロボット動物園.めをあける();
        }
    }
    

    /**
     * 動きサンプル3 : 
     * ちょっと進んでちょっと止まる
     */
    //% block
    //% group="かんさつ"
    //% weight=400
    export function _つんつん() {
        for(let i = 0; i < 8; i++) {
            pins.servoWritePin(AnalogPin.P15, 68);
            pins.servoWritePin(AnalogPin.P16, 112);
            //ロボット動物園.めをあける();
            basic.pause(300);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            //ロボット動物園.めをあける();
            basic.pause(150);
        }
    }

    /**
     * 動きサンプル4 : 
     * 前に進んでどこかを向き、また前に進む
     */
    //% block
    //% group="かんさつ"
    //% weight=300
    export function _うろうろ() {
        pins.servoWritePin(AnalogPin.P15, 68);
        pins.servoWritePin(AnalogPin.P16, 112);
        //ロボット動物園.めをあける();
        basic.pause(500);
        //pins.servoWritePin(AnalogPin.P15, 90);
        //pins.servoWritePin(AnalogPin.P16, 90);
        pins.analogWritePin(AnalogPin.P15, 0);
        pins.analogWritePin(AnalogPin.P16, 0);
        //ロボット動物園.めをあける();
        basic.pause(700);

        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 48);
        //ロボット動物園.めをあける();
        basic.pause(500);
        //pins.servoWritePin(AnalogPin.P15, 90);
        //pins.servoWritePin(AnalogPin.P16, 90);
        pins.analogWritePin(AnalogPin.P15, 0);
        pins.analogWritePin(AnalogPin.P16, 0);
        //ロボット動物園.めをあける();
        basic.pause(100);

        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 132);
        //ロボット動物園.めをあける();
        basic.pause(700);
        //pins.servoWritePin(AnalogPin.P15, 90);
        //pins.servoWritePin(AnalogPin.P16, 90);
        pins.analogWritePin(AnalogPin.P15, 0);
        pins.analogWritePin(AnalogPin.P16, 0);
        //ロボット動物園.めをあける();
        basic.pause(700);

        pins.servoWritePin(AnalogPin.P15, 132);
        pins.servoWritePin(AnalogPin.P16, 132);
        //ロボット動物園.めをあける();
        basic.pause(800);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.analogWritePin(AnalogPin.P15, 0);
        pins.analogWritePin(AnalogPin.P16, 0);
        //ロボット動物園.めをあける();
        basic.pause(300);
    }
    
    /**
     * 動きサンプル5 : 
     * 少し進んであたりを見る
     */
    //% block
    //% group="かんさつ"
    //% weight=200
    export function _きょろきょろ() {
        for(let i = 0; i < 3; i++) {
            pins.servoWritePin(AnalogPin.P15, 58);
            pins.servoWritePin(AnalogPin.P16, 122);
            //ロボット動物園.めをあける();
            basic.pause(500);

            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 48);
            //ロボット動物園.めをあける();
            basic.pause(150);
            //pins.servoWritePin(AnalogPin.P15, 90);
            //pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            //ロボット動物園.めをあける();
            basic.pause(500);

            pins.servoWritePin(AnalogPin.P15, 132);
            pins.servoWritePin(AnalogPin.P16, 132);
            //ロボット動物園.めをあける();
            basic.pause(300);
            //pins.servoWritePin(AnalogPin.P15, 90);
            //pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            //ロボット動物園.めをあける();
            basic.pause(500);

            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 48);
            //ロボット動物園.めをあける();
            basic.pause(150);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            //ロボット動物園.めをあける();
            basic.pause(300);
        }
    }

    /**
     * 動きサンプル6 : 
     * 勢いよくまっすぐ前に進む
     */
    //% block
    //% group="かんさつ"
    //% weight=100
    export function _ぐんぐん() {
        pins.servoWritePin(AnalogPin.P15, 0);
        pins.servoWritePin(AnalogPin.P16, 180);
        //ロボット動物園.めをあける();
        basic.pause(700);
    }
}