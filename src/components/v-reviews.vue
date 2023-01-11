<template>
  <div class="vReviews">
    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span>Имя пользователя.</span> Место работы.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span >Имя пользователя.</span> Место работы.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span >Имя пользователя.</span> Место работы.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span >Имя пользователя.</span> Место работы.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span >Имя пользователя.</span> Место работы.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span >Имя пользователя.</span> Место работы.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vReviews'
}
</script>

<style>
/* Style the container with a rounded border, grey background and some padding and margin */
.container-review {
    border: 2px solid #ccc;
    background-color: #eee;
    border-radius: 5px;
    padding: 16px;
    margin: 16px 0;
}

/* Clear floats after containers */
.container::after {
    content: "";
    clear: both;
    display: table;
}

/* Float images inside the container to the left. Add a right margin, and style the image as a circle */
.container-review img {
    float: left;
    margin-right: 20px;
    border-radius: 50%;
}

/* Increase the font-size of a span element */
.container-review span {
    font-size: 20px;
    margin-right: 15px;
}

/* Add media queries for responsiveness. This will center both the text and the image inside the container */
@media (max-width: 500px) {
  .container-review {
    text-align: center;
  }

  .container-review img {
    margin: auto;
    float: none;
    display: block;
  }
}
</style>