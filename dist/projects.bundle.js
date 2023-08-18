/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/DOM/projects.js ***!
  \*****************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMocHJvamVjdCl7XG4gICAgbGV0IGRpdlByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1wiKTtcblxuICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1pbmZvXCIpO1xuICAgIGRpdlByb2plY3RzLmFwcGVuZENoaWxkKGRpdkluZm8pO1xuXG4gICAgbGV0IGgxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDFUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGRpdkluZm8uYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG4gICAgXG4gICAgbGV0IGRpdkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkJ1dHRvbnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWJ1dHRvbnNcIik7XG4gICAgZGl2SW5mby5hcHBlbmRDaGlsZChkaXZCdXR0b25zKTtcblxuICAgIGxldCBidXR0b25BZGROZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25BZGROZXdUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkFkZE5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkFkZE5ld1Rhc2suaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj4gQWRkIFRhc2tgO1xuICAgIGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkTmV3VGFzayk7XG5cbiAgICBpZihwcm9qZWN0LnRpdGxlICE9IFwiSW5ib3hcIiAmJiBwcm9qZWN0LnRpdGxlICE9IFwiVG9kYXlcIil7XG4gICAgICAgIGxldCBidXR0b25EZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uRGVsZXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uRGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIGJ1dHRvbkRlbGV0ZVByb2plY3QuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRlbGV0ZTwvc3Bhbj4gRGVsZXRlIHByb2plY3RgO1xuICAgICAgICBkaXZCdXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkRlbGV0ZVByb2plY3QpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgZGl2VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10YXNrc1wiKTtcbiAgICBkaXZQcm9qZWN0cy5hcHBlbmRDaGlsZChkaXZUYXNrcyk7XG5cbiAgICBsZXQgY291bnRUYXNrID0gMDtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRpdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICBkaXZUYXNrLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgY291bnRUYXNrKTtcblxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWluZm9cIik7XG4gICAgICAgIGRpdlRhc2suYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrXCIpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgY291bnRUYXNrKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lckhUTUwgPSBlbGVtZW50LmR1ZURhdGU7XG4gICAgICAgIGRpdlRhc2suYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgIGRpdlRhc2tzLmFwcGVuZENoaWxkKGRpdlRhc2spO1xuXG4gICAgICAgIGNvdW50VGFzaysrO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdlByb2plY3RzO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=