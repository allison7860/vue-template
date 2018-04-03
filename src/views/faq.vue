<template>
  <div class="faq">

    <div class="search">
        <input id="search" type="text" placeholder="search questions" name="search">
    
    </div>



  <h1>Fking Answers & Questions?!</h1>
    <div class="box" v-for="item in faq"> 
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
            {id: 1, question: 'How did I get here?', answer: 'Not sure?'},
            {id:2, question: 'What is this place?', answer: 'What is this place?!? I\'m not sure dont ask me'}
        ]
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
