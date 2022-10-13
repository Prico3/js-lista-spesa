// creo lista spesa con array
const list = ["mela", "pera", "banana", "kiwi", "fragola", "uva"];

// creo la lista da mettere nel markup
const container = document.querySelector(".container");
const ul = document.createElement("ul");
container.append(ul)




// prendere tutti gli elementi col ciclo while
let i = 0;

while (i < list.length){
    const item = list[i];
    // stamparli in una lista
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.append(li)
    i++
}