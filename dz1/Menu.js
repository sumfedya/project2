class Menu {
    constructor(id, className, items){
        this.id = id;
        this.className = className;
        this.items = items;
    }
    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let item of this.items){
            if ((item instanceof MenuItem)||(item instanceof SubMenu)){
                result += item.render();
            }
        }
        result += `</ul>`;        
        return result;
    }
    remove(){
        document.getElementById(this.id).remove();        
    }
}

class SubMenu extends Menu {
    constructor(id, className, subName, items){
        super(id, className, items); 
        this.subName = subName;
    }
    render(){
        let result = `<li><span style="color:blue"><ins>${this.subName}</ins></span><ul class="${this.className}" id="${this.id}">`;
        for (let item of this.items){
            if (item instanceof MenuItem){
                result += item.render();
            }
        }
        result += `</ul></li>`;        
        return result;
    }
}