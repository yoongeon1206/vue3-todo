<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
    </span>
    <transition name="modal">
    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <template v-slot:header>
        <h3>
          경고!
          <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
        </h3>
      </template>
      <!-- <template v-slot:body>
        <h3> 무언가를 입력하세요 </h3>
      </template>
      <template v-slot:footer>
        <h3>copyright </h3>
      </template> -->
    </Modal>
    </transition>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data: function(){
        return{ 
            //text 필드의 값을 newTodoItem 저장 
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
      addTodo: function() {
        //console.log(this.newTodoItem);
        // 값이 있을때 
        if (this.newTodoItem !== ''){
          this.$emit('addTodoItem',this.newTodoItem);
          // 로컬 스토리지 저장하는 로직 
          //var obj = {completed: false, item: this.newTodoItem}
          // object를 문자열로 변환하여 브라우저 스토리지에 저장한다
          // localstorage key - this.newTodoItems : 텍스트 필드에 입력한 값 
          // localstrogage value - obj : completed 여부, 텍스트 필드에 입력한 값 
          //localStorage.setItem(this.newTodoItem,JSON.stringify(obj));
          this.clearInput();
        }else{
          //alert("input todo item for your schedule")
          this.showModal = !this.showModal;
        }
        
      },
      clearInput: function() {
        this.newTodoItem = '';
      }

    },
    components: {
      Modal
      // Modal: Modal
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>