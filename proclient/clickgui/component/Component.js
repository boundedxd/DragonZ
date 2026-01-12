export class Component {
    constructor() {
        this.components = [];
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 20;
    }

    updateComponent(mouseX, mouseY) {
        // Update component logic
    }

    renderComponent() {
        // Render component logic
    }

    mouseClicked(mouseX, mouseY, mouseButton) {
        // Handle mouse click for this component and its sub-components
        if (this.components) {
            for (let comp of this.components) {
                if (comp.mouseClicked) {
                    comp.mouseClicked(mouseX, mouseY, mouseButton);
                }
            }
        }
    }

    mouseReleased(mouseX, mouseY, state) {
        // Handle mouse release for this component and its sub-components
        if (this.components) {
            for (let comp of this.components) {
                if (comp.mouseReleased) {
                    comp.mouseReleased(mouseX, mouseY, state);
                }
            }
        }
    }

    keyTyped(typedChar, keyCode) {
        // Handle key typed for this component and its sub-components
        if (this.components) {
            for (let comp of this.components) {
                if (comp.keyTyped) {
                    comp.keyTyped(typedChar, keyCode);
                }
            }
        }
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

    getHeight() {
        return this.height;
    }
}

export default Component;
