// class Comment{
//     comments;
//     data;

//     constructor(comments, data) {
//         this.comments = comments;
//         this.data = data;
    
//         this.commentUL = document.createElement("article");
//         this.commentUL.classList = "commentUL";
    
//         this.comments.main.yubtub.renderer.render("section", this.commentUL);
    
//         // Input Comment
//         this.commentInput = document.createElement("input");
//         this.commentInput.type = "text";
    
//         this.commentInput.placeholder = "Add your comment......";
//         this.commentInput.classList = "commentinput";
    
//         this.comments.main.yubtub.renderer.render("article", this.commentInput);
    
//         // Button to Summit Comment
//         this.readButton = document.createElement("button");
//         this.readButton.classList = "commentbutton";
    
//         this.readButton.innerText = "Submit";
//         this.readButton.addEventListener("click", this.readComment);
    
//         this.comments.main.yubtub.renderer.render("article", this.readButton);
//     }
    
//     readComment = () => {
//         const output = document.createElement("div");
//         output.classList = "commentdiv";
    
//         const outParagraph = document.createElement("p");
//         outParagraph.classList = "commentparagraph";
//         outParagraph.innerText = this.commentInput.value;
    
//         const userProfile = document.createElement("img");
//         userProfile.src = "./images/photo.avif";
//         userProfile.classList = "commentimage";
    
//         output.appendChild(userProfile);
//         output.appendChild(outParagraph);
    
//         this.comments.main.yubtub.renderer.render("article", output);
//     };
// }

class Comment {
    comments;
    data;
    
    constructor(comments, data) {
        this.comments = comments;
        this.data = data;

        this.commentUL = document.createElement("article");
        this.commentUL.classList = "main__placeComment";
        this.comments.main.yubtub.renderer.render("section", this.commentUL);

        this.commentInput = document.createElement("textarea");
        this.commentInput.classList = "main__textarea";
        // this.commentInput.type = "text";
        this.commentInput.placeholder = "Place a comment";
        this.comments.main.yubtub.renderer.render("article", this.commentInput);

        this.readButton = document.createElement("button");
        this.readButton.classList = "main__commentButton";
        this.readButton.innerText = "Submit >";
        this.readButton.addEventListener("click", this.readComment);
        this.comments.main.yubtub.renderer.render("article", this.readButton);

        // this.userComment = document.createElement("article");
        // this.userComment.classList = "main__userComment";
        // this.comments.main.yubtub.renderer.render("section", this.userComment);
    }
  
    readComment = () => {
        const output = document.createElement("div");
        output.classList = "main__commentDiv";

        const outParagraph = document.createElement("p");
        outParagraph.classList = "main__commentP";
        outParagraph.innerText = this.commentInput.value;

        const userProfile = document.createElement("img");
        userProfile.classList = "main__commentImg";
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        userProfile.src = "./profile-img/persoon--" + randomNumber + ".webp";

        output.appendChild(userProfile);
        output.appendChild(outParagraph);

        this.comments.main.yubtub.renderer.render("section", output);
    };    
}