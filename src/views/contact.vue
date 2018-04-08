<template>
  <div class="contact">
  <h1>Contact Us</h1>
      <p>Do you have any questions? Please feel free to contact us for any concerns or reports.</p>
     

    <div class="contact-container">

        <div class="background"></div>
        <div class="form">
            <form action="#" id="contactForm">
                <label for="name">Name:</label>
                <input type="text" name="name">
                <label for="email">E-mail:</label>
                <input type="email" name="email">
                <label for="msg">Message:</label>
                <textarea name="msg"></textarea>
                <input type="submit" name="submit" value="Submit">
            </form>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>

.contact-container {
    display:flex;
    display:-ms-flex;
    flex-flow:row wrap;
    justify-content:space-between;
    background:#b09893;
    max-width:900px;
    padding:10px;
    margin:0 auto;
}
.background {
    width:200px;
     background:url('http://allison.allisonshtml.com/img/tumblr_p4finip3iE1v3lyl7o1_1280.png') 10px -5px / cover no-repeat;
}

#contactForm {
    min-width:500px;
    margin:0 auto;
}
input, label, textarea {
    display:block;
    width:100%;
}
input, textarea {
    margin-bottom:10px;
}
input,textarea {
    border:none;
}
input, textarea {
    padding:5px;
    border-bottom:1px solid #2d2d2d;
    color:#2d2d2d;
    font-size:15pt;
    transition:.2s ease-in;
}
textarea {
    height:200px;
}
input[type=submit] {
    border:1px solid #2d2d2d;
    width:auto;
    margin: 0 auto;
    cursor:pointer;
}
input[type=submit]:focus {
    border-bottom:1px solid #2d2d2d;
}
input:focus, textarea:focus {
    border-bottom:1px solid #fff;
}

@media ( max-width:900px ) {
    .contact-container {
        display:block;
        background:transparent;
    }
    #contactForm {
        min-width:100%;
        background:#b09893;
        padding:5px;
    }
    .background {
        height:180px;
        background-position:80% 0; 
    }
    .form {
        width:100%;
    }
}
</style> 
