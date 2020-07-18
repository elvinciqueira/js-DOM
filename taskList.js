(() => {
  const createTask = (event) => {
    event.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    const task = document.createElement("li");
    task.classList.add("task");

    const content = `<p class="content">${value}</p>`;

    task.innerHTML = content;

    task.appendChild(CheckButton());
    task.appendChild(DeleteButton());
    list.appendChild(task);

    input.value = "";
  };

  const CheckButton = () => {
    const checkButton = document.createElement("button");

    checkButton.classList.add("check-button");
    checkButton.innerText = "check";
    checkButton.addEventListener("click", checkTask);

    return checkButton;
  };

  const checkTask = (event) => {
    const checkButton = event.target;
    const completeTask = checkButton.parentElement;

    completeTask.classList.toggle("done");
  };

  const DeleteButton = () => {
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", deleteTask);

    return deleteButton;
  };

  const deleteTask = (event) => {
    const deleteButton = event.target;
    const completeTask = deleteButton.parentElement;

    completeTask.remove();

    return deleteButton;
  };

  const newTask = document.querySelector("[data-form-button]");

  newTask.addEventListener("click", createTask);
})();
