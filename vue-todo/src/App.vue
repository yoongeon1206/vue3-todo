<template>
<div id="app">
  <TodoHeader></TodoHeader>
  <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
  <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
  <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // 로컬 스토리지 데이터를 꺼내서 담을 데이터가 필요 
  data(){
      return {
          todoItems: []
      }
  },
  methods: {
    addOneItem(todoItem){
      const obj = {completed: false, item: todoItem};
      // object를 문자열로 변환하여 브라우저 스토리지에 저장한다
      // localstorage key - this.newTodoItems : 텍스트 필드에 입력한 값 
      // localstrogage value - obj : completed 여부, 텍스트 필드에 입력한 값 
      localStorage.setItem(todoItem,JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem,index) {
      //브라우저 저장소
      localStorage.removeItem(todoItem.item);
      // 하나를 지우겠다. 
      this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem,index) {
      //console.log(todoItem);
      //todoItem.completed = !todoItem.completed; 
      this.todoItems[index].completed = !this.todoItems[index].completed
      // todoItems.completed를 업데이트 해주기 위해 삭제한후
      // 다시 localstorage에 추가 한다. 
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
      //localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // vue 라이프 사이클 훅 8개중에 created 사용
  // TodoList 생성시 data(todoItems)에 localstorgage에 있는 값을 넣어준다
  created() {
      console.log('created');
      if( localStorage.length > 0) {
          // localstorage에 데이터가 있다면, 
          for (let i=0 ; i < localStorage.length ; i++) {

              if( localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                  //this.todoItems.push(localStorage.key(i));    
                  //localStorage.getItem(localStorage.key(i));
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                  console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                  //console.log(typeof JSON.parse(ㅁlocalStorage.getItem(localStorage.key(i))));
              }
              //console.log(localStorage.key(i));
          }
      }
  },
  components: {
    // 컴포넌트 명 : 컴포넌트 내용 
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
    // 'TodoHeader' : TodoHeader,
    // 'TodoInput' : TodoInput,
    // 'TodoList' : TodoList,
    // 'TodoFooter' : TodoFooter,
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
/* }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  margin-top: 60px;
} */
</style>
