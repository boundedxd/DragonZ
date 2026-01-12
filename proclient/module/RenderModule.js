import { Module } from './Module.js';

export class RenderModule extends Module {
    constructor(name, key, category) {
        super(name, key, category);
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 20;
    }

    onRender() {
        if (this.isToggled()) {
            this.renderModule();
        }
    }

    renderModule() {
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }
}
