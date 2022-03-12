var button = document.getElementById("addBtn");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function createLiElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delBtn);
	li.classList.add("txtTask");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delBtn.classList.add("delClass");
	delBtn.innerHTML='x';
}

function inputLength() {
	return input.value.length;
}

function adLiAfterClick() {
	if (inputLength() > 0) {
		createLiElement();
	}
}

function adLiAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createLiElement();
	}
}

function done(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}
function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function actionClick (element) {
	done(element);
	deleteListElement(element);
}

ul.addEventListener("click", actionClick)
button.addEventListener("click", adLiAfterClick);
input.addEventListener("keypress", adLiAfterKeypress);