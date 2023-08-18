export class Project{
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get tasks(){
        return this._tasks;
    }

    set tasks(value){
        this._tasks = value;
    }

    AddTask(task){
        this.tasks.push(task);
    }
}