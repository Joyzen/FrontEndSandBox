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

    initContent () {
        this._el = document.createElement("div");
        this._el.classList.add("jz-content");

        this._container.appendChild(this._el);
        this.cursor = new InputCursor(this);

        this.cursor.inputEvent.on(e=>{

        });
        this.cursor.newLineEvent.on(e => {
            this.addLine(e);
        });
    }

    addLine (line) {
        this._lines.push(new ContentLine(this, line));
        // this
    }

    updateLine(line){

    }

    focus () {
        this.cursor.focus();
    }

    get rowLen () {
        return this._lines.length;
    }

    get el () {
        return this._el;
    }

}

export { Content };