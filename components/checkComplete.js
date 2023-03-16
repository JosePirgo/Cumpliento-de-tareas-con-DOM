const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-check-square", "icon" );
    i.addEventListener("click", completeTask);
    return i;
};


// Immediatel invoked function expression IIFE
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("comleteIcon");
    element.classList.toggle("far");
};

export default checkComplete;