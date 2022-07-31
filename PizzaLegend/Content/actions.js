window.Actions = {
  damage1: {
    name: "Быстродействие!",
    description: "Взрыв теста",
    success: [
      { type: "textMessage", text: "{CASTER} использовал {ACTION}!"},
      { type: "animation", animation: "spin"},
      { type: "stateChange", damage: 10}
    ]
  },
  saucyStatus: {
    name: "Томатная паста",
    description: "Применяет суперсилу",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} использовал {ACTION}!"},
      { type: "stateChange", status: { type: "saucy", expiresIn: 3 } }
    ]
  },
  clumsyStatus: {
    name: "Оливковое масло",
    description: "Скользкое месиво восхитительности",
    success: [
      { type: "textMessage", text: "{CASTER} использовал {ACTION}!"},
      { type: "animation", animation: "glob", color: "#dafd2a" },
      { type: "stateChange", status: { type: "clumsy", expiresIn: 3 } },
      { type: "textMessage", text: "{TARGET} все вокруг ускользает!"},
    ]
  },
  //Items
  item_recoverStatus: {
    name: "Нагревательная лампа",
    description: "Ощущение свежести и тепла",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} использовал {ACTION}!"},
      { type: "stateChange", status: null },
      { type: "textMessage", text: "Почувствуй свежесть!", },
    ]
  },
  item_recoverHp: {
    name: "Пармезан",
    targetType: "friendly",
    success: [
      { type:"textMessage", text: "{CASTER} посыпает немного {ACTION}!", },
      { type:"stateChange", recover: 10, },
      { type:"textMessage", text: "{CASTER} восстанавливает HP!", },
    ]
  },
}