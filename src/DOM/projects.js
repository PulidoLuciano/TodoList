export default function projects(project){
    let divProjects = document.createElement("section");
    divProjects.setAttribute("id", "projects");

    let h1Title = document.createElement("h1");
    h1Title.innerHTML = project.title;

    let divTasks = document.createElement("div");
    divTasks.setAttribute("id", "project-tasks");

    let buttonAddNewTask = document.createElement("button");
    buttonAddNewTask.setAttribute("id", "add-task-button");
    buttonAddNewTask.innerHTML = `<span class="material-symbols-outlined">add</span> Add Task`;

    divProjects.appendChild(h1Title);
    divProjects.appendChild(buttonAddNewTask);

    return divProjects;
}

