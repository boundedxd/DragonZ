import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class ZenticAura extends Module {
    constructor() {
        super("AimAura", 0, Category.COMBAT);
        this.delay = 0;
    }

    onUpdate() {
        if (this.isToggled()) {
            this.killaura();
        }
    }

    killaura() {
        if (!this.mc || !this.mc.theWorld || !this.mc.thePlayer) return;
        
        const entities = this.mc.theWorld.loadedEntityList || [];
        for (let entity of entities) {
            if (entity === this.mc.thePlayer) continue;
            if (!entity.isEntityAlive || !entity.isEntityAlive()) continue;
            
            const distance = this.mc.thePlayer.getDistanceToEntity(entity);
            if (distance < 4.5) {
                this.faceEntity(entity);
                if (this.delay >= 10) {
                    if (this.mc.playerController && this.mc.playerController.attackEntity) {
                        this.mc.playerController.attackEntity(this.mc.thePlayer, entity);
                    }
                    if (this.mc.thePlayer.swingItem) {
                        this.mc.thePlayer.swingItem();
                    }
                    this.delay = 0;
                }
                break;
            }
        }
        this.delay++;
    }

    faceEntity(entity) {
        const player = this.mc.thePlayer;
        if (!player || !entity) return;

        const dx = entity.posX - player.posX;
        const dy = entity.posY + entity.getEyeHeight() - (player.posY + player.getEyeHeight());
        const dz = entity.posZ - player.posZ;

        const dist = Math.sqrt(dx * dx + dz * dz);
        const yaw = Math.atan2(dz, dx) * 180 / Math.PI - 90;
        const pitch = -(Math.atan2(dy, dist) * 180 / Math.PI);

        player.rotationYaw = yaw;
        player.rotationPitch = pitch;
    }
}
