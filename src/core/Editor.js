class Editor {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) throw new Error("指定容器元素不存在！");

        this.initContainer();
    }

    initContainer () {
        this.container.contentEditable = true;
        this.container.classList.add('jz-editor');
    }
}

export { Editor };