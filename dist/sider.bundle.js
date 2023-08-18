/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM/projects.js":
/*!*****************************!*\
  !*** ./src/DOM/projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });
function projects(project){
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



/***/ }),

/***/ "./src/DOM/sider.js":
/*!**************************!*\
  !*** ./src/DOM/sider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sider)
/* harmony export */ });
/* harmony import */ var _Presenters_projectsPresenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Presenters/projectsPresenter */ "./src/Presenters/projectsPresenter.js");


function sider(projects){
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
    _Presenters_projectsPresenter__WEBPACK_IMPORTED_MODULE_0__.ProjectsPresenter.ChangeActualProject(e.target.name);
}

function clickNewProjectHandler(e){
    let title = prompt("Enter the title for your new Project!");

    if(title != null && title != "" && title != "Inbox" && title != "Today"){
        _Presenters_projectsPresenter__WEBPACK_IMPORTED_MODULE_0__.ProjectsPresenter.AddProject(title);
    }
}

/***/ }),

/***/ "./src/DOM/structure.js":
/*!******************************!*\
  !*** ./src/DOM/structure.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ structure)
/* harmony export */ });
/* harmony import */ var _sider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sider */ "./src/DOM/sider.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/DOM/projects.js");



function structure(list, actual){
    let divContent = document.querySelector("#content");

    divContent.innerHTML = "";

    let divSider = (0,_sider__WEBPACK_IMPORTED_MODULE_0__["default"])(list);
    let divProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__["default"])(actual);

    divContent.appendChild(divSider);
    divContent.appendChild(divProject);

    return divContent;
}

/***/ }),

/***/ "./src/Domain/project.js":
/*!*******************************!*\
  !*** ./src/Domain/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project{
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

/***/ }),

/***/ "./src/Domain/repository.js":
/*!**********************************!*\
  !*** ./src/Domain/repository.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Repository);

/***/ }),

/***/ "./src/Domain/task.js":
/*!****************************!*\
  !*** ./src/Domain/task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task{
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get description(){
        return this._description;
    }

    set description(value){
        this._description = value;
    }

    get dueDate(){
        return this._dueDate;
    }

    set dueDate(value){
        this._dueDate = value;
    }
}



/***/ }),

/***/ "./src/Presenters/projectsPresenter.js":
/*!*********************************************!*\
  !*** ./src/Presenters/projectsPresenter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsPresenter: () => (/* binding */ ProjectsPresenter)
/* harmony export */ });
/* harmony import */ var _DOM_structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/structure */ "./src/DOM/structure.js");
/* harmony import */ var _Domain_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Domain/project */ "./src/Domain/project.js");
/* harmony import */ var _Domain_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Domain/repository */ "./src/Domain/repository.js");
/* harmony import */ var _Domain_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Domain/task */ "./src/Domain/task.js");





