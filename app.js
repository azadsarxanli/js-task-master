const modal = document.querySelector("#modal-container");
const modalForm = document.querySelector("#modal");
const taskList = document.querySelector(".task-list");
const taskCont = document.querySelector(".container");
const taskAc = document.querySelector(".taskAc");

modal.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    let button = event.target;

    // let notDone = notAll.parentNode;
    if (button.textContent === "cancel") {
      modalForm.classList.add("cancel");
      modalForm.classList.remove("show");
    }
  }
});
const form = document.querySelector("#modal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tname = document.querySelector("#tname");
  const desc = document.querySelector("#desc");
  const label = document.querySelectorAll(".label");
  if (tname.value === "" || desc.value === "") {
    alert("say smth");
  } else {
    const taskAc = document.querySelector("#task-accordion");
    taskAc.innerHTML += `
    
    <div class="task-list">
        <div class="task-heading">
            <h3>
                ${tname.value}
                <img class="plus-minus"  id="plus-minus" src="./images/Union 3.svg" alt="">
                <i class="fas fa-user-times"></i>
            </h3>
        </div>
        <div class="task-info">
        <p> <b>Deadline:</b> 24.10.2021</p>
        <p> <b>The person/people in charge:</b>${label.textContent}</p>
        <p> <b>Description for the task: </b> ${desc.value}</p>
        
    </div>
    </div>
    `;
    console.log(document.querySelector(".task-list"));
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
taskAc.addEventListener("click", (event) => {
  let button = event.target;
  console.log(button);
  if (event.target.tagName === "I") {
    let h3 = button.parentNode;
    let taskHead = h3.parentNode;
    let taskList = taskHead.parentNode;
    if (button.className === "fas fa-user-times") {
      taskAc.removeChild(taskList);
    }
  }
});

// ul.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const button = event.target;
//     const li = button.parentNode;
//     const ul = li.parentNode;
//     if (button.textContent === "Sil") {
//       ul.removeChild(li);
//     }
