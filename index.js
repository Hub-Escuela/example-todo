console.log("init");
import { store } from "./store.js";
import { getForm, container, toDo, containerDeleted } from "./consts.js";
import { Todo } from "./Todo.js";
console.log(store);

getForm.addEventListener(`submit`, (e) => {
	e.preventDefault();
	const title = toDo.value;
	const description = "";
	const complete = false;
	const id = Math.floor(Math.random() * 100);

	const newToDo = new Todo(id, title, description, complete);

	newToDo.setUppercase();

	store.push(newToDo);
	console.log(store);

	container.insertAdjacentHTML(
		"beforeend",
		`
    <div>
        <h6>${newToDo.title}</h6>
        <span>
            <button type="button" id="toDoComplete-${newToDo.id}">
                Completar
            </button>
        </span>
        <span>
            <button type="button" id="toDoDelete-${newToDo.id}">
                Eliminar
            </button>
        </span>
    </div>
   `
	);
});

container.addEventListener("click", (event) => {
	const toDoToCompleteTittle = event.target.parentNode.parentNode.childNodes[1];
	//console.log(toDoToComplete)
	const titleTo = toDoToCompleteTittle.textContent;
	const eventTargetItem = event.target;
	const eventTargetId = event.target.id;
	const splitArray = eventTargetId.split("-");
	const elementId = parseInt(splitArray[1]);
	const element = store.find((value) => value.id === elementId);
	console.log(element);

	if (eventTargetItem.id.includes("toDoComplete")) {
		toDoToCompleteTittle.innerHTML = `<strike>${titleTo}</strike>`;
		element.complete = true;
		// console.log(titleTo);
		// console.log(toDoToCompleteTittle);
	}

	if (eventTargetItem.id.includes("toDoDelete")) {
		//console.log("click en eliminar");
		//Eliminar del DOM
		const itemToDelete = event.target.parentNode.parentNode;
		itemToDelete.remove();
		console.log(itemToDelete);
		const textItemDeleted = itemToDelete.childNodes[1].textContent;
		console.log(textItemDeleted);
		containerDeleted.insertAdjacentHTML(
			"beforeend",
			`<h6>${textItemDeleted}</h6>`
		);
		//Hacer push a Eliminados
	}
	//console.log(eventTargetItem.textContent);
});
