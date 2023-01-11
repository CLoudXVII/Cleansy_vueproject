<template>
  <div class="vHome">
    <div class="container">
        <div class="calltoaction">
            <div class="btn-text">
                <h1>Уборка квартир и офисов</h1>
                <p>Оказываем полный спектр услуг клининга квартир <br>и помещений в Москве и области</p> 
            </div>
            <div class="btn">
                <a href="#formview"><button class="button">Оставить заявку</button></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vHome',
}
</script>

<style>
    .vHome {
        background-image: url(@/assets/bg.png);
        height: 88vh;
        background-position: top;
        background-repeat: no-repeat;
        background-color: #262626;
        margin: 0;
    }
    .button {
        background-color: #FF7400;
        color: #fff;
        text-decoration: none;
        padding: 24px 24px;
        font-weight: 700;
        transition: background-color 0.2s linear;
        border-radius: 15px;
        border-width: 0.5px;
        font-size: 21px;
    }
    .button:hover {
        background-color: #a8530b;
    }
    .btn-text {
        color: black;
        font-weight: 500; 
        font-size: 21px;       
    }
    .calltoaction {
        margin-left: 200px;
        padding-top: 150px;
    }
</style>