const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');



btn.addEventListener('click', handleBtn);

function handleBtn() {

  const value = input.value.trim();

  if (value) {
    createTodo(value);
    input.value = '';
  } else {
    alert('the field is empty');
  }
}


function createTodo(text) {
  const li = document.createElement('li');
  li.innerHTML = text;
  li.addEventListener('click', removeTodo);
  list.append(li);
}

function removeTodo() {
  this.removeEventListener('click', removeTodo)
  this.remove();
}