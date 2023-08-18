import sider from "./sider";
import projects from "./projects";

export default function structure(list, actual){
    let divContent = document.querySelector("#content");

    divContent.innerHTML = "";

    let divSider = sider(list);
    let divProject = projects(actual);

    divContent.appendChild(divSider);
    divContent.appendChild(divProject);

    return divContent;
}