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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/DOM/structure.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVvRTs7QUFFckQ7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw0RUFBaUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNEVBQWlCO0FBQ3pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RDRCO0FBQ007O0FBRW5CO0FBQ2Y7O0FBRUE7O0FBRUEsbUJBQW1CLGtEQUFLO0FBQ3hCLHFCQUFxQixxREFBUTs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDbEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnlDO0FBQ0M7QUFDSTtBQUNWOztBQUVwQztBQUNBO0FBQ0EsNEJBQTRCLDBEQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvREFBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyREFBMkQsOENBQUk7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkRBQVM7QUFDakI7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7O1VDckNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS9zaWRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00vc3RydWN0dXJlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RvbWFpbi9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RvbWFpbi9yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RvbWFpbi90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1ByZXNlbnRlcnMvcHJvamVjdHNQcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMocHJvamVjdCl7XG4gICAgbGV0IGRpdlByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1wiKTtcblxuICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1pbmZvXCIpO1xuICAgIGRpdlByb2plY3RzLmFwcGVuZENoaWxkKGRpdkluZm8pO1xuXG4gICAgbGV0IGgxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDFUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGRpdkluZm8uYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG4gICAgXG4gICAgbGV0IGRpdkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkJ1dHRvbnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWJ1dHRvbnNcIik7XG4gICAgZGl2SW5mby5hcHBlbmRDaGlsZChkaXZCdXR0b25zKTtcblxuICAgIGxldCBidXR0b25BZGROZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25BZGROZXdUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkFkZE5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkFkZE5ld1Rhc2suaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj4gQWRkIFRhc2tgO1xuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkTmV3VGFzayk7XG5cbiAgICBpZihwcm9qZWN0LnRpdGxlICE9IFwiSW5ib3hcIiAmJiBwcm9qZWN0LnRpdGxlICE9IFwiVG9kYXlcIil7XG4gICAgICAgIGxldCBidXR0b25EZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uRGVsZXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uRGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIGJ1dHRvbkRlbGV0ZVByb2plY3QuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRlbGV0ZTwvc3Bhbj4gRGVsZXRlIHByb2plY3RgO1xuICAgICAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkRlbGV0ZVByb2plY3QpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgZGl2VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10YXNrc1wiKTtcbiAgICBkaXZQcm9qZWN0cy5hcHBlbmRDaGlsZChkaXZUYXNrcyk7XG5cbiAgICBsZXQgY291bnRUYXNrID0gMDtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRpdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICBkaXZUYXNrLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgY291bnRUYXNrKTtcblxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWluZm9cIik7XG4gICAgICAgIGRpdlRhc2suYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrXCIpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgY291bnRUYXNrKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lckhUTUwgPSBlbGVtZW50LmR1ZURhdGU7XG4gICAgICAgIGRpdlRhc2suYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgIGRpdlRhc2tzLmFwcGVuZENoaWxkKGRpdlRhc2spO1xuXG4gICAgICAgIGNvdW50VGFzaysrO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdlByb2plY3RzO1xufVxuXG4iLCJpbXBvcnQgeyBQcm9qZWN0c1ByZXNlbnRlciB9IGZyb20gXCIuLi9QcmVzZW50ZXJzL3Byb2plY3RzUHJlc2VudGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGVyKHByb2plY3RzKXtcbiAgICBsZXQgZGl2U2lkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBkaXZTaWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGVyXCIpO1xuXG4gICAgbGV0IGJ1dHRvbkluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25JbmJveC5jbGFzc0xpc3QuYWRkKFwic2lkZXItYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkluYm94LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hgO1xuICAgIGJ1dHRvbkluYm94LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCIwXCIpO1xuICAgIGJ1dHRvbkluYm94Lm9uY2xpY2sgPSBjbGlja1Byb2plY3RIYW5kbGVyO1xuICAgIGRpdlNpZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkluYm94KTtcblxuICAgIGxldCBidXR0b25Ub2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uVG9kYXkuY2xhc3NMaXN0LmFkZChcInNpZGVyLWJ1dHRvblwiKTtcbiAgICBidXR0b25Ub2RheS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+dG9kYXk8L3NwYW4+IFRvZGF5YDtcbiAgICBidXR0b25Ub2RheS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiMVwiKTtcbiAgICBidXR0b25Ub2RheS5vbmNsaWNrID0gY2xpY2tQcm9qZWN0SGFuZGxlcjtcbiAgICBkaXZTaWRlci5hcHBlbmRDaGlsZChidXR0b25Ub2RheSk7XG5cbiAgICBsZXQgZGl2aXNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2aXNvci5jbGFzc0xpc3QuYWRkKFwiZGl2aXNvclwiKTtcbiAgICBkaXZTaWRlci5hcHBlbmRDaGlsZChkaXZpc29yKTtcblxuICAgIGxldCBsaXN0ID0gcHJvamVjdHMuc2xpY2UoMik7XG4gICAgbGV0IG5hbWUgPSAyO1xuICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlci1idXR0b25cIik7XG4gICAgICAgIGJ1dHRvblByb2plY3QuaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZTtcbiAgICAgICAgYnV0dG9uUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuICAgICAgICBidXR0b25Qcm9qZWN0Lm9uY2xpY2sgPSBjbGlja1Byb2plY3RIYW5kbGVyO1xuICAgICAgICBkaXZTaWRlci5hcHBlbmRDaGlsZChidXR0b25Qcm9qZWN0KTtcbiAgICAgICAgbmFtZSsrO1xuICAgIH0pO1xuXG4gICAgbGV0IGJ1dHRvbk5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGVyLWJ1dHRvblwiKTtcbiAgICBidXR0b25OZXdQcm9qZWN0LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5hZGQ8L3NwYW4+IEFkZCBwcm9qZWN0YDtcbiAgICBidXR0b25OZXdQcm9qZWN0Lm9uY2xpY2sgPSBjbGlja05ld1Byb2plY3RIYW5kbGVyO1xuICAgIGRpdlNpZGVyLmFwcGVuZENoaWxkKGJ1dHRvbk5ld1Byb2plY3QpO1xuICAgIFxuICAgIHJldHVybiBkaXZTaWRlcjtcbn1cblxuZnVuY3Rpb24gY2xpY2tQcm9qZWN0SGFuZGxlcihlKXtcbiAgICBQcm9qZWN0c1ByZXNlbnRlci5DaGFuZ2VBY3R1YWxQcm9qZWN0KGUudGFyZ2V0Lm5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGlja05ld1Byb2plY3RIYW5kbGVyKGUpe1xuICAgIGxldCB0aXRsZSA9IHByb21wdChcIkVudGVyIHRoZSB0aXRsZSBmb3IgeW91ciBuZXcgUHJvamVjdCFcIik7XG5cbiAgICBpZih0aXRsZSAhPSBudWxsICYmIHRpdGxlICE9IFwiXCIgJiYgdGl0bGUgIT0gXCJJbmJveFwiICYmIHRpdGxlICE9IFwiVG9kYXlcIil7XG4gICAgICAgIFByb2plY3RzUHJlc2VudGVyLkFkZFByb2plY3QodGl0bGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgc2lkZXIgZnJvbSBcIi4vc2lkZXJcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJ1Y3R1cmUobGlzdCwgYWN0dWFsKXtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGRpdkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxldCBkaXZTaWRlciA9IHNpZGVyKGxpc3QpO1xuICAgIGxldCBkaXZQcm9qZWN0ID0gcHJvamVjdHMoYWN0dWFsKTtcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2U2lkZXIpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2UHJvamVjdCk7XG5cbiAgICByZXR1cm4gZGl2Q29udGVudDtcbn0iLCJleHBvcnQgY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKXtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdGFza3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tzO1xuICAgIH1cblxuICAgIHNldCB0YXNrcyh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX3Rhc2tzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQWRkVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbn0iLCJjbGFzcyBSZXBvc2l0b3J5e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdExpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RMaXN0O1xuICAgIH1cblxuICAgIHNldCBwcm9qZWN0TGlzdCh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX3Byb2plY3RMaXN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9zaXRvcnk7IiwiY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpe1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldCBkdWVEYXRlKHZhbHVlKXtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtUYXNrfSIsImltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL0RPTS9zdHJ1Y3R1cmVcIjtcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4uL0RvbWFpbi9wcm9qZWN0XCI7XG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tIFwiLi4vRG9tYWluL3JlcG9zaXRvcnlcIjtcbmltcG9ydCB7VGFza30gZnJvbSBcIi4uL0RvbWFpbi90YXNrXCI7XG5cbmNvbnN0IFByb2plY3RzUHJlc2VudGVyID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBfcmVwb3NpdG9yeSA9IG5ldyBSZXBvc2l0b3J5KCk7XG4gICAgbGV0IGFjdHVhbFByb2plY3QgPSAwO1xuICAgIFxuICAgIGNvbnN0IEluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIEFkZFByb2plY3QoXCJJbmJveFwiKTtcbiAgICAgICAgQWRkUHJvamVjdChcIlRvZGF5XCIpO1xuICAgICAgICBBZGRUYXNrKFwiSG9sYVwiLCBcIkNvbW8gZXN0w6FzIHdhY2hvIHRvZG8gYmllbj9cIiwgXCIyNC8wNy8yMDIzXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBBZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGxldCBwID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgICAgICBfcmVwb3NpdG9yeS5BZGRQcm9qZWN0KHApO1xuICAgICAgICBEcmF3UGFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IEFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSA9PiB7XG4gICAgICAgIF9yZXBvc2l0b3J5LnByb2plY3RMaXN0W2FjdHVhbFByb2plY3RdLkFkZFRhc2sobmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSk7XG4gICAgICAgIERyYXdQYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgQ2hhbmdlQWN0dWFsUHJvamVjdCA9IChwb3MpID0+IHtcbiAgICAgICAgYWN0dWFsUHJvamVjdCA9IHBvcztcbiAgICAgICAgRHJhd1BhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBEcmF3UGFnZSA9ICgpID0+IHtcbiAgICAgICAgc3RydWN0dXJlKF9yZXBvc2l0b3J5LnByb2plY3RMaXN0LCBfcmVwb3NpdG9yeS5wcm9qZWN0TGlzdFthY3R1YWxQcm9qZWN0XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtJbml0aWFsaXplLCBBZGRQcm9qZWN0LCBDaGFuZ2VBY3R1YWxQcm9qZWN0LCBBZGRUYXNrfVxufSkoKTtcblxuZXhwb3J0IHtQcm9qZWN0c1ByZXNlbnRlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0RPTS9zdHJ1Y3R1cmUuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=