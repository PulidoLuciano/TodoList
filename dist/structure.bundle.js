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

    let h1Title = document.createElement("h1");
    h1Title.innerHTML = project.title;

    let divTasks = document.createElement("div");
    divTasks.setAttribute("id", "project-tasks");

    let buttonAddNewTask = document.createElement("button");
    buttonAddNewTask.setAttribute("id", "add-task-button");
    buttonAddNewTask.innerHTML = `<span class="material-symbols-outlined">add</span> Add Task`;

    divProjects.appendChild(h1Title);
    divProjects.appendChild(buttonAddNewTask);

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
    divSider.appendChild(buttonNewProject);
    
    return divSider;
}

function clickProjectHandler(e){
    _Presenters_projectsPresenter__WEBPACK_IMPORTED_MODULE_0__.ProjectsPresenter.ChangeActualProject(e.target.name);
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

    AddTask(task){
        this.tasks.push(task);
        console.log(this.tasks);
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
        AddTask("Hola");
    }
    
    const AddProject = (title) => {
        let p = new _Domain_project__WEBPACK_IMPORTED_MODULE_1__.Project(title);
        _repository.AddProject(p);
        DrawPage();
    }

    const AddTask = (title, description, dueDate) => {
        console.log(_repository.projectList[actualProject])
        _repository.projectList[actualProject].AddTask(new _Domain_task__WEBPACK_IMPORTED_MODULE_3__.Task(title, description, dueDate));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQm9FOztBQUVyRDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw0RUFBaUI7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzRCO0FBQ007O0FBRW5CO0FBQ2Y7O0FBRUE7O0FBRUEsbUJBQW1CLGtEQUFLO0FBQ3hCLHFCQUFxQixxREFBUTs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDbEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnlDO0FBQ0M7QUFDSTtBQUNWOztBQUVwQztBQUNBO0FBQ0EsNEJBQTRCLDBEQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvREFBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRCw4Q0FBSTtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkRBQVM7QUFDakI7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7O1VDckNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS9zaWRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00vc3RydWN0dXJlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RvbWFpbi9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RvbWFpbi9yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RvbWFpbi90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1ByZXNlbnRlcnMvcHJvamVjdHNQcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMocHJvamVjdCl7XG4gICAgbGV0IGRpdlByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1wiKTtcblxuICAgIGxldCBoMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxVGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC50aXRsZTtcblxuICAgIGxldCBkaXZUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRhc2tzXCIpO1xuXG4gICAgbGV0IGJ1dHRvbkFkZE5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkFkZE5ld1Rhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idXR0b25cIik7XG4gICAgYnV0dG9uQWRkTmV3VGFzay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWRkPC9zcGFuPiBBZGQgVGFza2A7XG5cbiAgICBkaXZQcm9qZWN0cy5hcHBlbmRDaGlsZChoMVRpdGxlKTtcbiAgICBkaXZQcm9qZWN0cy5hcHBlbmRDaGlsZChidXR0b25BZGROZXdUYXNrKTtcblxuICAgIHJldHVybiBkaXZQcm9qZWN0cztcbn1cblxuIiwiaW1wb3J0IHsgUHJvamVjdHNQcmVzZW50ZXIgfSBmcm9tIFwiLi4vUHJlc2VudGVycy9wcm9qZWN0c1ByZXNlbnRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlcihwcm9qZWN0cyl7XG4gICAgbGV0IGRpdlNpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZGl2U2lkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlclwiKTtcblxuICAgIGxldCBidXR0b25JbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uSW5ib3guY2xhc3NMaXN0LmFkZChcInNpZGVyLWJ1dHRvblwiKTtcbiAgICBidXR0b25JbmJveC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+aW5ib3g8L3NwYW4+IEluYm94YDtcbiAgICBidXR0b25JbmJveC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiMFwiKTtcbiAgICBidXR0b25JbmJveC5vbmNsaWNrID0gY2xpY2tQcm9qZWN0SGFuZGxlcjtcbiAgICBkaXZTaWRlci5hcHBlbmRDaGlsZChidXR0b25JbmJveCk7XG5cbiAgICBsZXQgYnV0dG9uVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvblRvZGF5LmNsYXNzTGlzdC5hZGQoXCJzaWRlci1idXR0b25cIik7XG4gICAgYnV0dG9uVG9kYXkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnRvZGF5PC9zcGFuPiBUb2RheWA7XG4gICAgYnV0dG9uVG9kYXkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIjFcIik7XG4gICAgYnV0dG9uVG9kYXkub25jbGljayA9IGNsaWNrUHJvamVjdEhhbmRsZXI7XG4gICAgZGl2U2lkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uVG9kYXkpO1xuXG4gICAgbGV0IGRpdmlzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdmlzb3IuY2xhc3NMaXN0LmFkZChcImRpdmlzb3JcIik7XG4gICAgZGl2U2lkZXIuYXBwZW5kQ2hpbGQoZGl2aXNvcik7XG5cbiAgICBsZXQgbGlzdCA9IHByb2plY3RzLnNsaWNlKDIpO1xuICAgIGxldCBuYW1lID0gMjtcbiAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBidXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZXItYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25Qcm9qZWN0LmlubmVySFRNTCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgIGJ1dHRvblByb2plY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcbiAgICAgICAgYnV0dG9uUHJvamVjdC5vbmNsaWNrID0gY2xpY2tQcm9qZWN0SGFuZGxlcjtcbiAgICAgICAgZGl2U2lkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uUHJvamVjdCk7XG4gICAgICAgIG5hbWUrKztcbiAgICB9KTtcblxuICAgIGxldCBidXR0b25OZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlci1idXR0b25cIik7XG4gICAgYnV0dG9uTmV3UHJvamVjdC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWRkPC9zcGFuPiBBZGQgcHJvamVjdGA7XG4gICAgZGl2U2lkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uTmV3UHJvamVjdCk7XG4gICAgXG4gICAgcmV0dXJuIGRpdlNpZGVyO1xufVxuXG5mdW5jdGlvbiBjbGlja1Byb2plY3RIYW5kbGVyKGUpe1xuICAgIFByb2plY3RzUHJlc2VudGVyLkNoYW5nZUFjdHVhbFByb2plY3QoZS50YXJnZXQubmFtZSk7XG59IiwiaW1wb3J0IHNpZGVyIGZyb20gXCIuL3NpZGVyXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RydWN0dXJlKGxpc3QsIGFjdHVhbCl7XG4gICAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBkaXZDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsZXQgZGl2U2lkZXIgPSBzaWRlcihsaXN0KTtcbiAgICBsZXQgZGl2UHJvamVjdCA9IHByb2plY3RzKGFjdHVhbCk7XG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdlNpZGVyKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdlByb2plY3QpO1xuXG4gICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG59IiwiZXhwb3J0IGNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IodGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQWRkVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcbiAgICB9XG59IiwiY2xhc3MgUmVwb3NpdG9yeXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3RMaXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBzZXQgcHJvamVjdExpc3QodmFsdWUpe1xuICAgICAgICB0aGlzLl9wcm9qZWN0TGlzdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIEFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBvc2l0b3J5OyIsImNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWUpe1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKXtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7VGFza30iLCJpbXBvcnQgc3RydWN0dXJlIGZyb20gXCIuLi9ET00vc3RydWN0dXJlXCI7XG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuLi9Eb21haW4vcHJvamVjdFwiO1xuaW1wb3J0IFJlcG9zaXRvcnkgZnJvbSBcIi4uL0RvbWFpbi9yZXBvc2l0b3J5XCI7XG5pbXBvcnQge1Rhc2t9IGZyb20gXCIuLi9Eb21haW4vdGFza1wiO1xuXG5jb25zdCBQcm9qZWN0c1ByZXNlbnRlciA9ICgoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgX3JlcG9zaXRvcnkgPSBuZXcgUmVwb3NpdG9yeSgpO1xuICAgIGxldCBhY3R1YWxQcm9qZWN0ID0gMDtcbiAgICBcbiAgICBjb25zdCBJbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBBZGRQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgICAgIEFkZFByb2plY3QoXCJUb2RheVwiKTtcbiAgICAgICAgQWRkVGFzayhcIkhvbGFcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IEFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIF9yZXBvc2l0b3J5LkFkZFByb2plY3QocCk7XG4gICAgICAgIERyYXdQYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgQWRkVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coX3JlcG9zaXRvcnkucHJvamVjdExpc3RbYWN0dWFsUHJvamVjdF0pXG4gICAgICAgIF9yZXBvc2l0b3J5LnByb2plY3RMaXN0W2FjdHVhbFByb2plY3RdLkFkZFRhc2sobmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgQ2hhbmdlQWN0dWFsUHJvamVjdCA9IChwb3MpID0+IHtcbiAgICAgICAgYWN0dWFsUHJvamVjdCA9IHBvcztcbiAgICAgICAgRHJhd1BhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBEcmF3UGFnZSA9ICgpID0+IHtcbiAgICAgICAgc3RydWN0dXJlKF9yZXBvc2l0b3J5LnByb2plY3RMaXN0LCBfcmVwb3NpdG9yeS5wcm9qZWN0TGlzdFthY3R1YWxQcm9qZWN0XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtJbml0aWFsaXplLCBBZGRQcm9qZWN0LCBDaGFuZ2VBY3R1YWxQcm9qZWN0LCBBZGRUYXNrfVxufSkoKTtcblxuZXhwb3J0IHtQcm9qZWN0c1ByZXNlbnRlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0RPTS9zdHJ1Y3R1cmUuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=