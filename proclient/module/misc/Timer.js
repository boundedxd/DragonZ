import { Setting } from '../../settings/Setting.js';
import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Timer extends Module {
    constructor() {
        super("Timer", 0, Category.MISC);
        this.speed = new Setting("Speed", this, 1, 0.1, 3, false);
        this.random = new Setting("Random", this, 1, 0, 1, false);
        this.addAll(this.random, this.speed);
    }

    onEvent(e) {
        if (this.isToggled() && e.constructor.name === 'EventUpdate' && e.isPre()) {
            if (this.mc && this.mc.timer) {
                const randomValue = Math.random() * this.random.getValDouble() * 2 - this.random.getValDouble();
                this.mc.timer.timerSpeed = this.speed.getValDouble() + randomValue;
            }
        }
    }
}
