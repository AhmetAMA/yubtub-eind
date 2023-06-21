class Video{
    main;
    htmlElement;

    constructor(main, data) {
        this.main = main;
        this.data = data;
        
        this.htmlElementDiv = document.createElement("div");
        this.htmlElementDiv.classList = "section__div";

        this.htmlElementArticle = document.createElement()

        this.main.yubtub.renderer.render("main", this.htmlElement)

        this.htmlElement = document.createElement("video");
        this.htmlElement.classList = "mainvideo__video"
        this.htmlElement.src = "./videos/" + data.video;
        this.main.yubtub.renderer.render("section", this.htmlElement);
    }
}