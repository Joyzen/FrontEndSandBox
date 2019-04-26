import { Config } from "./Config";

class Util {

    static getHalfCharacterWidth () {
        console.log(this.getFontWidth("0"));
    }

    static getFontWidth (txt) {
        const span = this.fontEl/* document.createElement("span") */;
        span.innerText = txt;
        const width = span.offsetWidth;
        // span.remove();
        return width;
    }

    static getFontHeight (txt) {
        const span = this.fontEl/* document.createElement("span") */;
        span.innerText = txt;
        const height = span.offsetHeight;
        // span.remove();
        return height;
    }
}

Util.fontEl = document.createElement("span");
(function () {
    Util.fontEl.style.position = "absolute";
    Util.fontEl.style.fontSize = `${Config.fontSize}px`;
    Util.fontEl.style.fontFamily = Config.fontFamily;
    Util.fontEl.style.whiteSpace = "nowrap";
    document.body.appendChild(Util.fontEl);
})();

export { Util };