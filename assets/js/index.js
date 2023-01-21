let myDropdown = document.getElementById("myDropdown");
let dropdowns = document.getElementsByClassName("dropdown-content");
let inputDiv = document.getElementById("testDiv");

const input1 = document.getElementById("sendSearch2");
const input2 = document.getElementById("sendSearch1");
input1.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const text = input1.value;
    window.location.replace("https://www.dndbeyond.com/search?q=" + text);
  }
});
input2.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const text = input2.value;
    window.location.replace("https://www.dndbeyond.com/search?q=" + text);
  }
});

function searchFunction() {
  const text = input2.value;
  window.location.replace("https://www.dndbeyond.com/search?q=" + text);
}

function dropFunction() {
  myDropdown.classList.toggle("show");
}
function showInputFunction() {
  inputDiv.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
