const addOneItem = (state, todoItem) => {
    console.log("[mutations] addOneItem() has called....");
    // object를 문자열로 변환하여 브라우저 스토리지에 저장한다
    // localstorage key - this.newTodoItems : 텍스트 필드에 입력한 값 
    // localstrogage value - obj : completed 여부, 텍스트 필드에 입력한 값 
    
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem,JSON.stringify(obj));
    state.todoItems.push(obj);
}

//removeOneItem(state, todoItem, index) {
const removeOneItem = (state, payload) => {
    // payload.todoItem
    // payload.index

    //브라우저 저장소
    localStorage.removeItem(payload.todoItem.item);
    // 하나를 지우겠다. 
    state.todoItems.splice(payload.index,1);
}

const toggleOneItem = (state, payload) => {
    //console.log(todoItem);
    //todoItem.completed = !todoItem.completed; 
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    // todoItems.completed를 업데이트 해주기 위해 삭제한후
    // 다시 localstorage에 추가 한다. 
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
    //localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems}