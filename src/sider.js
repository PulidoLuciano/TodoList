export default function sider(){
    let divSider = document.createElement("section");
    divSider.setAttribute("id", "sider");

    let buttonInbox = document.createElement("button");
    buttonInbox.classList.add("sider-button");
    buttonInbox.innerHTML = `<span class="material-symbols-outlined">inbox</span> Inbox`;

    let buttonToday = document.createElement("button");
    buttonToday.classList.add("sider-button");
    buttonToday.innerHTML = `<span class="material-symbols-outlined">today</span> Today`;

    let divisor = document.createElement("div");
    divisor.classList.add("divisor");

    let buttonNewProject = document.createElement("button");
    buttonNewProject.classList.add("sider-button");
    buttonNewProject.innerHTML = `<span class="material-symbols-outlined">add</span> Add project`;

    divSider.appendChild(buttonInbox);
    divSider.appendChild(buttonToday);
    divSider.appendChild(divisor);
    divSider.appendChild(buttonNewProject);

    return divSider;
}