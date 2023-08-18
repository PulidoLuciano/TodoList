import { ProjectsPresenter } from "../Presenters/projectsPresenter";

export default function sider(projects){
    let divSider = document.createElement("section");
    divSider.setAttribute("id", "sider");

    let buttonInbox = document.createElement("button");
    buttonInbox.classList.add("sider-button");
    buttonInbox.innerHTML = `<span class="material-symbols-outlined">inbox</span> Inbox`;
    buttonInbox.setAttribute("name", "0");
    buttonInbox.onclick = clickProjectHandler;
    divSider.appendChild(buttonInbox);

    let buttonToday = document.createElement("button");
    buttonToday.classList.add("sider-button");
    buttonToday.innerHTML = `<span class="material-symbols-outlined">today</span> Today`;
    buttonToday.setAttribute("name", "1");
    buttonToday.onclick = clickProjectHandler;
    divSider.appendChild(buttonToday);

    let divisor = document.createElement("div");
    divisor.classList.add("divisor");
    divSider.appendChild(divisor);

    let list = projects.slice(2);
    let name = 2;
    list.forEach(element => {
        let buttonProject = document.createElement("button");
        buttonProject.classList.add("sider-button");
        buttonProject.innerHTML = element.title;
        buttonProject.setAttribute("name", name);
        buttonProject.onclick = clickProjectHandler;
        divSider.appendChild(buttonProject);
        name++;
    });

    let buttonNewProject = document.createElement("button");
    buttonNewProject.classList.add("sider-button");
    buttonNewProject.innerHTML = `<span class="material-symbols-outlined">add</span> Add project`;
    buttonNewProject.onclick = clickNewProjectHandler;
    divSider.appendChild(buttonNewProject);
    
    return divSider;
}

function clickProjectHandler(e){
    ProjectsPresenter.ChangeActualProject(e.target.name);
}

function clickNewProjectHandler(e){
    let title = prompt("Enter the title for your new Project!");

    if(title != null && title != "" && title != "Inbox" && title != "Today"){
        ProjectsPresenter.AddProject(title);
    }
}