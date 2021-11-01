const modal = document.querySelector("#modal-container");
const modalForm = document.querySelector("#modal");
const taskList = document.querySelector(".task-list");
const taskCont = document.querySelector(".container");
const taskAc = document.querySelector(".taskAc");
const tname = document.querySelector("#tname");
const desc = document.querySelector("#desc");
const dedln = document.querySelector("#deadline");
const open1 = document.getElementById("open1");
const modal_container = document.getElementById("modal");
const btn = document.querySelector("#modal #submit");

modal.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    let button = event.target;

    // let notDone = notAll.parentNode;
    if (button.textContent === "cancel") {
      modalForm.classList.add("cancel");
      modalForm.classList.remove("show");
      tname.value = "";
      desc.value = "";
    }
  }
});

function inpData() {
  //create elements;

  let taskList = document.createElement("div");
  let taskHead = document.createElement("div");
  let taskInfo = document.createElement("div");
  let h3 = document.createElement("h3");
  let plusImg = document.createElement("img");
  let iEdt = document.createElement("i");
  let iRem = document.createElement("i");
  let pDesc = document.createElement("p");
  let pDeadLn = document.createElement("p");
  let pplCharge = document.createElement("p");
  let progress = document.createElement("progress");

  // add class
  taskList.classList.add("task-list");
  taskHead.classList.add("task-heading");
  taskInfo.classList.add("task-info");
  plusImg.classList.add("plus-minus");
  plusImg.setAttribute("id", "plus-minus");
  plusImg.src = "images/Union 3.svg";
  iEdt.classList.add("far");
  iEdt.classList.add("fa-edit");
  iRem.classList.add("fas");
  iRem.classList.add("fa-user-times");

  //Set atrribute
  progress.setAttribute("max", 100);
  progress.setAttribute("value", 38);

  //Apend child
  h3.textContent = tname.value;
  pDesc.textContent = desc.value;

  taskAc.appendChild(taskList);
  taskAc.appendChild(taskInfo);
  taskList.appendChild(taskHead);
  taskList.appendChild(taskInfo);
  taskHead.appendChild(h3);

  h3.appendChild(plusImg);
  h3.appendChild(iEdt);
  h3.appendChild(iRem);
  h3.appendChild(progress);
  taskInfo.appendChild(pDeadLn);
  taskInfo.appendChild(pplCharge);
  taskInfo.appendChild(pDesc);

  //value things
}

const form = document.querySelector("#modal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tname = document.querySelector("#tname");
  const desc = document.querySelector("#desc");
  const label = document.querySelectorAll(".label");
  if (tname.value === "" || desc.value === "") {
    alert("say smth");
  } else if (btn.textContent === "submit") {
    inpData();
    // taskAc.innerHTML += `

    // <div class="task-list">
    //     <div class="task-heading">
    //         <h3>
    //             ${tname.value}
    //             <img class="plus-minus"  id="plus-minus" src="./images/Union 3.svg" alt="">
    //             <i class="far fa-edit"></i>
    //             <i class="fas fa-user-times"></i>

    //         </h3>
    //     </div>
    //     <div class="task-info">
    //     <p contenteditable="true"> <b contenteditable="true">Deadline:</b> 24.10.2021</p>
    //     <p contenteditable="true"> <b contenteditable="true">The person/people in charge:</b>${label.textContent}</p>
    //     <p contenteditable="true"> <b contenteditable="true">Description for the task: </b> ${desc.value}</p>

    // </div>
    // </div>
    // `;
  }

  tname.value = "";
  desc.value = "";
});

// taskList.addEventListener("click", (event) => {
//   if (event.target.tagName === "IMG") {
//     let rotatePlusbtn = event.target;
//     let taskInfo = event.target.parentNode.parentNode.nextElementSibling;
//     const taskHeader = rotatePlusbtn.parentNode.parentNode;
//     rotatePlusbtn.classList.toggle("x-rotate");
//     if (rotatePlusbtn.classList.toggle("plus-minus")) {
//       taskInfo.style.display = "block";
//       taskHeader.style.borderBottomLeftRadius = "0px";
//       taskHeader.style.borderBottomRightRadius = "0px";
//     } else {
//       taskInfo.style.display = "none";
//       taskHeader.style.borderBottomLeftRadius = "10px";
//       taskHeader.style.borderBottomRightRadius = "10px";
//     }
//   }
// });

//
// taskAc.addEventListener("click", (event) => {
//   let button = event.target;
// });

// ul.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const button = event.target;
//     const li = button.parentNode;
//     const ul = li.parentNode;
//     if (button.textContent === "Sil") {
//       ul.removeChild(li);
//     }
taskAc.addEventListener("click", (event) => {
  let button = event.target;
  let h3 = button.parentNode;
  let taskHead = h3.parentNode;
  let taskList = taskHead.parentNode;
  let taskInfo = taskHead.nextElementSibling;
  let pParent = taskInfo.children[2];
  if (event.target.tagName === "IMG") {
    let taskInfo = button.parentNode.parentNode.nextElementSibling;
    let taskHeader = button.parentNode.parentNode;
    taskInfo.classList.toggle("task-info-active");
    taskHeader.classList.toggle("task-header-active");
    button.classList.toggle("x-rotate");
  } else if (event.target.tagName === "I") {
    if (button.className === "fas fa-user-times") {
      taskAc.removeChild(taskList);
    } else if (button.className === "far fa-edit") {
      button.addEventListener("click", () => {
        btn.textContent = "Update";
        tname.value = h3.textContent;
        desc.value = pParent.textContent;
        modal_container.classList.add("show");

        btn.addEventListener("click", () => {
          if (btn.textContent === "Update") {
            h3.firstChild.nodeValue = tname.value;
            pParent.firstChild.nodeValue = desc.value;
          }
        });
      });
    }
  } else if (event.target.tagName === "PROGRESS") {
    let button = event.target;
    let num = document.createElement("input");
    num.type = "number";
    h3 = event.target.parentNode;
    h3.appendChild(num);
    num.addEventListener("click", () => {
      button.setAttribute("value", num.value);
    });
    num.addEventListener("keyup", () => {
      button.setAttribute("value", num.value);
    });
  }
});

open1.addEventListener("click", () => {
  if (btn.textContent === "Update") {
    btn.textContent = "submit";
  }
  modal_container.classList.add("show");
});
