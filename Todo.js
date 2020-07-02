function Todo(id, title, description, complete) {
	this.id = id;
	this.title = title;
	this.description = description;
	this.complete = complete;
}

// Añadir método que ponga en mayúsculas el título
Todo.prototype.setUppercase = function () {
	this.title = this.title.toUpperCase();
	return;
};

export { Todo };
