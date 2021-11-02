const modal = document.querySelector("#modal-container");
const modalForm = document.querySelector("#modal");
const taskList = document.querySelector(".task-list");
const taskCont = document.querySelector(".container");
const taskAc = document.querySelector(".taskAc");
const tname = document.querySelector("#tname");
const desc = document.querySelector("#desc");
const dedln = document.querySelector("#deadline");
const open1 = document.getElementById("open1");
const btn = document.querySelector("#modal #submit");
const form = document.querySelector("#modal");

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
  let progress = document.createElement("div");
  let progSpan = document.createElement("span");
  let boldDesc = document.createElement("b");
  let bolDead = document.createElement("b");
  let boldPpl = document.createElement("b");
  let dedSpan = document.createElement("span");
  let descSpan = document.createElement("span");
  let pplSpan = document.createElement("span");

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
  progress.classList.add("progress-bar");
  progSpan.classList.add("prog-span");

  //Apend child
  h3.textContent = tname.value;

  taskAc.appendChild(taskList);
  taskAc.appendChild(taskInfo);
  taskList.appendChild(taskHead);
  taskList.appendChild(taskInfo);
  taskHead.appendChild(h3);

  h3.appendChild(plusImg);
  h3.appendChild(iEdt);
  h3.appendChild(iRem);
  h3.appendChild(progress);
  progress.appendChild(progSpan);

  //People Charge

  let boldPplText = document.createTextNode("People in charge:");
  taskInfo.appendChild(pplCharge);
  pplCharge.appendChild(boldPpl);
  pplCharge.appendChild(pplSpan);
  boldPpl.appendChild(boldPplText);

  //TODO:Dead Line
  let dedSpanText = document.createTextNode(dedln.value);
  let bolDeadText = document.createTextNode("deadline: ");
  taskInfo.appendChild(pDeadLn);
  pDeadLn.appendChild(bolDead);
  pDeadLn.appendChild(dedSpan);

  bolDead.appendChild(bolDeadText);
  dedSpan.appendChild(dedSpanText);

  //P description
  let descSpanText = document.createTextNode(desc.value);
  let boldDescText = document.createTextNode("Description: ");
  taskInfo.appendChild(pDesc);
  pDesc.appendChild(boldDesc);
  pDesc.appendChild(descSpan);

  boldDesc.appendChild(boldDescText);
  descSpan.appendChild(descSpanText);

  // create Number input for progress

  const num = document.createElement("input");
  num.type = "number";
  num.classList.add("numInp");
  //access to the parent
  num.setAttribute("min", 0);
  num.setAttribute("max", 100);
  h3.appendChild(num);
}

modal.addEventListener("submit", (e) => {
  // Submit olarkən elementləri UI əlavə etmək
  e.preventDefault();
  const tname = document.querySelector("#tname");
  const desc = document.querySelector("#desc");
  if (tname.value === "" || desc.value === "") {
    alert("say smth");
  } else if (btn.textContent === "submit") {
    inpData();
  }

  tname.value = "";
  desc.value = "";
});

taskAc.addEventListener("click", (event) => {
  //UI'daki elementləri update etmək
  let button = event.target;
  let h3 = button.parentNode;
  let taskHead = h3.parentNode;
  let taskList = taskHead.parentNode;
  let taskInfo = taskHead.nextElementSibling;
  let pParent = taskInfo.firstChild.nextElementSibling.nextElementSibling;
  console.log(pParent);
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
      btn.textContent = "Update";
      let h3 = event.target.parentNode;

      tname.value = h3.firstChild.nodeValue;
      desc.value = pParent.textContent;
      modalForm.classList.add("show");

      btn.addEventListener("click", () => {
        if (btn.textContent === "Update") {
          h3.firstChild.nodeValue = tname.value;
          pParent.firstChild.nodeValue = desc.value;
        }
      });
    }
  } else if (event.target.tagName === "DIV") {
    // create number element
    let span = button.firstElementChild;
    let num = event.target.nextElementSibling;
    console.log(num);
    //! classlist
    function numColor() {
      if (num.value.trim() === "") {
        span.style.width = 1 + "px";
        span.style.background = "red";
      } else {
        if (num.value == 0 || num.value <= 10) {
          span.style.background = "red";
        } else if (num.value > 10 && num.value <= 30) {
          span.style.background = "orange";
        } else if (num.value > 30 && num.value <= 60) {
          span.style.background = "yellow";
        } else if (num.value > 60 && num.value <= 90) {
          span.style.background = "yellowGreen";
        } else {
          span.style.background = "green";
        }
      }
    }

    num.classList.toggle("numAct");
    num.addEventListener("keyup", () => {
      button.firstElementChild.style.width = num.value + "px";
      numColor();
    });
    num.addEventListener("click", () => {
      button.firstElementChild.style.width = num.value + "px";
      numColor();
    });
  }
});

modal.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    let button = event.target;

    // let notDone = notAll.parentNode;
    if (button.textContent === "cancel") {
      modalForm.classList.remove("show");
      modalForm.classList.add("cancel");
      tname.value = "";
      desc.value = "";
    }
  }
});

open1.addEventListener("click", () => {
  if (btn.textContent === "Update") {
    btn.textContent = "submit";
  }

  modalForm.classList.add("show");
  modalForm.classList.remove("cancel");
});
