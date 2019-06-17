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
      enhancement: item.enhancement
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
    const enhancFail = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    };
    return enhancFail;
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
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
