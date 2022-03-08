let tasks = document.querySelector(".tasks");
let form = document.querySelector("form");

let i = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let val = document.querySelector(`#data`).value;

  if (val != "") {
    window.localStorage.setItem(`tasks${i++}`, val);

    let input = document.querySelector(".input");
    let taskUl = document.createElement("ul");
    let taskLi = document.createElement("li");
    let taskInfo = input.value;

    tasks.appendChild(taskUl);
    taskUl.appendChild(taskLi);
    taskLi.append(taskInfo);

    let del = document.createElement("button");
    let detText = document.createTextNode("delete");

    del.append(detText);
    taskLi.appendChild(del);

    taskLi.style.display = "flex";
    taskLi.style.justifyContent = "space-between";

    del.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      window.localStorage.removeItem(`tasks${i--}`);
      // i--;
    });
  } else {
    console.log("error");
  }
});

for (let i = window.localStorage.length - 1; i >= 0; i--) {
  if (window.localStorage.getItem(`tasks${i}`)) {
    let input = document.querySelector(".input");
    let taskUl = document.createElement("ul");
    let taskLi = document.createElement("li");
    let taskInfo = window.localStorage.getItem(`tasks${i}`);

    tasks.appendChild(taskUl);
    taskUl.appendChild(taskLi);
    taskLi.append(taskInfo);

    let del = document.createElement("button");
    let detText = document.createTextNode("delete");

    del.append(detText);
    taskLi.appendChild(del);

    taskLi.style.display = "flex";
    taskLi.style.justifyContent = "space-between";

    del.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      window.localStorage.removeItem(`tasks${i--}`);
    });
  }
}
