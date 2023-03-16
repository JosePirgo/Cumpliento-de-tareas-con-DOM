const deleteIcon = () =>{
    const i = document.createElement("i");
        i.classList.add("fas","fa-trash-alt","trachIcon", "icon");
        i.addEventListener("click", deteleTask); 
     return i;
    };

    const deteleTask = (event) => {
        
        const parent = event.target.parentElement;
        parent.remove();
    
    };

    export default deleteIcon;