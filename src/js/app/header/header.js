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
        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__logo";
        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "fa-solid fa-turkish-lira-sign";
        this.logoHeadingElement = document.createElement("h1");
        this.logoHeadingElement.classList = "header__podcast";
        this.logoHeadingElement.innerText = "YubTub";
        this.htmlElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoIElement);
        this.figureElement.appendChild(this.logoHeadingElement);
        this.yubtub.renderer.render("body", this.htmlElement);        
    }
}