import sider from "./sider";
import projects from "./projects";
import "./style.css";

function PagePrincipal(){
    
    let divContent = document.querySelector("#content");
    
    let divSider = sider();
    let divProject = projects();

    divContent.appendChild(divSider);
    divContent.appendChild(divProject);

    return divContent;
}

PagePrincipal();
