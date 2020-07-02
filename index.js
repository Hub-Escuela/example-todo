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
   `)
});

container.addEventListener("click", event=>{
    const toDoToCompleteTittle = event.target.parentNode.parentNode.childNodes[1];
    //console.log(toDoToComplete)
    const titleTo= toDoToCompleteTittle.textContent;
    const eventTargetItem=event.target;

    if(eventTargetItem.id.includes("toDoComplete")){
        toDoToCompleteTittle.innerHTML=`<strike>${titleTo}</strike>`;
            //console.log(titleTo);
    }
    
    if(eventTargetItem.id.includes("toDoDelete")){
        //console.log("click en eliminar");
        //Eliminar del DOM
        const itemToDelete=event.target.parentNode.parentNode;
        itemToDelete.remove();
        //console.log(itemToDelete);

        //Hacer push a Eliminados

    }
    //console.log(eventTargetItem.textContent);
})



