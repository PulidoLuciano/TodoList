import structure from "../DOM/structure";
import {Project} from "../Domain/project";
import Repository from "../Domain/repository";
import {Task} from "../Domain/task";

const ProjectsPresenter = (() => {
    
    const _repository = new Repository();
    let actualProject = 0;
    
    const Initialize = () => {
        AddProject("Inbox");
        AddProject("Today");
        AddTask("Hola", "Como estás wacho todo bien?", "24/07/2023");
    }
    
    const AddProject = (title) => {
        let p = new Project(title);
        _repository.AddProject(p);
        DrawPage();
    }

    const AddTask = (title, description, dueDate) => {
        _repository.projectList[actualProject].AddTask(new Task(title, description, dueDate));
        DrawPage();
    }

    const ChangeActualProject = (pos) => {
        actualProject = pos;
        DrawPage();
    }

    const DrawPage = () => {
        structure(_repository.projectList, _repository.projectList[actualProject]);
    }

    return {Initialize, AddProject, ChangeActualProject, AddTask}
})();

export {ProjectsPresenter}