import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerText: 'Todo it from state',
    }
})
// store 변수를 다른 파일에서 접근 가능하다. 
// 변수기 때문에 상단에 import 할때 
// import {import} from ...
// export const store = new Vuex.Store({
//     state: {
//         headerText: 'Todo'
//     }
// });