class Repository{
    constructor(){
        this.projectList = [];
    }

    get projectList(){
        return this._projectList;
    }

    set projectList(value){
        this._projectList = value;
    }

    AddProject(project) {
        this.projectList.push(project);
    }
}

export default Repository;