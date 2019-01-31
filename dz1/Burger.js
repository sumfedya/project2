class Burger {
    constructor(big=false, inside=1, relish=false, mayo=false){
        this.big = big;
        this.inside = inside;
        this.relish = relish;
        this.mayo = mayo;
    }
    calculate(){
        let pSum = document.getElementById("burgerSum");
        let sum = 0;
        let energy = 0;
        
        this.big?(sum+=100, energy+=40):(sum+=50, energy+=20);
        
        this.relish?(sum+=15):energy+=0;
        
        this.mayo?(sum+=20, energy+=5):energy+=0;
        
        if (this.inside==1){
            sum+=10;
            energy+=20;
        }
        else if (this.inside==2){
            sum+=20;
            energy+=5;
        }
        else if (this.inside==2){
            sum+=15;
            energy+=10;
        }
        
        pSum.innerHTML = "Сумма: " + sum + "руб; калорийность: " + energy;
        
    }
    setSize(big){
        this.big = big;
        console.log(this);
    }
    setInside(inside){
        this.inside = inside;
        console.log(this);
    }
    setRelish(){
        this.relish = !this.relish;
        console.log(this);
    }
    setMayo(){
        this.mayo = !this.mayo;
        console.log(this);
    }
}

//● маленький (50 рублей, 20 калорий); 
//● большой (100 рублей, 40 калорий). 
//
//● сыром (+ 10 рублей, + 20 калорий); 
//● салатом (+ 20 рублей, + 5 калорий); 
//● картофелем (+ 15 рублей, + 10 калорий).
//
//(+ 15 рублей, 0 калорий)
//
//майонезом (+ 20 рублей, + 5 калорий).