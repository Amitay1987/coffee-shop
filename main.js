const coffeeShop = {
  beans: 40,
  oneBeanCost: 3, 
  money: 100,

  drinkRequirements: {
    latte: {price: 10 , beansRequipment :10},
    americano: {price: 5 ,beansRequipment: 5},
    doubleShot: {price:20,beansRequipment:15}, 
    frenchPress: {price:15 ,beansRequipment:12}
  },

   makeDrink: function (drinkType) {
    if(coffeeShop.drinkRequirements.hasOwnProperty(drinkType)){
      beansValue = coffeeShop.drinkRequirements[drinkType];
      if(beansValue <= this.beans){
        this.beans-=beansValue;
        alert("take your " + drinkType + "and enjoy :)");
      }
      else{
        alert("Sorry we're all out of beans");
      }
    }
    else{
      alert("Sorry we don't make " + drinkType);
    }
  },

  //make drink v2
  makeDrinkV2 : function (drinkType){

    //var drinkType = drinkType.toLowerCase();
    switch(drinkType){
      
      case "latte":
        this.makeFunc(drinkType);
        break;

      case "americano":
        this.makeFunc(drinkType);
        break;
        
      case "doubleShot":
        this.makeFunc(drinkType);
        break;
        
      case "frenchPress": 
        this.makeFunc(drinkType);
        break;

      default: 
        alert("Sorry we don't make " + drinkType);
    }
  },
  
  makeFunc : function(drinkType){
    coffeeShop.beans-= coffeeShop.drinkRequirements[drinkType].beansRequipment;
    alert("take your " + drinkType + " and enjoy :)");
  },

  buySupplies : function(money){
    //add if money not divide in 3;
    var beansToBuy = money/coffeeShop.oneBeanCost;
    coffeeShop.beans+=beansToBuy;
    coffeeShop.money-=money;

  },
  //INDIVIDUAL EXERCISE (EXTENSION 3)
  buyDrink : function(drinkType){
    
    drinkType = drinkType.toLowerCase();

    if(!this.drinkRequirements.hasOwnProperty(drinkType)){
      alert("Sorry we don't make " + drinkType)
    }
    else if(this.beans < this.drinkRequirements[drinkType].beansRequipment){
        alert("Sorry we're all out of beans");
    }
    else{
        this.makeDrinkV2(drinkType);
        this.money += this.drinkRequirements[drinkType].price;
    } 
  }
}



   // coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
