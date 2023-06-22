// class Main{
//     yubtub;
//     video;
//     comments;
//     htmlElement;

//     constructor(yubtub, data) {
//         this.yubtub = yubtub;

//         this.htmlElement = document.createElement("main");
//         this.htmlElement.classList = "main";

//         this.yubtub.renderer.render("body", this.htmlElement);
        
//         if (data && data.videos.length > 0) {
//             this.video = new Video(this, data.videos[0]);
//         }

//         this.comments = new Comments(this, data);
//     }
// }

class Main {
    yubtub;
    htmlElement;
    video;
    comments;
  
    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.htmlElement = document.createElement("main");
        this.htmlElement.classList = "main";

        this.yubtub.renderer.render("body", this.htmlElement);

        if (data && data.videos.length > 0) {
            this.video = new Video(this, data.videos[0]);
        }

        this.comments = new Comments(this, data);
    }
}