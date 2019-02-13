import "./assets/css/main.css";
import "./assets/css/normalize.css";
import "./assets/css/editor.css";
import { Editor } from "./core/Editor";

const editor = new Editor("container");

editor.focus();
document.onfocus = function () {
    editor.focus();
}



window.editor = editor;