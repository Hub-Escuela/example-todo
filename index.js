console.log('init');    
import {store} from './store.js';
import {getForm, container, toDo} from './consts.js';
console.log(store);

function Todo (id, title, description, complete){
    this.id=id;
    this.title=title;
    this.description=description;
    this.complete=complete;
}
const toDoWhatYouWant=new Todo(1, 'hola', '', false);
console.log(toDo);

getForm.addEventListener(`submit`, (e)=>{
    e.preventDefault();
   const title = toDo.value;
   const description = "";
   const complete = false;
   const id = Math.floor(Math.random()*100);

   const newToDo = new Todo(id, title, description, complete);
   
   store.push(newToDo);
   console.log(store);

   container.insertAdjacentHTML('beforeend',`
    <div>
        <h6>${newToDo.title}</h6>
        <span>
            <button type="button" id="toDo-${newToDo.id}">
                Completar
            </button>
        </span>
    </div>
   `)

});

container.addEventListener("click", event=>{
    const toDoToComplete = event.target.parentNode.parentNode.childNodes[1];
    console.log(toDoToComplete)
    const titleTo= toDoToComplete.textContent
    toDoToComplete.innerHTML=`<strike>${titleTo}</strike>`;
    console.log(titleTo)
    

    
})

