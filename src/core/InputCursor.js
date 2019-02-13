import { Event } from "./Event";

class InputCursor {
    constructor(content) {
        this.container = content.el;
        
        this.inputarea = undefined;//当前输入位置指示器
        this._row = -1;//当前输入指针行号
        this._col = -1;//当前输入指针列号
        this._maxLineLength = 40;

        this._inputEvent = new Event();
        this._newLineEvent = new Event();

        this.initInputarea();
    }

    initInputarea() {
        this.inputarea = document.createElement("textarea");
        this.inputarea.classList.add("jz-inputarea");
        this.inputarea.wrap = "off";
        this.inputarea.autocorrect = "off";
        this.inputarea.autocapitalize = "off";
        this.inputarea.autocomplete = "off";
        this.inputarea.spellcheck = false;
        this.inputarea.autofocus = true;
        this.inputarea.role = "textbox";
        this.inputarea.style.width = "1px";
        this.inputarea.style.height = "1px";
        this.inputarea.style.position = "absolute";

        this.container.appendChild(this.inputarea);
        this.inputarea.addEventListener('input', this._onInput.bind(this));
        this.inputarea.onblur = this.focus.bind(this);

    }

    focus() {
        this.inputarea.focus();
    }

    nextLine() {
        this._row += 1;
        this._col = -1;
        this.updataCursor();
    }

    nextCol() {
        this._col += 1;
        this.updataCursor();
    }

    _onInput() {
        if (this.value.substr(-1, 1) === "\n" || this.value.length > this._maxLineLength) {
            this.value = "";//重新开始一行
            this._newLineEvent.raise();
        } else {
            this._inputEvent.raise(this.value);
        }
    }

    updataCursor() {
        this.inputarea.style.top = `${this._row * 32}px`;
        this.inputarea.style.left = `${this._col * 13}px`;
    }

    get inputEvent() {
        return this._inputEvent;
    }

    get newLineEvent() {
        return this._newLineEvent;
    }

    get currentRowNum() {
        return this._row;
    }

    set currentColNum(num) {
        this._col = parseInt(num);
    }

    get value() {
        return this.inputarea.value;
    }

    set value(v) {
        this.inputarea.value = v;
    }
}

export { InputCursor };
