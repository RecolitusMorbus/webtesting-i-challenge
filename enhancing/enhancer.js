module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    const itemSuccess = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement + 1
    };
    return itemSuccess;
  } else {
    return item;
  };
};

function fail(item) {
  if (item.enhancement < 15) {
    const itemFail = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement
    };
    return itemFail;
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    const enhanceFail = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    };
    return enhanceFail;
  } else if (item.enhancement > 16) {
    const critFail = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    };
    return critFail;
  };
};

function repair(item) {
  const repairedItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return repairedItem;
}

function get(item) {
  if (item.enhancement === 0) {
    return item;
  } else {
    const itemStat = {
      name: `[+${item.enhancement}]` + item.name,
      durability: item.durability,
      enhancement: item.enhancement
    };
    return itemStat;
  };
};
