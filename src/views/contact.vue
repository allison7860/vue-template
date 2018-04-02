<template>
  <div class="contact">
  <h1>Contact Us</h1>
      <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
     
     <form action="#" id="contactForm">
        <label for="name">Name:</label>
        <input type="text" name="name">
        <label for="email">E-mail:</label>
        <input type="email" name="email">
        <label for="msg">Message:</label>
        <textarea name="msg"></textarea>
        <input type="submit" name="submit">
     </form>

  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>
#contactForm {
    max-width:900px;
    margin:0 auto;
}
input, label, textarea {
    display:block;
    width:100%;
}
input, textarea {
    margin-bottom:10px;
    box-shadow:0 0 5px #000;
}
input,textarea {
    border:none;
}
input, textarea {
    padding:10px;
    background:#00ee90;
}
textarea {
    height:200px;
}
input[type=submit] {
    width:auto;
    margin: 0 auto;
    cursor:pointer;
}
</style>
