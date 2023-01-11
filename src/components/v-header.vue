<template>
    <div class="vHeader">
        <div class="container">
            <div class="header-line">

                <div class="header-logo">
                    <a href="#/Home"><img src="@/assets/logo.png"></a>
                </div>

                <div class="nav">
                    <a class="nav-item" href="#/Services">Услуги</a>
                    <a class="nav-item" href="@">Как мы работаем</a>
                    <a class="nav-item" href="@">Вопросы</a>
                    <a class="nav-item" href="@">Оценки и отзывы</a>
                    <a class="nav-item" href="https://github.com/CLoudXVII/Cleansy_vueproject">GitHub</a>
                </div>

                <div class='phone'> 
                    <div class='phone-holder'>
                        <div class='phone-img'>
                            <img src="@/assets/phone.png" alt="">
                        </div>

                        <div class='number'>
                            <a class='num' href='#'>+999-888-76-54</a>
                        </div>
                    </div>
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
        background-color: #262626;
    }
    .container {
        margin: 0px 120px;
    }
    .header-line {
        padding-top: 30px;
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
</style>