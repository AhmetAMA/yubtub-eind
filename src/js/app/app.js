class App {
    switcher;
    api;

    constructor() {
        this.api = new Api();
        this.api.getData().then((data) => {
            this.switcher = new Switcher(this, data);
        })
    }
}