export default function projects(project){
    let divProjects = document.createElement("section");
    divProjects.setAttribute("id", "projects");

    let divInfo = document.createElement("div");
    divInfo.setAttribute("id", "project-info");
    divProjects.appendChild(divInfo);

    let h1Title = document.createElement("h1");
    h1Title.innerHTML = project.title;
    divInfo.appendChild(h1Title);
    
    let divButtons = document.createElement("div");
    divButtons.setAttribute("id", "project-buttons");
    divInfo.appendChild(divButtons);

    let buttonAddNewTask = document.createElement("button");
    buttonAddNewTask.setAttribute("id", "add-task-button");
    buttonAddNewTask.classList.add("project-button");
    buttonAddNewTask.innerHTML = `<span class="material-symbols-outlined">add</span> Add Task`;
    divButtons.appendChild(buttonAddNewTask);

    if(project.title != "Inbox" && project.title != "Today"){
        let buttonDeleteProject = document.createElement("button");
        buttonDeleteProject.setAttribute("id", "delete-project-button");
        buttonDeleteProject.classList.add("project-button");
        buttonDeleteProject.innerHTML = `<span class="material-symbols-outlined">delete</span> Delete project`;
        divButtons.appendChild(buttonDeleteProject);
    }
    
    let divTasks = document.createElement("div");
    divTasks.setAttribute("id", "project-tasks");
    divProjects.appendChild(divTasks);

    let countTask = 0;
    project.tasks.forEach(element => {
        console.log(element);
        
        let divTask = document.createElement("div");
        divTask.classList.add("task");
        divTask.setAttribute("name", countTask);

        let div = document.createElement("div");
        div.classList.add("task-info");
        divTask.appendChild(div);

        let check = document.createElement("input");
        check.classList.add("task-check");
        check.setAttribute("type", "checkbox");
        check.setAttribute("name", countTask);
        div.appendChild(check);

        let taskTitle = document.createElement("p");
        taskTitle.innerHTML = element.title;
        div.appendChild(taskTitle);

        let taskDescription = document.createElement("p");
        taskDescription.classList.add("task-description");
        taskDescription.innerHTML = element.description;
        div.appendChild(taskDescription);

        let taskDueDate = document.createElement("p");
        taskDueDate.innerHTML = element.dueDate;
        divTask.appendChild(taskDueDate);

        divTasks.appendChild(divTask);

        countTask++;
    });

    return divProjects;
}

