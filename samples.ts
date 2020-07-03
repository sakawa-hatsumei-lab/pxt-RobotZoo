//% weight=200 color=#ff8308 icon=""
//% block="ロボット動物園"
//% groups="['かんさつ','つくる']"
//かんさつ
namespace RobotZoo {
    /**
     * 動きサンプル1 : 
     * 左右交互に少しずつ前に進む
     */
    //% block="ちょこちょこ" block.loc.ja="ちょこちょこ"
    //% group="かんさつ"
    //% weight=600
    export function toddle() {
        for(let i = 0; i < 4; i++) {
            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 90);
            basic.pause(200);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 132);
            basic.pause(200);

            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            
        }
        basic.pause(300);
    }

    /**
     * 動きサンプル2 : 
     * 緩やかにカーブしながら前に進む
     */
    //% block="すいすい"
    //% group="かんさつ"
    //% weight=500
    export function swift() {
        for(let i = 0; i < 2; i++) {
            pins.servoWritePin(AnalogPin.P15, 40);
            pins.servoWritePin(AnalogPin.P16, 100);
            basic.pause(700);

            pins.servoWritePin(AnalogPin.P15, 80);
            pins.servoWritePin(AnalogPin.P16, 140);
            basic.pause(700);

            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            
        }
        basic.pause(300);
    }
    

    /**
     * 動きサンプル3 : 
     * ちょっと進んでちょっと止まる
     */
    //% block="つんつん"
    //% group="かんさつ"
    //% weight=400
    export function poke() {
        for(let i = 0; i < 8; i++) {
            pins.servoWritePin(AnalogPin.P15, 68);
            pins.servoWritePin(AnalogPin.P16, 112);
            basic.pause(300);

            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(150);
        }
    }

    /**
     * 動きサンプル4 : 
     * 前に進んでどこかを向き、また前に進む
     */
    //% block="うろうろ"
    //% group="かんさつ"
    //% weight=300
    export function stroll() {
        for(let i = 0; i < 3; i++) {
            pins.servoWritePin(AnalogPin.P15, 68);
            pins.servoWritePin(AnalogPin.P16, 112);
            basic.pause(500);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(700);

            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 48);
            basic.pause(500);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(100);

            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 132);
            basic.pause(700);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(700);

            pins.servoWritePin(AnalogPin.P15, 132);
            pins.servoWritePin(AnalogPin.P16, 132);
            basic.pause(800);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(300);
        }
    }
    
    /**
     * 動きサンプル5 : 
     * 少し進んであたりを見る
     */
    //% block="きょろきょろ"
    //% group="かんさつ"
    //% weight=200
    export function lookAlound() {
        for(let i = 0; i < 3; i++) {
            pins.servoWritePin(AnalogPin.P15, 58);
            pins.servoWritePin(AnalogPin.P16, 122);
            basic.pause(500);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(400);

            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 48);
            basic.pause(150);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(500);

            pins.servoWritePin(AnalogPin.P15, 132);
            pins.servoWritePin(AnalogPin.P16, 132);
            basic.pause(300);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(500);

            pins.servoWritePin(AnalogPin.P15, 48);
            pins.servoWritePin(AnalogPin.P16, 48);
            basic.pause(150);
            pins.servoWritePin(AnalogPin.P15, 90);
            pins.servoWritePin(AnalogPin.P16, 90);
            pins.analogWritePin(AnalogPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, 0);
            basic.pause(300);
        }
    }

    /**
     * 動きサンプル6 : 
     * 勢いよくまっすぐ前に進む
     */
    //% block="ぐんぐん"
    //% group="かんさつ"
    //% weight=100
    export function rush() {
        pins.servoWritePin(AnalogPin.P15, 0);
        pins.servoWritePin(AnalogPin.P16, 180);
        basic.pause(1000);

        // pins.servoWritePin(AnalogPin.P15, 90);
        // pins.servoWritePin(AnalogPin.P16, 90);
        // pins.analogWritePin(AnalogPin.P15, 0);
        // pins.analogWritePin(AnalogPin.P16, 0);
        // basic.pause(100);
    }
}