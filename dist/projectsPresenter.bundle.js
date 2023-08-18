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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Presenters/projectsPresenter.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHNQcmVzZW50ZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCb0U7O0FBRXJEO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDRFQUFpQjtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7OztBQzlDNEI7QUFDTTs7QUFFbkI7QUFDZjs7QUFFQTs7QUFFQSxtQkFBbUIsa0RBQUs7QUFDeEIscUJBQXFCLHFEQUFROztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNsQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCeUM7QUFDQztBQUNJO0FBQ1Y7O0FBRXBDO0FBQ0E7QUFDQSw0QkFBNEIsMERBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELDhDQUFJO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyREFBUztBQUNqQjs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7VUNyQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00vcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NL3NpZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS9zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRG9tYWluL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRG9tYWluL3JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRG9tYWluL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvUHJlc2VudGVycy9wcm9qZWN0c1ByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cyhwcm9qZWN0KXtcbiAgICBsZXQgZGl2UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBkaXZQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzXCIpO1xuXG4gICAgbGV0IGgxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDFUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgbGV0IGRpdlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUYXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtdGFza3NcIik7XG5cbiAgICBsZXQgYnV0dG9uQWRkTmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uQWRkTmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBidXR0b25BZGROZXdUYXNrLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5hZGQ8L3NwYW4+IEFkZCBUYXNrYDtcblxuICAgIGRpdlByb2plY3RzLmFwcGVuZENoaWxkKGgxVGl0bGUpO1xuICAgIGRpdlByb2plY3RzLmFwcGVuZENoaWxkKGJ1dHRvbkFkZE5ld1Rhc2spO1xuXG4gICAgcmV0dXJuIGRpdlByb2plY3RzO1xufVxuXG4iLCJpbXBvcnQgeyBQcm9qZWN0c1ByZXNlbnRlciB9IGZyb20gXCIuLi9QcmVzZW50ZXJzL3Byb2plY3RzUHJlc2VudGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGVyKHByb2plY3RzKXtcbiAgICBsZXQgZGl2U2lkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBkaXZTaWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGVyXCIpO1xuXG4gICAgbGV0IGJ1dHRvbkluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25JbmJveC5jbGFzc0xpc3QuYWRkKFwic2lkZXItYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkluYm94LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hgO1xuICAgIGJ1dHRvbkluYm94LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCIwXCIpO1xuICAgIGJ1dHRvbkluYm94Lm9uY2xpY2sgPSBjbGlja1Byb2plY3RIYW5kbGVyO1xuICAgIGRpdlNpZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkluYm94KTtcblxuICAgIGxldCBidXR0b25Ub2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uVG9kYXkuY2xhc3NMaXN0LmFkZChcInNpZGVyLWJ1dHRvblwiKTtcbiAgICBidXR0b25Ub2RheS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+dG9kYXk8L3NwYW4+IFRvZGF5YDtcbiAgICBidXR0b25Ub2RheS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiMVwiKTtcbiAgICBidXR0b25Ub2RheS5vbmNsaWNrID0gY2xpY2tQcm9qZWN0SGFuZGxlcjtcbiAgICBkaXZTaWRlci5hcHBlbmRDaGlsZChidXR0b25Ub2RheSk7XG5cbiAgICBsZXQgZGl2aXNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2aXNvci5jbGFzc0xpc3QuYWRkKFwiZGl2aXNvclwiKTtcbiAgICBkaXZTaWRlci5hcHBlbmRDaGlsZChkaXZpc29yKTtcblxuICAgIGxldCBsaXN0ID0gcHJvamVjdHMuc2xpY2UoMik7XG4gICAgbGV0IG5hbWUgPSAyO1xuICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlci1idXR0b25cIik7XG4gICAgICAgIGJ1dHRvblByb2plY3QuaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZTtcbiAgICAgICAgYnV0dG9uUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuICAgICAgICBidXR0b25Qcm9qZWN0Lm9uY2xpY2sgPSBjbGlja1Byb2plY3RIYW5kbGVyO1xuICAgICAgICBkaXZTaWRlci5hcHBlbmRDaGlsZChidXR0b25Qcm9qZWN0KTtcbiAgICAgICAgbmFtZSsrO1xuICAgIH0pO1xuXG4gICAgbGV0IGJ1dHRvbk5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGVyLWJ1dHRvblwiKTtcbiAgICBidXR0b25OZXdQcm9qZWN0LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5hZGQ8L3NwYW4+IEFkZCBwcm9qZWN0YDtcbiAgICBkaXZTaWRlci5hcHBlbmRDaGlsZChidXR0b25OZXdQcm9qZWN0KTtcbiAgICBcbiAgICByZXR1cm4gZGl2U2lkZXI7XG59XG5cbmZ1bmN0aW9uIGNsaWNrUHJvamVjdEhhbmRsZXIoZSl7XG4gICAgUHJvamVjdHNQcmVzZW50ZXIuQ2hhbmdlQWN0dWFsUHJvamVjdChlLnRhcmdldC5uYW1lKTtcbn0iLCJpbXBvcnQgc2lkZXIgZnJvbSBcIi4vc2lkZXJcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJ1Y3R1cmUobGlzdCwgYWN0dWFsKXtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGRpdkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxldCBkaXZTaWRlciA9IHNpZGVyKGxpc3QpO1xuICAgIGxldCBkaXZQcm9qZWN0ID0gcHJvamVjdHMoYWN0dWFsKTtcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2U2lkZXIpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2UHJvamVjdCk7XG5cbiAgICByZXR1cm4gZGl2Q29udGVudDtcbn0iLCJleHBvcnQgY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKXtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBBZGRUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza3MpO1xuICAgIH1cbn0iLCJjbGFzcyBSZXBvc2l0b3J5e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdExpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RMaXN0O1xuICAgIH1cblxuICAgIHNldCBwcm9qZWN0TGlzdCh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX3Byb2plY3RMaXN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9zaXRvcnk7IiwiY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpe1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldCBkdWVEYXRlKHZhbHVlKXtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtUYXNrfSIsImltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL0RPTS9zdHJ1Y3R1cmVcIjtcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4uL0RvbWFpbi9wcm9qZWN0XCI7XG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tIFwiLi4vRG9tYWluL3JlcG9zaXRvcnlcIjtcbmltcG9ydCB7VGFza30gZnJvbSBcIi4uL0RvbWFpbi90YXNrXCI7XG5cbmNvbnN0IFByb2plY3RzUHJlc2VudGVyID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBfcmVwb3NpdG9yeSA9IG5ldyBSZXBvc2l0b3J5KCk7XG4gICAgbGV0IGFjdHVhbFByb2plY3QgPSAwO1xuICAgIFxuICAgIGNvbnN0IEluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIEFkZFByb2plY3QoXCJJbmJveFwiKTtcbiAgICAgICAgQWRkUHJvamVjdChcIlRvZGF5XCIpO1xuICAgICAgICBBZGRUYXNrKFwiSG9sYVwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgQWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBsZXQgcCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgX3JlcG9zaXRvcnkuQWRkUHJvamVjdChwKTtcbiAgICAgICAgRHJhd1BhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBBZGRUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhfcmVwb3NpdG9yeS5wcm9qZWN0TGlzdFthY3R1YWxQcm9qZWN0XSlcbiAgICAgICAgX3JlcG9zaXRvcnkucHJvamVjdExpc3RbYWN0dWFsUHJvamVjdF0uQWRkVGFzayhuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpKTtcbiAgICB9XG5cbiAgICBjb25zdCBDaGFuZ2VBY3R1YWxQcm9qZWN0ID0gKHBvcykgPT4ge1xuICAgICAgICBhY3R1YWxQcm9qZWN0ID0gcG9zO1xuICAgICAgICBEcmF3UGFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IERyYXdQYWdlID0gKCkgPT4ge1xuICAgICAgICBzdHJ1Y3R1cmUoX3JlcG9zaXRvcnkucHJvamVjdExpc3QsIF9yZXBvc2l0b3J5LnByb2plY3RMaXN0W2FjdHVhbFByb2plY3RdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge0luaXRpYWxpemUsIEFkZFByb2plY3QsIENoYW5nZUFjdHVhbFByb2plY3QsIEFkZFRhc2t9XG59KSgpO1xuXG5leHBvcnQge1Byb2plY3RzUHJlc2VudGVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvUHJlc2VudGVycy9wcm9qZWN0c1ByZXNlbnRlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==