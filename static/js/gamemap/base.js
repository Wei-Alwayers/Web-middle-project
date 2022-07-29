import { GameObject } from '/static/js/game_object/base.js';

class GameMap extends GameObject {
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $('<canvas width = "1280" height = "720" tabindex = 0> </canvas>');
        // 增加 tabindex = 0 可以使canvas能够聚焦（接收键盘输入）
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();


    }

    start() {

    }

    update() {
        this.render();
    }

    render() {
        //this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = 'balck';
        this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height());

    }


}

export {
    GameMap
}
