class Comments{
    main;
    comment;
    htmlElement;

    constructor(main, data) {
        this.main = main;

        this.htmlElement = document.createElement("section");
        this.htmlElement.classList = "maincomments";
        this.main.yubtub.renderer.render("main", this.htmlElement)

        this.comment = new Comment(this, data);
    }
}