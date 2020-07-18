(() => {
  createTask = (event) => {
    event.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    const task = document.createElement("li");
    task.classList.add("task");

    const content = `<p class="content">${value}</p>`;

    task.innerHTML = content;

    task.appendChild(CheckButton());
    list.appendChild(task);

    input.value = "";
  };

  CheckButton = () => {
    const checkButton = document.createElement("button");

    checkButton.classList.add("check-button");
    checkButton.innerText = "Check";
    checkButton.addEventListener("click", checkTask);

    return checkButton;
  };

  checkTask = (event) => {
    const checkButton = event.target;
    const completeTask = checkButton.parentElement;

    completeTask.classList.toggle("done");
  };

  const newTask = document.querySelector("[data-form-button]");

  newTask.addEventListener("click", createTask);
})();
