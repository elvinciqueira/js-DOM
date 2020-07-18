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

export default CheckButton;
