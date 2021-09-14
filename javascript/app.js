//  menu click and cheng hash
const show_menus = async function () {
  const ids = document.getElementById("hidden__li").children;
  for (let index = 0; index <= ids.length - 1; index++) {
    const Item = ids[index];
    Item.style.color = "white";
    Item.style.borderBottom = "none";
    Item.style.fontWeight = "unset";

    const id = window.location.hash.slice(1);
    document.getElementById(id).style.color = "#EC4E6E";
    document.getElementById(id).style.borderBottom = "2px solid";
    document.getElementById(id).style.fontWeight = "bold";
  }
};

const events = ["hashchange", "load"];
events.forEach((ev) => window.addEventListener(ev, show_menus));





//  click chenge buttons
function click__profile() { 
  hide("arrowprofile");
  show("profile__managment");
  show("arrowprofiless");
  show("profile__clicked");
}
function click__profile_close() {
  show("arrowprofile");
  hide("profile__managment");
  hide("arrowprofiless");
  hide("profile__clicked");
}
function profile__clicked() {
  show("arrowprofile");
  hide("profile__managment");
  hide("arrowprofiless");
  hide("profile__clicked");
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}
function rowState(elem) {
  if (elem.className === "color__table2") {
    elem.className = "color__table1";
    elem.value = "Open";
  } else {
    elem.className = "color__table2";
    elem.value = "Progress";
  }
}
