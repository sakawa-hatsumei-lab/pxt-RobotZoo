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
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 48);
            basic.pause(200);
            pins.servoWritePin(servoLeftPin, 132);
            pins.servoWritePin(servoRightPin, 90);
            basic.pause(200);

            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
        }
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
            pins.servoWritePin(servoLeftPin, 100);
            pins.servoWritePin(servoRightPin, 40);
            basic.pause(700);

            pins.servoWritePin(servoLeftPin, 140);
            pins.servoWritePin(servoRightPin, 80);
            basic.pause(700);

            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
        }
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
            pins.servoWritePin(servoLeftPin, 112);
            pins.servoWritePin(servoRightPin, 68);
            basic.pause(300);

            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
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
            pins.servoWritePin(servoLeftPin, 112);
            pins.servoWritePin(servoRightPin, 68);
            basic.pause(500);
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
            basic.pause(700);

            pins.servoWritePin(servoLeftPin, 48);
            pins.servoWritePin(servoRightPin, 48);
            basic.pause(500);
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
            basic.pause(100);

            pins.servoWritePin(servoLeftPin, 132);
            pins.servoWritePin(servoRightPin, 48);
            basic.pause(700);
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
            basic.pause(700);

            pins.servoWritePin(servoLeftPin, 132);
            pins.servoWritePin(servoRightPin, 132);
            basic.pause(800);
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
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
            pins.servoWritePin(servoLeftPin, 122);
            pins.servoWritePin(servoRightPin, 58);
            basic.pause(500);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
            basic.pause(400);

            pins.servoWritePin(servoLeftPin, 48);
            pins.servoWritePin(servoRightPin, 48);
            basic.pause(150);
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
            basic.pause(500);

            pins.servoWritePin(servoLeftPin, 132);
            pins.servoWritePin(servoRightPin, 132);
            basic.pause(300);
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
            basic.pause(500);

            pins.servoWritePin(servoLeftPin, 48);
            pins.servoWritePin(servoRightPin, 48);
            basic.pause(150);
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90);
            pins.analogWritePin(servoLeftPin, 0);
            pins.analogWritePin(servoRightPin, 0);
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
        pins.servoWritePin(servoLeftPin, 180);
        pins.servoWritePin(servoRightPin, 0);
        basic.pause(1000);

        // pins.servoWritePin(servoLeftPin, 90);
        // pins.servoWritePin(servoRightPin, 90);
        // pins.analogWritePin(servoLeftPin, 0);
        // pins.analogWritePin(servoRightPin, 0);
        // basic.pause(100);
    }
}
