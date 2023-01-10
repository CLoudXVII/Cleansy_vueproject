<template>
    <div class="vForm">
        <div class="form-text">
            <h1 id="form" class="form-text-top">Заказать уборку</h1>
            <p class="form-text-bottom">Свяжитесь с нами сейчас и получите 10 % скидку на первую покупку </p>
        </div>
        <div class="form">
            <input class="form-elem" placeholder="Введите имя" type="text" />
            <input class="form-elem" placeholder="Введите e-mail" type="email" />
            <input class="form-elem" placeholder="Введите номер телефона" type="tel" />
            <select class="select-cleaning" name="Cleaning">
                <option value="1">Обычная</option>
                <option value="2">Генеральная</option>
                <option value="3">Генеральная (с дезинсекцией)</option>
            </select>

            <div class="btn">
                <a href="#"><button class="button">Оставить заявку</button></a>>
            </div>
        </div>
        <div class="form-aftertext">
                <h1>Наш менеджер перезвонит вам и <br>уточнит все моменты и назначит день <br>уборки</h1>
        </div>
    </div>   
</template>



<script>
    export default {
        name: 'vForm',   
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
    .vForm {
        text-align: center;
    }
    .form-text-top {
        font-size: 50px;
    }
    .form-text-bottom {
        font-weight: 500;
        font-size: 30px; 
    }
    .form {
        text-align: center;
        background-image: url(./bgform.png);
        background-repeat: no-repeat;
    }
    .form-elem {
        width: 1194px;
        height: 100px;
        margin: 32px;
        border-radius: 18px;
        border: 1px solid #000000;
        font-size: 36px;
        padding-left: 30px;
    }
    .form-text-middle {
        font-weight: 700;
        font-size: 40px; 
    }
    .select-cleaning {
        width: 1228px;
        height: 100px;
        margin: 32px;
        border-radius: 18px;
        border: 1px solid #000000;
        font-size: 36px;
        padding-left: 30px;
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
        margin-bottom: 50px;
    }
    .form-aftertext {
        color: black;
        margin: 50px;
    }
</style>