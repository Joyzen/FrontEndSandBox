class Config {
    constructor() {
        throw new Error("静态类不能被实例化！");
    }
}

Config.fontSize = 18;
Config.fontFamily = "Consolas, Courier New, monospace";

export { Config };