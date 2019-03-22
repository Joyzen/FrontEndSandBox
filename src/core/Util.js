import { Config } from "./Config";

class Util {
    constructor() {

    }

    static getHalfCharacterWidth () {
        console.log(this.getFontWidth("0"));
    }

    static getFontWidth (txt) {
        const span = document.createElement("span");
        span.style.position = "absolute";
        span.style.fontSize = Config.fontSize;
        span.style.fontFamily = Config.fontFamily;
        span.innerText = txt;
        document.body.appendChild(span);
        const w = span.offsetWidth;
        span.remove();
        return w;
    }
}

export { Util };