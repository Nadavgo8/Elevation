

const coffeeShop = {
  beans: 40,
  money: 0,
  beanCost: 2, // cost per bean

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 15 },
    americano: { beanRequirement: 5, price: 8 },
    doubleShot: { beanRequirement: 15, price: 22 },
    frenchPress: { beanRequirement: 12, price: 20 },
  },

  makeDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];
    if (!drink) {
      console.log(`Sorry, we don't make ${drinkType}`);
      return;
    }
    const requiredBeans = drink.beanRequirement;
  
    if (this.beans < requiredBeans) {
      const missingBeans = requiredBeans - this.beans;
      const cost = missingBeans * this.beanCost;
  
      if (this.money >= cost) {
        this.buyBeans(missingBeans);
      } else {
        console.log("Sorry, not enough beans and not enough money to buy more.");
        return;
      }
    }
  
    this.beans -= requiredBeans;
    console.log(`Here's your ${drinkType}! Beans left: ${this.beans}`);
  },
  

  buyBeans: function (numBeans) {
    const cost = numBeans * this.beanCost;
    if (this.money < cost) {
      console.log("Not enough money to buy beans.");
      return;
    }

    this.beans += numBeans;
    this.money -= cost;
    console.log(
      `Bought ${numBeans} beans for $${cost}. Beans now: ${this.beans}, Money left: $${this.money}`
    );
  },

  buyDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];
    if (!drink) {
      console.log(`Sorry, we don't sell ${drinkType}`);
      return;
    }

    this.money += drink.price;
    console.log(
      `Customer paid $${drink.price} for ${drinkType}. Total money: $${this.money}`
    );
    this.makeDrink(drinkType);
  },
};
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should console "Sorry, we're all out of beans"
