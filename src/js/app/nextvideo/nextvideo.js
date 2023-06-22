// class NextVideo{
//     aside;
//     htmlElement;

//     constructor(aside, data){
//       this.aside = aside;
//       this.data = data;

//       for (let i = 0; i < this.data.videos.length; i++) {
//         const videoElement = document.createElement("video");
//         videoElement.classList = "aside__nextvideo";

//         videoElement.src = "./videos/" + this.data.videos[i].video;
//         videoElement.type = "video/mp4";

//         videoElement.onlick = () => this.videoClicked(this.data.video[i].link);

//         this.aside.yubtub.renderer.render("aside", videoElement);
//       }
//     }
    
//     videoClicked = (link) => {
//       this.aside.yubtub.app.switcher.switch(link);
//     }
// }

class NextVideo {
  aside;

  constructor(aside, data) {
    this.aside = aside;
    this.data = data;

    for (let i = 0; i < this.data.videos.length; i++) {
      const random = Math.floor(Math.random() * this.data.videos.length);
      // console.log(this.data.videos.length);

      const videoElement = document.createElement("video");
      videoElement.classList = "aside__nextVideo";
      this.aside.yubtub.renderer.render("aside", videoElement);

      videoElement.src = "./video/" + this.data.videos[random].video;
      videoElement.type = "video/mp4";
      
      videoElement.onclick = () => this.videoClicked(this.data.videos[random].link);
    }
  }

  videoClicked = (link) => {
    this.aside.yubtub.app.switcher.switch(link);
  };
}