import { Content } from "./Content";

class Editor {
    constructor(containerId) {
        this.containerId = containerId;

        this.container = undefined;
        this.content = undefined;

        this.init();
    }

    init () {
        this.initContainer();

        this.content = new Content(this);
    }

    initContainer () {
        this.container = document.getElementById(this.containerId);
        if (!this.container) throw new Error("指定容器元素不存在！");
        // this.container.contentEditable = true;
        this.container.classList.add('jz-editor');
    }

    focus () {
        this.content.focus();
    }
}

export { Editor };