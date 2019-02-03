class MenuItem {
    constructor(className, href, title){
        this.className = className;
        this.href = href;
        this.title = title;
    }
    render(){
        return `<li class="${this.className}"><a class="menuItemLink" href="${this.href}">${this.title}</a></li>`
    }
}