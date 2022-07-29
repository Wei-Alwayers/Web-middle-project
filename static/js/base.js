class KOF {
    constructor(id) {
        this.$kof = $('#' + id); // JQuery选择器
        console.log(this.$kof)
    }
}

export {
    KOF
}