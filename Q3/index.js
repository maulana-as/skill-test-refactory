const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./inventory_list.json", "utf-8"));

function findItems(arr) {
  let temp = [];
  arr.forEach((element) => {
    if (element.placement.name === "Meeting Room") {
      temp.push(element.tags);
    }
  });
  return `item in the Meeting Room are: ${temp.join(", ")}`;
}

function electronicDevices(arr) {
  let temp = [];
  arr.forEach((e) => {
    if (e.type === "electronic") {
      temp.push(e.tags);
    }
  });
  return `all electronic devices: ${temp}`;
}

function findAllFurniture(arr) {
  let furniture = [];
  let temp = arr.filter((e) => e.type === "furniture");
  temp.forEach((e) => {
    furniture.push(e.tags);
  });

  return `all the furniture items are: ${furniture.join(", ")}`;
}

function findItemsPurchased1620(arr) {
  let furniture = [];
  arr.forEach((e) => {
    let convDate = new Date(e.purchased_at * 1000);
    if (
      convDate.getFullYear() === 2020 &&
      convDate.getMonth() === 0 &&
      convDate.getDate() === 16
    ) {
      furniture.push(e.tags);
    }
  });
  return `all items were purchased on ${new Date(1579190471 * 1000)
    .toUTCString()
    .slice(0, 16)} are: ${furniture.join(", ")}`;
}

function allItemswithBrown(arr) {
  let temp = [];
  let brownName = arr.filter((e) => e.name.toLowerCase().includes("brown"));
  brownName.forEach((e) => {
    temp.push(e.tags);
  });
  return `all items with brown: ${temp.join(",")}`;
}
console.log(findItems(data));
console.log(electronicDevices(data));
console.log(findAllFurniture(data));
console.log(findItemsPurchased1620(data));
console.log(allItemswithBrown(data));
