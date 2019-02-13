import { ContentLine } from "./ContentLine";
import { InputCursor } from "./InputCursor";

class Content {

    constructor(editor) {
        this.editor = editor;
        this._container = editor.container;
        this._lines = [];//按顺序存储行内容

        this.cursor = undefined;

        this.initContent();
    }

    initContent() {
        this._el = document.createElement("div");
        this._el.classList.add("jz-content");

        this._container.appendChild(this._el);
        this.cursor = new InputCursor(this);

        this.addLine();//初始化添加一行
        this.cursor.inputEvent.on(e => {
            this.updateLine(e);
        });
        this.cursor.newLineEvent.on(e => {
            this.addLine();
        });
    }

    addLine(line) {
        this._lines.push(new ContentLine(this, line));
        this.cursor.nextLine();
    }

    updateLine(line) {
        this.currentLine.updateLine(line);
        this.cursor.nextCol();
    }

    focus() {
        this.cursor.focus();
    }

    get rowLen() {
        return this._lines.length;
    }

    get el() {
        return this._el;
    }

    get currentLine() {
        return this._lines[this.cursor.currentRowNum];
    }

}

export { Content };