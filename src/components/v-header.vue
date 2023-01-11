<template>
    <div class="vHeader">
        <div class="container">
            <div class="header-line">

                <div class="header-logo">
                    <img src="./logo.png">
                </div>

                <div class="nav">
                    <a class="nav-item" href="@">Услуги</a>
                    <a class="nav-item" href="@">Как мы работаем</a>
                    <a class="nav-item" href="@">Вопросы</a>
                    <a class="nav-item" href="@">Оценки и отзывы</a>
                </div>

                <div class='phone'> 
                    <div class='phone-holder'>
                        <div class='phone-img'>
                            <img src="./phone.png" alt="">
                        </div>

                        <div class='number'>
                            <a class='num' href='#'>+999-888-76-54</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="calltoaction">
                <div class="btn-text">
                        <h1>Уборка квартир и офисов</h1>
                        <p>Оказываем полный спектр услуг клининга квартир <br>и помещений в Москве и области</p> 
                    </div>
                    <div class="btn">
                        <a href="#form"><button class="button">Оставить заявку</button></a>
                    </div>
            </div>


        </div>
    </div>
</template>






<script>
    export default {
        name: 'vHeader',   
        components: {  
        },
        props: {},
        data() {
            return{}
        },
        computed: {},
    }
</script>








<style>
    .vHeader {
        background-image: url(C:\Users\CLoudXVII\projectvue\src\assets\bg.png);
        height: 100vh;
        background-repeat: no-repeat;
        background-position-y: bottom;
        background-color: #262626;
    }
    .container {
        margin: 0px 166px;
    }
    .header-line {
        padding-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;    
    }
    .nav-item {
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        font-size: 21px;
        margin-right: 50px;
        transition: color 0.2s linear;
    }
    .nav-item:hover {
        color: orange;
    }
    .phone-holder {
        display: flex;
        align-items: center;
    }
    .num {
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        transition: color 0.2s linear;
        margin-left: 25px;
        font-size: 21px;
    }
    .num:hover {
        color:orange;
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
        margin-top: 150px;
    }
</style>