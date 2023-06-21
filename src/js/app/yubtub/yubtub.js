class Yubtub{
    header;
    main;
    aside;
    renderer;
    app;

    constructor(app, data){
        this.app = app;
        this.renderer = new Renderer();
        this.header = new Header(this, data);
        this.main = new Main(this, data)
        this.aside = new Aside(this, data);
    }
}