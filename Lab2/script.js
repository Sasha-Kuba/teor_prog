const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const btn = document.getElementById('btn')

var all = 0;
var fin = 0;

// var close = document.getElementsByClassName(classNames.TODO_DELETE);

// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle(classNames.TODO_CHECKBOX);
//   }
// }, false);

btn.addEventListener('click', function(ev) {
  var inputValue = document.getElementById("inputs").value;
  if (inputValue === '') { alert('Input data') }
  else newTodo(inputValue)
  //inputValue.value = ''
});


function newTodo(inputValue) {
  all += 1;
  fin += 1;
  itemCountSpan.textContent = all;
  uncheckedCountSpan.textContent = fin;
  var li = document.createElement("li");
  // var inputValue = document.getElementById("inputs").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("todo-list").appendChild(li);
  //document.getElementById("inputs").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = classNames.TODO_DELETE;
  span.appendChild(txt);
  li.appendChild(span);

  // var check = document.querySelector(classNames.TODO_CHECKBOX)
  // txt = document.createTextNode()
  // li.appendChild(txt);
  span.addEventListener('click', function(ev) {
    all -= 1;
    fin -= 1;
    itemCountSpan.textContent = all;
    uncheckedCountSpan.textContent = fin;
    list.removeChild(li)
    //console.log('ddfas');
  })

  li.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle(classNames.TODO_CHECKBOX);
    }
    if(ev.target.classList.contains(classNames.TODO_CHECKBOX) == true){
      fin -= 1;
      uncheckedCountSpan.textContent = fin;
    }
    else {
      fin += 1;
      uncheckedCountSpan.textContent = fin;
    }
    //console.log(li.contains(classNames.TODO_CHECKBOX));
  }, false);
  //list.appendChild(li)
}

