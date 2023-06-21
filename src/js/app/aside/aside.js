class Aside{
    yubtub;
    nextVideo;
    htmlElement;

    constructor(yubtub, data){
        this.yubtub = yubtub;
        
        this.htmlElement = document.createElement("aside");
        this.htmlElement.classList = "aside";
        this.yubtub.renderer.render("body", this.htmlElement);

        this.nextVideo = new NextVideo(this, data);
    }
}