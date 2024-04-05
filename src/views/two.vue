<template>
    <div class="w">
        <navigation />

        <h1>the stage of heart</h1>
        <h2>想要同时做好许多事，结果往往是一事无成。真正聪明的人，都懂得专注一个目标，深耕下去。能否保持专注、保持定力，会直接影响到目标能否顺利实现。</h2>
        <h3>The three central themes that take center stage in my heart.</h3>

        <form @submit.prevent="addItem" class="info">
            <input type="text" v-model="newItem" @input="updateCharacterCount">
            <button class="add">添加</button>
        </form>
        <div class="wrapper">
            <span class="total">{{ characterCount }}/30字</span>
        </div>
        <table>
            <thead>
                <tr>
                    <th class="idea">idea</th>
                    <th class="time">time</th>
                    <th class="operation">operation</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.idea }}</td>
                    <td>{{ item.time }}</td>
                    <td><a href="" @click.prevent="removeItem(index)">删除</a></td>
                </tr>
            </tbody>
        </table>
        <router-link to="/three" class=" iconfont icon-jiantou_yemian_xiangyou"></router-link>

    </div>
</template>

<script>
import navigation from '@/components/navigation.vue';

export default {
    components: {
        navigation
    },
    data() {
        return {
            newItem: '',
            characterCount: 0,
            items: []
        };
    },
    mounted() {
        this.loadItems();
    },
    methods: {
        loadItems() {
            const goals = localStorage.getItem('goals');
            this.items = goals ? JSON.parse(goals) : [
                { idea: "进入链时代", time: "2024/3/30 23:32:39" },
                { idea: "看完《源泉》", time: "2024/3/30 23:32:44" },
                { idea: "准备期中考", time: "2024/3/30 23:32:48" }
            ];
        },
        addItem() {
            if (this.newItem === '') {
                alert('输入不能为空');
                return;
            }
            if (this.items.length >= 3) {
                alert('不能超过三件事情');
                return;
            }
            const newItem = {
                idea: this.newItem,
                time: new Date().toLocaleString()
            };
            this.items.push(newItem);
            localStorage.setItem('goals', JSON.stringify(this.items));
            this.newItem = '';
            this.characterCount = 0;
        },
        removeItem(index) {
            this.items.splice(index, 1);
            localStorage.setItem('goals', JSON.stringify(this.items));
        },
        updateCharacterCount() {
            if (this.newItem.length >= 30) {
                this.newItem = this.newItem.slice(0, 30); // 截取前30个字符
            }
            this.characterCount = this.newItem.length;
        }
    }
};
</script>
<style scoped>
.w {
    background-color: #4dd6d0;
}

.section {
    padding: 0 5%;
    position: relative;
}

h1 {
    font-size: 3rem;
    text-align: center;
    color: #204f46;
}

h2 {
    font-size: 2.2rem;
    color: #3d7e72;
    padding: 2%;
    text-indent: 2em;
}

h3 {
    font-size: 2.2rem;
    color: #3d7e72;
    text-align: center;
}

.info {
    margin: 1.25rem auto;
    text-align: center;
}

.info input {
    width: 70%;
    height: 2.5rem;
    outline: none;
    font-size: large;
    border-radius: 5px;
    border: 3px solid #0d9c52;
    background-color: #58bba9;
    padding-left: 5px;
    box-sizing: border-box;
    margin-right: 15px;
    color: #fff;
}

.info button {
    width: 3.75rem;
    height: 2.5rem;
    font-size: 1.3rem;
    background-color: #0d9c52;
    outline: none;
    border: 0;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
}

.wrapper {
    display: flex;
    justify-content: flex-end;
}

.wrapper .total {
    color: #fff;
    opacity: 0;
    transition: all 0.5s;
    margin-right: 16rem;
    margin-top: -10px;
}

table {
    margin: 0 auto;
    border-collapse: collapse;
    width: 80%;
}

thead tr th {
    padding: 10px;
    font-size: 2rem;
    color: #fff;
    margin-left: 2rem;
}

.idea {
    width: 800px
}

.time {
    width: 20%;
}

th,
td {
    border: 1px solid #999;
    text-align: center;
    padding: 20px 0;
}

table thead tr {
    background-color: #008c8c;
    color: #fff;
}

table tbody tr:nth-child(odd) {
    background-color: #eee;
}

table tbody tr:hover {
    background-color: #ccc;
}

tbody {
    font-size: 1.5625rem;
    color: black
}

tr a {
    text-decoration: none;
    color: black;
}


table tfoot tr td {
    text-align: right;
    padding-right: 20px;
}

.icon-jiantou_yemian_xiangyou {
    font-size: 5rem;
    display: flex;
    justify-content: center;
    color: #fff;
}
</style>