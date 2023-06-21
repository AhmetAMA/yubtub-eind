class Api {
  constructor() {
    this.getData();
  }

  async getData() {
    const response = await fetch("./src/data/data.json");
    const data = await response.json();
    this.data = data.data;
    return this.data;
  }
}

class App {
  switcher;
  api;

  constructor() {
    this.api = new Api();
    this.api.getData().then((data) => {
      this.switcher = new Switcher(this, data);
    });
  }
}

class Switcher {
  yubtub;
  cleaner;
  app;
  currentIndex = 0;

  constructor(app, data) {
    this.app = app;
    this.data = data;
    console.log("Our data", data);
    this.yubtub = new Yubtub(this.app, data);
    this.cleaner = new Cleaner();
  }

  switch(link) {
    this.cleaner.clean("main");
    this.yubtub.main.video = new Video(this.yubtub.main, this.data.videos[link]);
    this.yubtub.main.comments = new Comments(this.yubtub.main, this.data);
  }
}

class Cleaner {
  clean(whereToClean) {
    document.querySelector(whereToClean).innerHTML = "";
  }
}

class Yubtub {
  aside;
  renderer;
  app;
  main;

  constructor(app, data) {
    this.app = app;
    this.renderer = new Renderer();
    this.main = new Main(this, data);
    this.aside = new Aside(this, data);
  }
}

class Renderer {
  render(whereToRender, whatToRender) {
    document.querySelector(whereToRender).appendChild(whatToRender);
  }
}

class Aside {
  yubtub;
  nextVideo;
  htmlElement;

  constructor(yubtub, data) {
    this.yubtub = yubtub;

    this.htmlElement = document.createElement("aside");
    this.htmlElement.classList = "aside";

    this.yubtub.renderer.render("body", this.htmlElement);
    this.nextVideo = new NextVideo(this, data);
  }
}

class NextVideo {
  aside;

  constructor(aside, data) {
    this.aside = aside;
    this.data = data;

    for (let i = 0; i < this.data.videos.length; i++) {
      const random = Math.floor(Math.random() * this.data.videos.length);

      console.log(this.data.videos.length);

      const videoElement = document.createElement("video");
      videoElement.classList = "aside__nextVideo";


      videoElement.src = "./video/" + this.data.videos[random].video;

      videoElement.type = "video/mp4";
      
      videoElement.onclick = () => this.videoClicked(this.data.videos[random].link);

      this.aside.yubtub.renderer.render("aside", videoElement);
    }
  }

  videoClicked = (link) => {
    this.aside.yubtub.app.switcher.switch(link);
  };
}

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

class Video {
  main;
  htmlElement;

  constructor(main, videoData) {
    this.main = main;

    this.htmlElementDiv = document.createElement("div");
    this.htmlElementDiv.classList = "section__div"

    this.htmlElementArticle = document.createElement("div");
    this.htmlElementArticle.classList = "section__articleImage";

    this.htmlElementDiv2 = document.createElement("div");
    
    this.htmlElement = document.createElement("video");
    this.htmlElement.classList = "section__video";
    
    this.htmlElement.src = "./video/" + videoData.video;
    this.htmlElement.controls = true;


    this.htmlElementImage = document.createElement("img");
    this.htmlElementImage.classList = "section__image";
    this.htmlElementImage.src = "./images/photo.avif";
    
    this.htmlElementH1 = document.createElement("h1");
    this.htmlElementH1.classList = "section__h1";
    this.htmlElementH1.textContent = videoData.videoText;
    
    this.buttonhtmlElement = document.createElement("button");
    this.buttonhtmlElement.classList = "section__button";
    this.buttonhtmlElement.textContent = "button";

    
    
    this.htmlElementDiv.appendChild(this.htmlElementArticle);           
    this.htmlElementArticle.appendChild(this.htmlElementImage);           
    this.htmlElementDiv.appendChild(this.htmlElementH1);
    this.htmlElementDiv.appendChild(this.buttonhtmlElement);           

    this.main.yubtub.renderer.render("main", this.htmlElement);
    this.main.yubtub.renderer.render("main", this.htmlElementDiv);
    
    // this.videoitem = new Videoitems(this, data);
    
  }

  updateVideoData(videoData) {
    this.htmlElement.src = "./video/" + videoData.video;
    this.htmlElementH1.textContent = videoData.videoText;
  }
}

class Comments {
  main;
  sectionElement;

  constructor(main, data) {
    this.main = main;

    this.sectionElement = document.createElement("section");
    this.sectionElement.classList = "comment";

    this.main.yubtub.renderer.render("main", this.sectionElement);
    this.comment = new Comment(this, data);
  }
}

class Comment {
  comments;
  data;
  constructor(comments, data) {
    this.comments = comments;
    this.data = data;

    this.commentUL = document.createElement("article");
    this.commentUL.classList = "comment__UL";

    

    this.comments.main.yubtub.renderer.render("section", this.commentUL);

    // Input Comment
    this.commentInput = document.createElement("input");
    this.commentInput.type = "text";

    this.commentInput.placeholder = "Add your comment......";
    this.commentInput.classList = "comment__input";

    this.comments.main.yubtub.renderer.render("article", this.commentInput);

    // Button to Summit Comment
    this.readButton = document.createElement("button");
    this.readButton.classList = "comment__button";

    this.readButton.innerText = "Submit";
    this.readButton.addEventListener("click", this.readComment);

    this.comments.main.yubtub.renderer.render("article", this.readButton);
  }

  readComment = () => {
    const output = document.createElement("div");
    output.classList = "comment__div";

    const outParagraph = document.createElement("p");
    outParagraph.classList = "comment__paragraph";
    outParagraph.innerText = this.commentInput.value;
  
    const userProfile = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    userProfile.src = "./profile-img/persoon--" + randomNumber + ".webp";
    userProfile.classList = "comment__image";

    output.appendChild(userProfile);
    output.appendChild(outParagraph);
  
    this.comments.main.yubtub.renderer.render("article", output);
  };
  
}

const app = new App();