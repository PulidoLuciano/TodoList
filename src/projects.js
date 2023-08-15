export default function projects(){
    let divProjects = document.createElement("section");
    divProjects.setAttribute("id", "projects");

    let h1Title = document.createElement("h1");
    h1Title.innerHTML = "Project's Title";

    let buttonAddNewTask = document.createElement("button");
    buttonAddNewTask.setAttribute("id", "add-task-button");
    buttonAddNewTask.innerHTML = `<span class="material-symbols-outlined">add</span> Add Task`;

    divProjects.appendChild(h1Title);
    divProjects.appendChild(buttonAddNewTask);

    return divProjects;
}