class Header{
    yubtub;
    htmlElement;
    figureElement;
    logoIElement;
    logoHeadingElement;

    constructor(yubtub) {
        this.yubtub = yubtub;

        this.htmlElement = document.createElement("header");
        this.htmlElement.classList = "header";
        this.yubtub.renderer.render("body", this.htmlElement);        
        
        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__logo";

        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "fa-solid fa-circle-play header__i";

        this.logoHeadingElement = document.createElement("h1");
        this.logoHeadingElement.classList = "header__h1";
        this.logoHeadingElement.innerText = "YubTub";
        
        this.htmlElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoIElement);
        this.figureElement.appendChild(this.logoHeadingElement);
    }
}