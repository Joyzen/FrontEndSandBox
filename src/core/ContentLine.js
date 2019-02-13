class ContentLine {
    constructor(content, line = "") {
        this._editor = content.editor;
        this._content = content;
        this._contentEl = content.el;
        this._line = line;

        this._el = undefined;
        this.initContentLine();
    }

    initContentLine () {
        const el = this._el = document.createElement("div");

        el.classList.add("jz-content-line");
        el.style.top = `${this._content.rowLen * 32}px`;
        el.innerText = this._line;

        this._contentEl.appendChild(this._el);
    }

    updateLine (line) {
        this._line = line;
        el.innerText = this._line;
    }
}

export { ContentLine };