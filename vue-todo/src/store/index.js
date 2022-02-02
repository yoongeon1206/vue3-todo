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
    }
}

export default store

// export default createStore({
//   state: {
//     headerText: 'Todo it from state'
//   }
// });

