<template>
  <div>
      <transition-group name="list" tag="ul">
      <!-- <ul> -->
          <li v-for="(todoItem, index) in this.storedtodoItems" v-bind:key="todoItem.item" class="shadow">
              <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
              v-on:click="toggleComplete({todoItem,index})"></i>
              <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
              <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">
                  <i class="fas fa-trash-alt"></i>
              </span>
          </li>
      <!-- </ul> -->
      </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    // props: ['propsdata'],
    // 로컬 스토리지 데이터를 꺼내서 담을 데이터가 필요 
    // data: function(){
    //     return {
    //         todoItems: []
    //     }
    // },
    computed: {
      // todoItems(){
      //   return this.$store.getters.storedtodoItems;
      // }
      ...mapGetters(['storedtodoItems'])
    },
    methods: {
        ...mapMutations({
          removeTodo: 'removeOneItem',
          toggleComplete: 'toggleOneItem'
        })
        // removeTodo(todoItem,index){
        //     console.log(todoItem, index);
        //     // 상위 컴포넌트에 정의된 removeItem 이벤트 ->removeOneItem()을 호출 
        //     //this.$emit('removeItem',todoItem,index);

        //     // mutation에 넘길때 아래와 같이 오브젝트(객체)로 묶어서 보낼 수 있다. 
        //     // es6에서는 키, 밸류가 같으면 줄일 수 있다. 
        //     // const obj = {
        //     //   todoItem,
        //     //   index
        //     // };

        //     // store의 mutation에 정의된 removeOneItem() 함수 호출
        //     // this.$store.commit('removeOneItem', todoItem, index)

        //     // 객체로 전달하는 방법 
        //     //this.$store.commit('removeOneItem', obj)

        //     // 객체를 바로 보내는 방법 
        //     this.$store.commit('removeOneItem', {todoItem, index})
            
        //     //브라우저 저장소
        //     // localStorage.removeItem(todoItem.item);
        //     // 현재 컴포넌트에 정의된 todoitems에서 하나를 지우겠다. 
        //     // this.todoItems.splice(index,1);
        // },
        // checkbox를 클릭했을때, compoas
        // toggleComplete(todoItem,index) {
        //     // 상위 컴포넌트에 정의된 toggleItem->toggleOneItem()을 호출 
        //     // this.$emit('toggleItem',todoItem,index);

        //     // store의 mutation에 정의된 removeOneItem() 함수 호출
        //     //this.$store.commit('toggleOneItem', todoItem, index)
        //     this.$store.commit('toggleOneItem', {todoItem, index})

        //     //console.log(todoItem);
        //     // todoItem.completed = !todoItem.completed; 

        //     // todoItems.completed를 업데이트 해주기 위해 삭제한후
        //     // 다시 localstorage에 추가 한다. 
        //     // localStorage.removeItem(todoItem.item);
        //     // localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
        //     //localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
        // }
    },
    // vue 라이프 사이클 훅 8개중에 created 사용
    // TodoList 생성시 data(todoItems)에 localstorgage에 있는 값을 넣어준다
    // created: function() {
    //     //console.log('created');
    //     if( localStorage.length > 0) {
    //         // localstorage에 데이터가 있다면, 
    //         for (var i=0 ; i < localStorage.length ; i++) {

    //             if( localStorage.key(i) !== 'loglevel:webpack-dev-server'){
    //                 //this.todoItems.push(localStorage.key(i));    
    //                 //localStorage.getItem(localStorage.key(i));
    //                 this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //                 console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //                 //console.log(typeof JSON.parse(ㅁlocalStorage.getItem(localStorage.key(i))));
    //             }
    //            //console.log(localStorage.key(i));
    //         }
    //     }
    // }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
/* 
.list-item {
  display: inline-block;
  margin-right: 10px;
} */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/* 
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
{
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
} */

</style>