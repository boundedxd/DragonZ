export class Setting {
    constructor(name, parent, ...args) {
        this.name = name;
        this.parent = parent;
        
        if (args.length >= 1 && typeof args[0] === 'string') {
            this.options = args;
            this.sval = args[0];
            this.mode = "Combo";
        } else if (args.length === 1 && typeof args[0] === 'boolean') {
            this.bval = args[0];
            this.mode = "Check";
        } else if (args.length === 4 && typeof args[0] === 'number') {
            this.dval = args[0];
            this.min = args[1];
            this.max = args[2];
            this.onlyint = args[3];
            this.mode = "Slider";
        }
    }
    
    getName() {
        return this.name;
    }
    
    getParentMod() {
        return this.parent;
    }
    
    getMode() {
        return this.sval;
    }
    
    setValString(inVal) {
        this.sval = inVal;
    }
    
    getOptions() {
        return this.options;
    }
    
    isEnabled() {
        return this.bval;
    }
    
    setEnabled(inVal) {
        this.bval = inVal;
    }
    
    getValDouble() {
        if (this.onlyint) {
            this.dval = Math.floor(this.dval);
        }
        return this.dval;
    }

    setValDouble(inVal) {
        this.dval = inVal;
    }
    
    getMin() {
        return this.min;
    }
    
    getMax() {
        return this.max;
    }
    
    isCombo() {
        return this.mode.toLowerCase() === "combo";
    }
    
    isCheck() {
        return this.mode.toLowerCase() === "check";
    }
    
    isSlider() {
        return this.mode.toLowerCase() === "slider";
    }
    
    onlyInt() {
        return this.onlyint;
    }
}
