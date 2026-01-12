import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class NoWeather extends Module {
    constructor() {
        super("NoWeather", 0, Category.RENDER);
    }

    onEnable() {
        console.log("NoWeather enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
