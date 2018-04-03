<template>
  <div class="faq">

    <div class="search">
        <input id="search" v-model="msg"  v-on:keyup="checkSearch(msg)" @focus="checkSearch(msg)" type="text" placeholder="search questions">
    </div>



  <h1>Fking Answers & Questions?!</h1>
    <div class="box" v-for="item in faq" v-if="item.active == true"> 
        <h3>{{item.question}}</h3>
        <p>{{item.answer}}</p>
    </div>


  
  </div>
</template>

<script>
export default {
  name: 'faq',
  data () {
    return {
        faq: [
            {id: 1, question: 'How did I get here?', answer: 'Not sure?', active:false},
            {id:2, question: 'What is this place?', answer: 'What is this place?!? I\'m not sure dont ask me', active:false},
            {id:3, question: 'What is this placs?', answer: 'What is this place?!? I\'m not sure dont ask me', active:false}
            ]
    }
  },
  methods: {
    checkSearch: function (msg) {
            msg = msg.toLowerCase();

            for ( var x = 0; x < this.faq.length; x++ ){ 
                if ( this.faq[x].question.indexOf(msg) > -1) {
                this.faq[x].active = !this.faq[x].active;
                } else  {
                    this.faq[x].active = false;
                }
            }
        }
  },
  beforeMount() {
      for ( var x = 0; x <= this.faq.length; x++ ) {
        if ( this.faq[x].active == false) {
            this.faq[x].active = true;
        }
      }
  }
}



</script>

<style scoped>
#search {
    display:block;
    margin:0 auto;
    background:#00e;
    color:#fff;
    font-size:16pt;
    padding:5px;
    border:none;
}
</style>
