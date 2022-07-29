import { GameMap } from '/static/js/gamemap/base.js'

class KOF {
    constructor(id) {
        this.$kof = $('#' + id); // JQuery选择器
        //console.log(this.$kof)

        this.game_map = new GameMap(this);
    }
}

export {
    KOF
}