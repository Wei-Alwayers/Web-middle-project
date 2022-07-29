let GAME_OBJECTS = []; /* 全局数组 */

class GameObject {
    constructor(id) {
        GAME_OBJECTS.push(this);

        this.timedelta = 0;
        this.has_call_start = false;

    }

    start() { // 初始时执行一次

    }
    update() { // 每一帧执行一次

    }

    destroy() { // 删除当前对象
        for (let i in GAME_OBJECTS) {
            if (GAME_OBJECTS[i] === this) {
                GAME_OBJECTS.splice(i, 1);
                break;
            }

        }
    }
}
let last_timestamp;
let GAME_OBJECTS_FRANE = (timestamp) => {
    for (let obj of GAME_OBJECTS) {
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(GAME_OBJECTS_FRANE);
}

requestAnimationFrame(GAME_OBJECTS_FRANE);

export {
    GameObject
}