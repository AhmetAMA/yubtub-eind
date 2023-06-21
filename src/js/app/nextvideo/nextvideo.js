class NextVideo{
    aside;
    htmlElement;

    constructor(aside, data){
      this.aside = aside;
      this.data = data;

      for (let i = 0; i < this.data.videos.length; i++) {
        const videoElement = document.createElement("video");
        videoElement.classList = "aside__nextvideo";

        videoElement.src = "./videos/" + this.data.videos[i].video;
        videoElement.type = "video/mp4";

        videoElement.onlick = () => this.videoClicked(this.data.video[i].link);

        this.aside.yubtub.renderer.render("aside", videoElement);
      }
    }
    
    videoClicked = (link) => {
      this.aside.yubtub.app.switcher.switch(link);
    }
}