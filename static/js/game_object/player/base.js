import { GameObject } from '/static/js/game_object/base.js'

class Player extends GameObject {
    constructor(root, info) {
        super();

        this.root = root;
        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.direction = 1;

        this.vx = 0;
        this.vy = 0;

        this.speedx = 400; // 水平速度（可以定义为变量）
        this.speedy = 1000; // 跳起的初始速度（可以定义为常量）

        this.gravity = 50;

        this.pressed_keys = this.root.game_map.controller.pressed_keys;

        this.ctx = this.root.game_map.ctx;
        this.status = 3; // 0: idle，1:向前，2:向后，3:跳跃，4:攻击，5:被打，6:死亡
    }

    start() {

    }

    update_move() {
        this.vy += this.gravity;
        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;

        if (this.y > 450) {
            this.y = 450;
            this.vy = 0;
        }
    }

    update() {
        this.update_move();

        this.render();


    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        //console.log('1111');
    }
}

export {
    Player
}