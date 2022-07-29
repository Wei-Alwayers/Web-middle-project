import { GameMap } from '/static/js/game_object/gamemap/base.js';
import { Player } from '/static/js/game_object/player/base.js';
class KOF {
    constructor(id) {
        this.$kof = $('#' + id); // JQuery选择器
        //console.log(this.$kof)

        this.game_map = new GameMap(this);
        this.Players = [
            new Player(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 150,
                height: 200,
                color: 'blue',
            }),
            new Player(this, {
                id: 1,
                x: 900,
                y: 0,
                width: 150,
                height: 200,
                color: 'red',
            })
        ]
    }
}

export {
    KOF
}