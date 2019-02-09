class CheckElem {
    constructor(id, labelId, pattern) {
        this.id = id;
        this.labelId = labelId;
        this.pattern = pattern;
    }
    check() {
        let result = this.pattern.test(document.getElementById(this.id).value);
        this.pattern.lastIndex = 0;
        let elLabel = document.getElementById(this.labelId);
        if (result) {
            if (elLabel.classList.contains('incorrect')) {
                elLabel.classList.remove('incorrect');
            }
        } else {
            if (!elLabel.classList.contains('incorrect')) {
                elLabel.classList.add('incorrect');
            }
        }        
        return result;
    }
    checkNumber(){
        let result = (this.pattern !== document.getElementById(this.id).selectedIndex); 
        let elLabel = document.getElementById(this.labelId);
        if (result) {
            if (elLabel.classList.contains('incorrect')) {
                elLabel.classList.remove('incorrect');
            }
        } else {
            if (!elLabel.classList.contains('incorrect')) {
                elLabel.classList.add('incorrect');
            }
        }        
        return result;
    }
}