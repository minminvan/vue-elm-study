<template>
  <div id="app">
   
    <v-header v-bind:seller="seller"></v-header>
    <tab></tab>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
  import header from './components/header/Header';
  import tab from './components/tab/Tab';

  const ERR_OK = 0;

  export default {
    name: 'app',
    data() {
      return {
        seller: {}, //从后端的seller API获得这个seller对象，现在就来把这个seller对象传给header组件
        apiUrl: 'http://10.24.50.31:8080/api/seller'
      }
    },
    created() { //钩子函数，组件创建完成时调用getData方法获取数据
      this.getData();
    },
    methods: {
      getData() {
        this.$http.get(this.apiUrl).then((response) => {
          // console.log(response)
          response = response.body;
          
          if( response.errno === ERR_OK ) {
            this.seller = response.data;
            console.log(this.seller);
          }
        }, (response) => {
          console.log(response)
        })
        .catch(function(response) {
          console.log(response)
        });
      }
    },
    components: {
      'v-header': header,
      'tab': tab
    }
  }
</script>

<style>

</style>
