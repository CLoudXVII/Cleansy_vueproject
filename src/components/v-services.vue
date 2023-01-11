<template>
    <div class="vServices">
        <div class="initial-text">
            <h1>Виды уборок</h1>
        </div>
        <div class="first-row">
            <div class="cleaning-item"><img src="@/assets/apartment.png" alt="" /><p>Вся квартира</p></div>
            <div class="cleaning-item"><img src="@/assets/kitchen.png" alt="" /><p>Кухня</p></div>
            <div class="cleaning-item"><img src="@/assets/bathroom.png" alt="" /><p>Ванная</p></div>
        </div>
        <div class="second-row">
            <div class="cleaning-item"><img src="@/assets/house.jpg" alt="" width="529" height="600" /><p>Загородный дом</p></div>
            <div class="cleaning-item"><img src="@/assets/house-yard.jpg" alt="" width="529" height="600" /><p>Двор</p></div>
            <div class="cleaning-item"><img src="@/assets/pool.jpg" alt="" width="529" height="600" /><p>Бассейн</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vServices'
}
</script>

<style>
    .initial-text {
        text-align: center;
        font-weight: 600;
        font-size: 21px;
    }
    .first-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }
    .second-row {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;       
    }
    .cleaning-item {
        font-weight: 600;
        font-size: 21px;
    }
</style>