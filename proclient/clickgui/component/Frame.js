export class Frame {
    constructor(category) {
        this.category = category;
        this.components = [];
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 20;
        this.open = true;
        this.drag = false;
        this.dragX = 0;
        this.dragY = 0;
    }

    getComponents() {
        return this.components;
    }

    renderFrame(fontRenderer) {
        // Render frame logic
    }

    updatePosition(mouseX, mouseY) {
        if (this.drag) {
            this.x = mouseX - this.dragX;
            this.y = mouseY - this.dragY;
        }
    }

    isWithinHeader(mouseX, mouseY) {
        return mouseX >= this.x && mouseX <= this.x + this.width &&
               mouseY >= this.y && mouseY <= this.y + this.height;
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

    setDrag(drag) {
        this.drag = drag;
    }

    isOpen() {
        return this.open;
    }

    setOpen(open) {
        this.open = open;
    }
}

export default Frame;
