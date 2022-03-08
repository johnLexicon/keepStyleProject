let tasks = document.querySelector('.tasks');
let form = document.querySelector('form');

// Vid starten kollar ifall det finns data kopplat med nyckeln tasksData, annars tilldelas en tom array.
let tasksData = JSON.parse(window.localStorage.getItem('tasksData')) || [];

let i = 0;

/**
 * Tar bor en task från localStorage samt deletar elementet i DOM:en
 * @param {ClickEvent} e
 */
function removeTask(e) {
  const taskId = e.currentTarget.id; // Hämtar task id:et
  // Filtrerar bort tasks som har samma id som knappen.
  tasksData = tasksData.filter((task) => task.id !== taskId);

  // Uppdaterar localStorage med ändringarna i task arrayen.
  window.localStorage.setItem('tasksData', JSON.stringify(tasksData));

  e.target.parentNode.remove();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let val = document.querySelector(`#data`).value;

  if (val != '') {
    const taskId = Date.now().toString(); // Konverterar till sträng för att lättare kunna jämföra dess id med den som har lagts till delete-knappen.

    // Varje inlagd task blir ett objekt med ett id-property och text-property
    tasksData.push({ id: taskId, text: val });

    // Lägger till den uppdaterade arrayen till localstorage (key = 'tasksData')
    window.localStorage.setItem('tasksData', JSON.stringify(tasksData));

    let input = document.querySelector('.input');
    let taskUl = document.createElement('ul');
    let taskLi = document.createElement('li');
    let taskInfo = input.value;

    tasks.appendChild(taskUl);
    taskUl.appendChild(taskLi);
    taskLi.append(taskInfo);

    let del = document.createElement('button');
    del.id = taskId; // Lägger till task-id till knappens id attribut
    let detText = document.createTextNode('delete');

    del.append(detText);
    taskLi.appendChild(del);

    taskLi.style.display = 'flex';
    taskLi.style.justifyContent = 'space-between';

    del.addEventListener('click', removeTask);
  } else {
    console.log('error');
  }
});

for (let task of tasksData) {
  // let input = document.querySelector('.input');
  let taskUl = document.createElement('ul');
  let taskLi = document.createElement('li');
  // let taskInfo = window.localStorage.getItem(`tasks${i}`);
  tasks.appendChild(taskUl);
  taskUl.appendChild(taskLi);
  taskLi.append(task.text);
  let del = document.createElement('button');
  del.id = task.id; // Lägger till id:et till knapp elementet för att sen kunna ta bort dess förälder från DOM:en
  let detText = document.createTextNode('delete');
  del.append(detText);
  taskLi.appendChild(del);
  taskLi.style.display = 'flex';
  taskLi.style.justifyContent = 'space-between';
  del.addEventListener('click', removeTask);
}

// for (let i = window.localStorage.length - 1; i >= 0; i--) {
//   if (window.localStorage.getItem(`tasks${i}`)) {
//     let input = document.querySelector(".input");
//     let taskUl = document.createElement("ul");
//     let taskLi = document.createElement("li");
//     let taskInfo = window.localStorage.getItem(`tasks${i}`);

//     tasks.appendChild(taskUl);
//     taskUl.appendChild(taskLi);
//     taskLi.append(taskInfo);

//     let del = document.createElement("button");
//     let detText = document.createTextNode("delete");

//     del.append(detText);
//     taskLi.appendChild(del);

//     taskLi.style.display = "flex";
//     taskLi.style.justifyContent = "space-between";

//     del.addEventListener("click", (e) => {
//       e.target.parentNode.remove();
//       window.localStorage.removeItem(`tasks${i--}`);
//     });
//   }
// }
