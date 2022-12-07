const peopleList = document.getElementById("people");
const item = document.createElement("li");
item.innerText = "Roman";
peopleList.appendChild(item);
peopleList.removeChild(
    Array.from(peopleList.children)
    .filter(item => item.textContent === "Staszek")
    .shift()
    );