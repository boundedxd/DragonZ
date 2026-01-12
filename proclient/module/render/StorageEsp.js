import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class StorageEsp extends Module {
    constructor() {
        super("StorageEsp", 0, Category.RENDER);
    }

    onEnable() {
        console.log("StorageEsp enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
