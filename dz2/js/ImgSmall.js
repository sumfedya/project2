class ImgSmall {
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }
    createSmallImg(block) {
        let elImg = document.createElement('img');
        elImg.setAttribute('src', this.src);
        elImg.setAttribute('alt', this.alt);
        elImg.style.width = "320px";
        elImg.style.height = "240px";
        elImg.style.boxShadow = "1px 1px 1px black";
        block.appendChild(elImg);

        elImg.addEventListener('click', this.showBigPicture);
    }
    showBigPicture() {
        let elDiv = document.querySelector('.modal');
        elDiv.style.display = 'block';
        elDiv.addEventListener('click', () => {
            while (elDiv.firstChild) {
                elDiv.removeChild(elDiv.firstChild);
                elDiv.style.display = 'none';
            }
        })
        setTimeout(() => {
            let bigImg = document.createElement('img');
            bigImg.className = 'bigImg';
            bigImg.setAttribute('src', this.src);
            bigImg.setAttribute('alt', this.alt);
            bigImg.style.marginTop = -bigImg.height/2 + 'px';
            bigImg.style.top = '50%';
            elDiv.appendChild(bigImg)
        }, 200);
    }
}
