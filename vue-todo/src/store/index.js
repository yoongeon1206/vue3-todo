//import { createStore } from "vuex";
//import { createApp } from 'vue' 
// import Vue from 'vue'
// import Vuex from 'vuex'

const storage_get = {
    fetch() {
        const arr = [];
        if( localStorage.length > 0) {
            // localstorage에 데이터가 있다면, 
            for (let i=0 ; i < localStorage.length ; i++) {
  
                if( localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    //this.todoItems.push(localStorage.key(i));    
                    //localStorage.getItem(localStorage.key(i));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    //console.log(typeof JSON.parse(ㅁlocalStorage.getItem(localStorage.key(i))));
                }
                //console.log(localStorage.key(i));
            }
        }
        return arr;
    },
};

const store = {
    state: {
        //headerText: 'Todo it from state'
        todoItems: storage_get.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            console.log("[mutations] addOneItem() has called....");
            // object를 문자열로 변환하여 브라우저 스토리지에 저장한다
            // localstorage key - this.newTodoItems : 텍스트 필드에 입력한 값 
            // localstrogage value - obj : completed 여부, 텍스트 필드에 입력한 값 
            
            const obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem,JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        //removeOneItem(state, todoItem, index) {
        removeOneItem(state, payload) {
            // payload.todoItem
            // payload.index

            //브라우저 저장소
            localStorage.removeItem(payload.todoItem.item);
            // 하나를 지우겠다. 
            state.todoItems.splice(payload.index,1);
        },
        toggleOneItem(state, payload) {
            //console.log(todoItem);
            //todoItem.completed = !todoItem.completed; 
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            // todoItems.completed를 업데이트 해주기 위해 삭제한후
            // 다시 localstorage에 추가 한다. 
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
            //localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
}

export default store

// export default createStore({
//   state: {
//     headerText: 'Todo it from state'
//   }
// });

