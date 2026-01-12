export const Category = {
    COMBAT: { mname: "Combat", i: 0 },
    MOVEMENT: { mname: "Movement", i: 1 },
    PLAYER: { mname: "Player", i: 2 },
    RENDER: { mname: "Render", i: 3 },
    MISC: { mname: "Misc", i: 4 },
    HUD: { mname: "Hud", i: 5 },

    values() {
        return [this.COMBAT, this.MOVEMENT, this.PLAYER, this.RENDER, this.MISC, this.HUD];
    }
};
