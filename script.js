let list = document.getElementById("infi-list");
let count = 0;

function addItems(num) {
  for (let i = 0; i < num; i++) {
    count++;
    let li = document.createElement("li");
    li.innerText = "Item " + count;
    list.appendChild(li);
  }
}
addItems(10);
window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    addItems(2);
  }
};
