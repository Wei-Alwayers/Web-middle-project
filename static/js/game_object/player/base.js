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

        this.vx = 0;
        this.vy = 0;

        this.speedx = 400; // 水平速度（可以定义为变量）
        this.speedy = 1000; // 跳起的初始速度（可以定义为常量）

        this.ctx = this.root.game_map.ctx;

    }

    start() {

    }

    update() {
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