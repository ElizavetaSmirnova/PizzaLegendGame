window.PizzaTypes = {
  normal: "normal",
  spicy: "spicy",
  veggie: "veggie",
  fungi: "fungi",
  chill: "chill",
}

window.Pizzas = {
  "s001": {
    name: "Самурай",
    description: "Пицца здесь",
    type: PizzaTypes.spicy,
    src: "./images/characters/pizzas/s001.png",
    icon: "./images/icons/spicy.png",
    actions: [ "saucyStatus", "clumsyStatus", "damage1" ],
  },
  "s002": {
    name: "Дон Бекон",
    description: "Соленый воин, который ничего не боится",
    type: PizzaTypes.spicy,
    src: "./images/characters/pizzas/s002.png",
    icon: "./images/icons/spicy.png",
    actions: [ "damage1", "saucyStatus", "clumsyStatus" ],
  },
  "v001": {
    name: "Кайли",
    description: "Пицца здесь",
    type: PizzaTypes.veggie,
    src: "./images/characters/pizzas/v001.png",
    icon: "./images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "v002": {
    name: "Арчи Артишок",
    description: "Пицца здесь",
    type: PizzaTypes.veggie,
    src: "./images/characters/pizzas/v001.png",
    icon: "./images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "f001": {
    name: "Скорая Экспресс",
    description: "Пицца здесь",
    type: PizzaTypes.fungi,
    src: "./images/characters/pizzas/f001.png",
    icon: "./images/icons/fungi.png",
    actions: [ "damage1" ],
  },
  "f002": {
    name: "Пепперони",
    description: "Пицца здесь",
    type: PizzaTypes.fungi,
    src: "./images/characters/pizzas/f001.png",
    icon: "./images/icons/fungi.png",
    actions: [ "damage1" ],
  }
}