const ProjectsPresenter = (() => {
    
    const _repository = new _Domain_repository__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let actualProject = 0;
    
    const Initialize = () => {
        AddProject("Inbox");
        AddProject("Today");
        AddTask("Hola", "Como estás wacho todo bien?", "24/07/2023");
    }
    
    const AddProject = (title) => {
        let p = new _Domain_project__WEBPACK_IMPORTED_MODULE_1__.Project(title);
        _repository.AddProject(p);
        DrawPage();
    }

    const AddTask = (title, description, dueDate) => {
        _repository.projectList[actualProject].AddTask(new _Domain_task__WEBPACK_IMPORTED_MODULE_3__.Task(title, description, dueDate));
        DrawPage();
    }

    const ChangeActualProject = (pos) => {
        actualProject = pos;
        DrawPage();
    }

    const DrawPage = () => {
        ;(0,_DOM_structure__WEBPACK_IMPORTED_MODULE_0__["default"])(_repository.projectList, _repository.projectList[actualProject]);
    }

    return {Initialize, AddProject, ChangeActualProject, AddTask}
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/DOM/sider.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RW9FOztBQUVyRDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDRFQUFpQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0RUFBaUI7QUFDekI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZENEI7QUFDTTs7QUFFbkI7QUFDZjs7QUFFQTs7QUFFQSxtQkFBbUIsa0RBQUs7QUFDeEIscUJBQXFCLHFEQUFROztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNsQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCeUM7QUFDQztBQUNJO0FBQ1Y7O0FBRXBDO0FBQ0E7QUFDQSw0QkFBNEIsMERBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCw4Q0FBSTtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyREFBUztBQUNqQjs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7VUNyQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00vcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NL3NpZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS9zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRG9tYWluL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRG9tYWluL3JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRG9tYWluL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvUHJlc2VudGVycy9wcm9qZWN0c1ByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cyhwcm9qZWN0KXtcbiAgICBsZXQgZGl2UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBkaXZQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzXCIpO1xuXG4gICAgbGV0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWluZm9cIik7XG4gICAgZGl2UHJvamVjdHMuYXBwZW5kQ2hpbGQoZGl2SW5mbyk7XG5cbiAgICBsZXQgaDFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMVRpdGxlLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG4gICAgZGl2SW5mby5hcHBlbmRDaGlsZChoMVRpdGxlKTtcbiAgICBcbiAgICBsZXQgZGl2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2QnV0dG9ucy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtYnV0dG9uc1wiKTtcbiAgICBkaXZJbmZvLmFwcGVuZENoaWxkKGRpdkJ1dHRvbnMpO1xuXG4gICAgbGV0IGJ1dHRvbkFkZE5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkFkZE5ld1Rhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idXR0b25cIik7XG4gICAgYnV0dG9uQWRkTmV3VGFzay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gICAgYnV0dG9uQWRkTmV3VGFzay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWRkPC9zcGFuPiBBZGQgVGFza2A7XG4gICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25BZGROZXdUYXNrKTtcblxuICAgIGlmKHByb2plY3QudGl0bGUgIT0gXCJJbmJveFwiICYmIHByb2plY3QudGl0bGUgIT0gXCJUb2RheVwiKXtcbiAgICAgICAgbGV0IGJ1dHRvbkRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25EZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25EZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uRGVsZXRlUHJvamVjdC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVsZXRlPC9zcGFuPiBEZWxldGUgcHJvamVjdGA7XG4gICAgICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uRGVsZXRlUHJvamVjdCk7XG4gICAgfVxuICAgIFxuICAgIGxldCBkaXZUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRhc2tzXCIpO1xuICAgIGRpdlByb2plY3RzLmFwcGVuZENoaWxkKGRpdlRhc2tzKTtcblxuICAgIGxldCBjb3VudFRhc2sgPSAwO1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGl2VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdlRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIGRpdlRhc2suc2V0QXR0cmlidXRlKFwibmFtZVwiLCBjb3VudFRhc2spO1xuXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2staW5mb1wiKTtcbiAgICAgICAgZGl2VGFzay5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tcIik7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKFwibmFtZVwiLCBjb3VudFRhc2spO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza1RpdGxlLmlubmVySFRNTCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tEdWVEYXRlLmlubmVySFRNTCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgZGl2VGFzay5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgZGl2VGFza3MuYXBwZW5kQ2hpbGQoZGl2VGFzayk7XG5cbiAgICAgICAgY291bnRUYXNrKys7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2UHJvamVjdHM7XG59XG5cbiIsImltcG9ydCB7IFByb2plY3RzUHJlc2VudGVyIH0gZnJvbSBcIi4uL1ByZXNlbnRlcnMvcHJvamVjdHNQcmVzZW50ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZXIocHJvamVjdHMpe1xuICAgIGxldCBkaXZTaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGRpdlNpZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZXJcIik7XG5cbiAgICBsZXQgYnV0dG9uSW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkluYm94LmNsYXNzTGlzdC5hZGQoXCJzaWRlci1idXR0b25cIik7XG4gICAgYnV0dG9uSW5ib3guaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmluYm94PC9zcGFuPiBJbmJveGA7XG4gICAgYnV0dG9uSW5ib3guc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIjBcIik7XG4gICAgYnV0dG9uSW5ib3gub25jbGljayA9IGNsaWNrUHJvamVjdEhhbmRsZXI7XG4gICAgZGl2U2lkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uSW5ib3gpO1xuXG4gICAgbGV0IGJ1dHRvblRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25Ub2RheS5jbGFzc0xpc3QuYWRkKFwic2lkZXItYnV0dG9uXCIpO1xuICAgIGJ1dHRvblRvZGF5LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj50b2RheTwvc3Bhbj4gVG9kYXlgO1xuICAgIGJ1dHRvblRvZGF5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCIxXCIpO1xuICAgIGJ1dHRvblRvZGF5Lm9uY2xpY2sgPSBjbGlja1Byb2plY3RIYW5kbGVyO1xuICAgIGRpdlNpZGVyLmFwcGVuZENoaWxkKGJ1dHRvblRvZGF5KTtcblxuICAgIGxldCBkaXZpc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZpc29yLmNsYXNzTGlzdC5hZGQoXCJkaXZpc29yXCIpO1xuICAgIGRpdlNpZGVyLmFwcGVuZENoaWxkKGRpdmlzb3IpO1xuXG4gICAgbGV0IGxpc3QgPSBwcm9qZWN0cy5zbGljZSgyKTtcbiAgICBsZXQgbmFtZSA9IDI7XG4gICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgYnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvblByb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGVyLWJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uUHJvamVjdC5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuICAgICAgICBidXR0b25Qcm9qZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XG4gICAgICAgIGJ1dHRvblByb2plY3Qub25jbGljayA9IGNsaWNrUHJvamVjdEhhbmRsZXI7XG4gICAgICAgIGRpdlNpZGVyLmFwcGVuZENoaWxkKGJ1dHRvblByb2plY3QpO1xuICAgICAgICBuYW1lKys7XG4gICAgfSk7XG5cbiAgICBsZXQgYnV0dG9uTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZXItYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5ld1Byb2plY3QuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj4gQWRkIHByb2plY3RgO1xuICAgIGJ1dHRvbk5ld1Byb2plY3Qub25jbGljayA9IGNsaWNrTmV3UHJvamVjdEhhbmRsZXI7XG4gICAgZGl2U2lkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uTmV3UHJvamVjdCk7XG4gICAgXG4gICAgcmV0dXJuIGRpdlNpZGVyO1xufVxuXG5mdW5jdGlvbiBjbGlja1Byb2plY3RIYW5kbGVyKGUpe1xuICAgIFByb2plY3RzUHJlc2VudGVyLkNoYW5nZUFjdHVhbFByb2plY3QoZS50YXJnZXQubmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrTmV3UHJvamVjdEhhbmRsZXIoZSl7XG4gICAgbGV0IHRpdGxlID0gcHJvbXB0KFwiRW50ZXIgdGhlIHRpdGxlIGZvciB5b3VyIG5ldyBQcm9qZWN0IVwiKTtcblxuICAgIGlmKHRpdGxlICE9IG51bGwgJiYgdGl0bGUgIT0gXCJcIiAmJiB0aXRsZSAhPSBcIkluYm94XCIgJiYgdGl0bGUgIT0gXCJUb2RheVwiKXtcbiAgICAgICAgUHJvamVjdHNQcmVzZW50ZXIuQWRkUHJvamVjdCh0aXRsZSk7XG4gICAgfVxufSIsImltcG9ydCBzaWRlciBmcm9tIFwiLi9zaWRlclwiO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cnVjdHVyZShsaXN0LCBhY3R1YWwpe1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgZGl2Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbGV0IGRpdlNpZGVyID0gc2lkZXIobGlzdCk7XG4gICAgbGV0IGRpdlByb2plY3QgPSBwcm9qZWN0cyhhY3R1YWwpO1xuXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZTaWRlcik7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZQcm9qZWN0KTtcblxuICAgIHJldHVybiBkaXZDb250ZW50O1xufSIsImV4cG9ydCBjbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWUpe1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB0YXNrcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza3M7XG4gICAgfVxuXG4gICAgc2V0IHRhc2tzKHZhbHVlKXtcbiAgICAgICAgdGhpcy5fdGFza3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBBZGRUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxufSIsImNsYXNzIFJlcG9zaXRvcnl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0TGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdExpc3Q7XG4gICAgfVxuXG4gICAgc2V0IHByb2plY3RMaXN0KHZhbHVlKXtcbiAgICAgICAgdGhpcy5fcHJvamVjdExpc3QgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBBZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwb3NpdG9yeTsiLCJjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKXtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSl7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUodmFsdWUpe1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQge1Rhc2t9IiwiaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vRE9NL3N0cnVjdHVyZVwiO1xuaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi4vRG9tYWluL3Byb2plY3RcIjtcbmltcG9ydCBSZXBvc2l0b3J5IGZyb20gXCIuLi9Eb21haW4vcmVwb3NpdG9yeVwiO1xuaW1wb3J0IHtUYXNrfSBmcm9tIFwiLi4vRG9tYWluL3Rhc2tcIjtcblxuY29uc3QgUHJvamVjdHNQcmVzZW50ZXIgPSAoKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IF9yZXBvc2l0b3J5ID0gbmV3IFJlcG9zaXRvcnkoKTtcbiAgICBsZXQgYWN0dWFsUHJvamVjdCA9IDA7XG4gICAgXG4gICAgY29uc3QgSW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgQWRkUHJvamVjdChcIkluYm94XCIpO1xuICAgICAgICBBZGRQcm9qZWN0KFwiVG9kYXlcIik7XG4gICAgICAgIEFkZFRhc2soXCJIb2xhXCIsIFwiQ29tbyBlc3TDoXMgd2FjaG8gdG9kbyBiaWVuP1wiLCBcIjI0LzA3LzIwMjNcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IEFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIF9yZXBvc2l0b3J5LkFkZFByb2plY3QocCk7XG4gICAgICAgIERyYXdQYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgQWRkVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpID0+IHtcbiAgICAgICAgX3JlcG9zaXRvcnkucHJvamVjdExpc3RbYWN0dWFsUHJvamVjdF0uQWRkVGFzayhuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpKTtcbiAgICAgICAgRHJhd1BhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBDaGFuZ2VBY3R1YWxQcm9qZWN0ID0gKHBvcykgPT4ge1xuICAgICAgICBhY3R1YWxQcm9qZWN0ID0gcG9zO1xuICAgICAgICBEcmF3UGFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IERyYXdQYWdlID0gKCkgPT4ge1xuICAgICAgICBzdHJ1Y3R1cmUoX3JlcG9zaXRvcnkucHJvamVjdExpc3QsIF9yZXBvc2l0b3J5LnByb2plY3RMaXN0W2FjdHVhbFByb2plY3RdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge0luaXRpYWxpemUsIEFkZFByb2plY3QsIENoYW5nZUFjdHVhbFByb2plY3QsIEFkZFRhc2t9XG59KSgpO1xuXG5leHBvcnQge1Byb2plY3RzUHJlc2VudGVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvRE9NL3NpZGVyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9