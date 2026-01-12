export class SettingsManager {
    constructor() {
        this.settings = [];
    }
    
    rSetting(inSetting) {
        this.settings.push(inSetting);
    }
    
    getSettings() {
        return this.settings;
    }
    
    getSettingsByMod(mod) {
        let out = [];
        for (let s of this.getSettings()) {
            if (s.getParentMod() === mod) {
                out.push(s);
            }
        }
        if (out.length === 0) {
            return null;
        }
        return out;
    }
    
    getSettingByName(name) {
        for (let set of this.getSettings()) {
            if (set.getName().toLowerCase() === name.toLowerCase()) {
                return set;
            }
        }
        console.error("[DragonX] Error Setting NOT found: '" + name + "'!");
        return null;
    }
}
