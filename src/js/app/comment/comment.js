class Comment{
    comments;
    data;

    constructor(comments, data) {
        this.comments = comments;
        this.data = data;
    
        this.commentUL = document.createElement("article");
        this.commentUL.classList = "commentUL";
    
        this.comments.main.yubtub.renderer.render("section", this.commentUL);
    
        // Input Comment
        this.commentInput = document.createElement("input");
        this.commentInput.type = "text";
    
        this.commentInput.placeholder = "Add your comment......";
        this.commentInput.classList = "commentinput";
    
        this.comments.main.yubtub.renderer.render("article", this.commentInput);
    
        // Button to Summit Comment
        this.readButton = document.createElement("button");
        this.readButton.classList = "commentbutton";
    
        this.readButton.innerText = "Submit";
        this.readButton.addEventListener("click", this.readComment);
    
        this.comments.main.yubtub.renderer.render("article", this.readButton);
    }
    
    readComment = () => {
        const output = document.createElement("div");
        output.classList = "commentdiv";
    
        const outParagraph = document.createElement("p");
        outParagraph.classList = "commentparagraph";
        outParagraph.innerText = this.commentInput.value;
    
        const userProfile = document.createElement("img");
        userProfile.src = "./images/photo.avif";
        userProfile.classList = "commentimage";
    
        output.appendChild(userProfile);
        output.appendChild(outParagraph);
    
        this.comments.main.yubtub.renderer.render("article", output);
    };
}