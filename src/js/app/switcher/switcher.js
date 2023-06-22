// class Switcher{
//     yubtub;
//     cleaner;
//     app;
//     default = 0;
   
//     constructor(app,data){
//        this.app = app;
//        this.data = data;
//        console.log(data);

//        this.yubtub = new Yubtub(this.app, data);
//        this.cleaner = new Cleaner();
//     }
   
//    switch(link){
//       this.cleaner.clean("body");
//       this.yubtub.main.video = new Video(this.yubtub.main, this.data.videos[link]);
//       this.yubtub.main.comments = new Comments(this.yubtub.main, this.data);
//    }
// }

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