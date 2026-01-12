import { Category } from '../module/Category.js';
import { Frame } from './component/Frame.js';

export class ClickGui {
    static frames = [];
    static color = -1;

    constructor() {
        ClickGui.frames = [];
        let frameX = 5;
        
        for (let category of Category.values()) {
            let frame = new Frame(category);
            frame.setX(frameX);
            ClickGui.frames.push(frame);
            frameX += frame.getWidth() + 1;
        }
    }

    initGui() {
        console.log("ClickGui initialized");
    }

    drawScreen(mouseX, mouseY, partialTicks) {
        for (let frame of ClickGui.frames) {
            if (frame.renderFrame) {
                frame.renderFrame();
            }
            if (frame.updatePosition) {
                frame.updatePosition(mouseX, mouseY);
            }
            const components = frame.getComponents();
            if (components) {
                for (let comp of components) {
                    if (comp.updateComponent) {
                        comp.updateComponent(mouseX, mouseY);
                    }
                }
            }
        }
    }

    mouseClicked(mouseX, mouseY, mouseButton) {
        for (let frame of ClickGui.frames) {
            if (frame.isWithinHeader && frame.isWithinHeader(mouseX, mouseY)) {
                if (mouseButton === 0) {
                    frame.setDrag(true);
                    frame.dragX = mouseX - frame.getX();
                    frame.dragY = mouseY - frame.getY();
                }
                if (mouseButton === 1) {
                    frame.setOpen(!frame.isOpen());
                }
            }
            
            if (frame.isOpen && frame.isOpen()) {
                const components = frame.getComponents();
                if (components) {
                    for (let comp of components) {
                        if (comp.mouseClicked) {
                            comp.mouseClicked(mouseX, mouseY, mouseButton);
                        }
                    }
                }
            }
        }
    }

    mouseReleased(mouseX, mouseY, state) {
        for (let frame of ClickGui.frames) {
            frame.setDrag(false);
            
            const components = frame.getComponents();
            if (components) {
                for (let comp of components) {
                    if (comp.mouseReleased) {
                        comp.mouseReleased(mouseX, mouseY, state);
                    }
                }
            }
        }
    }

    keyTyped(typedChar, keyCode) {
        for (let frame of ClickGui.frames) {
            const components = frame.getComponents();
            if (components) {
                for (let comp of components) {
                    if (comp.keyTyped) {
                        comp.keyTyped(typedChar, keyCode);
                    }
                }
            }
        }
    }

    doesGuiPauseGame() {
        return true;
    }
}
