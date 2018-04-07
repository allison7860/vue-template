<template>
  <div class="post">
  <h1>Want to be heard?</h1>


  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi illo porro, tempore nam consequuntur fuga eligendi sint nostrum animi consequatur quaerat deserunt laborum non impedit, ad numquam quam veniam quisquam.
  Consequuntur, fugiat blanditiis omnis vero quae enim quidem praesentium, ullam, saepe voluptatibus libero incidunt suscipit! Quis corporis, facilis repudiandae rem tempore tenetur necessitatibus eligendi deserunt, dicta veniam dolores alias repellat.
  Officia eaque esse mollitia ipsam est eos rerum, minima nostrum voluptatem ratione recusandae ea eius maiores molestiae magnam consequuntur porro sunt, quia non perferendis harum? Odio quas saepe in deleniti?

  <h3>Do these to get them!</h3>
  <ul>
    <li>Follw these</li>
    <li>Follw these</li>
    <li>Follw these</li>
    <li>Follw these</li>
  </ul>


  Nulla obcaecati facere reprehenderit, magnam officia autem reiciendis exercitationem animi blanditiis officiis voluptatum veniam quasi vitae? Tempore sint, sed ipsa eos ex itaque, dignissimos debitis similique atque ut earum fugiat.
  Facere quod voluptate earum accusantium debitis! Voluptates, veritatis amet. Voluptatem reprehenderit veritatis aspernatur, impedit error ipsa molestias optio excepturi saepe assumenda, ea id quas voluptate distinctio quibusdam ipsam animi maiores?</p>
  
  
  <form>
    <label for="author">Author:</label>
    <input type="text">
    <label for="title">Title:</label>
    <input type="text">
    <label for="website">Website:</label>
    <input type="text">
    <label for="email">E-mail:</label>
    <input type="email">
    <label for="story">Story:</label>
    <textarea></textarea>
    <input type="submit" value="Send Story">
  </form>

  </div>





</template>

<script>
export default {
  name: 'post'
}
</script>

<style scoped>

form {
  max-width:900px;
  margin:0 auto;
  padding:10px 20px;
}
label, input, textarea {
  display:block;
  border:none;
  width:100%;
}
input,textarea {
  padding:10px;
  background:#2d2d2d;
  color:#fff;
  font-size:15pt;
  box-shadow:0 0 5px #000;
  margin-bottom:10px;
}
textarea {
    height:200px;
}
input[type=submit] {
  cursor:pointer;
  width:auto !important;
  margin:0 auto;
}

</style>
