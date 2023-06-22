// class Video{
//     main;
//     htmlElement;

//     constructor(main, data) {
//         this.main = main;
//         this.data = data;
        
//         this.htmlElementDiv = document.createElement("div");
//         this.htmlElementDiv.classList = "section__div";

//         this.htmlElementArticle = document.createElement()

//         this.main.yubtub.renderer.render("main", this.htmlElement)

//         this.htmlElement = document.createElement("video");
//         this.htmlElement.classList = "mainvideo__video"
//         this.htmlElement.src = "./videos/" + data.video;
//         this.main.yubtub.renderer.render("section", this.htmlElement);
//     }
// }

class Video {
    main;
    htmlElement;
  
    constructor(main, videoData) {
        this.main = main;
        
        this.htmlElement = document.createElement("video");
        this.htmlElement.classList = "main__video";
        this.htmlElement.src = "./video/" + videoData.video;
        this.htmlElement.controls = true;
        
        this.htmlElementDiv = document.createElement("div");
        this.htmlElementDiv.classList = "main__div"

        this.htmlElementArticle = document.createElement("div");
        this.htmlElementArticle.classList = "main__articleImage";

        this.htmlElementImage = document.createElement("img");
        this.htmlElementImage.classList = "main__image";
        this.htmlElementImage.src = "./img/telegraaf.webp";
        
        this.htmlElementH1 = document.createElement("h3");
        this.htmlElementH1.classList = "main__h3";
        this.htmlElementH1.textContent = videoData.videoText;

        this.buttonDiv = document.createElement("div");
        this.buttonDiv.classList = "main__buttonDiv";
        
        this.buttonhtmlElement = document.createElement("button");
        this.buttonhtmlElement.classList = "main__button";
        this.buttonhtmlElement.textContent = "abboneren";
        
        this.htmlElementDiv.appendChild(this.htmlElementArticle);           
        this.htmlElementArticle.appendChild(this.htmlElementImage);           
        this.htmlElementArticle.appendChild(this.htmlElementH1);
        this.htmlElementDiv.appendChild(this.buttonDiv);           
        this.buttonDiv.appendChild(this.buttonhtmlElement);           

        this.main.yubtub.renderer.render("main", this.htmlElement);
        this.main.yubtub.renderer.render("main", this.htmlElementDiv);
      
      // this.videoitem = new Videoitems(this, data);
    }
  
    updateVideoData(videoData) {
        this.htmlElement.src = "./video/" + videoData.video;
        this.htmlElementH1.textContent = videoData.videoText;
    }
}