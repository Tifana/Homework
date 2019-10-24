// This is Wok to Walk. It was one of my favourite noodles fast food restaurant that unfortunately has been closed. 
// I want to revive it into huge vendor machine. So anyone can stop by and get their favourite meal again! 
// This is how it works inside Wok to Walk.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Ingridient {
    constructor(noodles, toppings, sauce){
        this.noodles = noodles
        this.toppings = toppings 
        this.sauce = sauce
        this.cooked = false
    }
    serving() {
        if(this.cooked){
            console.log("Enjoy your " + this.noodles + " noodles with " + this.toppings + " and " + this.sauce + " sauce!")
        }
    }
}

class Wok {
    constructor() {
        this.clean = true
        this.ingridient = []
    }
    washing() {
        console.log("wait a minute, the wok is being washed!")
        this.clean = true
    }
    cooking(Ingridient) {
        if(this.clean){
            // luckily the wok is clean, so we can start cooking
            console.log("seesshh.. your food is being cooked!")
            Ingridient.cooked = true
            this.clean = false
        } else {
            // unfortunately the wok is filthy, so we need to wash it first
            this.washing()
        }
    }
}


ing1 = new Ingridient("rice", "mushrooms", "sweet sour")
ing2 = new Ingridient("wheat", "beef", "spicy")

wok1 = new Wok()

wok1.cooking(ing1)
wok1.cooking(ing2)
wok1.cooking(ing2)

ing1.serving()
ing2.serving()
