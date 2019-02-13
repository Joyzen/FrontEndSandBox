import { Event } from "./Event";

class InputCursor {
    constructor(content) {
        this.container = content.el;

        this.inputarea = undefined;//当前输入位置指示器
        this._row = 0;//当前输入指针行号
        this._col = 0;//当前输入指针列号

        this._inputEvent = new Event();
        this._newLineEvent = new Event();

        this.initInputarea();
    }

    initInputarea () {
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

    focus () {
        this.inputarea.focus();
    }

    _onInput () {
        const value = this.inputarea.value;
        console.log(value);
        this._inputEvent.raise(value);
        if (value.substr(-1, 1) === "\n") {
            const lines = value.split(/\n/g);
            const newValue = lines.slice(-2, -1)[0];
            this._newLineEvent.raise(newValue);
            this.inputarea.value = "";//重新开始一行
        }
    }

    get inputEvent () {
        return this._inputEvent;
    }

    get newLineEvent () {
        return this._newLineEvent;
    }
}

export { InputCursor };
