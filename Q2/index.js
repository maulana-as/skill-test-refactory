const fs = require("fs");
const profile = JSON.parse(fs.readFileSync("./profile_list.json", "utf-8"));

function donotHavePhone(arr) {
  let name = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].profile.phones.length === 0) {
      name += arr[i].username;
      name += " ";
    }
  }
  return `users do not have phone numbers are: ${name}`;
}

function findUsersHaveArticle(arr) {
  let users = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].articles.length) {
      users.push(arr[i].username);
    }
  }
  return `users who have article are: ${users.join(", ")}`;
}

function haveAnnisName(arr) {
  let name = "";
  for (let i = 0; i < arr.length; i++) {
    let lower_fullname = arr[i].profile.full_name.toLowerCase();
    if (lower_fullname.includes("annis")) {
      name += arr[i].username;
    } else {
      name += " ";
    }
  }
  return `users who have "annis" in their name:${name}`;
}

function article2020(arr) {
  let name = [];
  for (let i = 0; i < arr.length; i++) {
    duplicate = true;
    let user_article = arr[i].articles;
    if (user_article.length != 0) {
      for (let j = 0; j < user_article.length; j++) {
        if (user_article[j].published_at.includes(2020)) {
          duplicate = false;
          break;
        } 
      }
      if (duplicate == false) {
        name.push(arr[i].username);
      } 
    }
  }
  return `users have articles in 2020 are: ${name.join(", ")}`;
}

function bornIn1986(arr) {
  let name = "";
  arr.forEach((e) => {
    if (e.profile.birthday.includes(1986)) {
      name += e.username;
      name += " ";
    }
  });
  return `users are born in 1986 are: ${name}`;
}

function containTips(arr) {
  let article = [];
  arr.forEach((e) => {
    e.articles.forEach((el) => {
      if (el.title.toLowerCase().includes("tips")) {
        article.push(el.title);
      }
    });
  });
  return article.join(", ");
}

function publishedBeforeAug2019(arr) {
  let article = [];
  arr.forEach((e) => {
    e.articles.forEach((el) => {
      let typeDate = new Date(el.published_at);
      if (typeDate.getFullYear() === 2019 && typeDate.getMonth() < 8) {
        article.push(el.title);
      }
    });
  });
  return article.join(", ");
}

console.log(donotHavePhone(profile));
console.log(findUsersHaveArticle(profile));
console.log(haveAnnisName(profile));
console.log(article2020(profile));
console.log(bornIn1986(profile));
console.log(containTips(profile));
console.log(publishedBeforeAug2019(profile));
