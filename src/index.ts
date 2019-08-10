import Vue from 'vue';
import HelloComponent from './components/Hello.vue';
import '../style/custom.scss';

let v = new Vue({
    el: '#app',
    template: `
    <div>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <label>Name: <input class="form-control" v-model="name" type="text"></label>
        
    </div>
    `,
    data: { name: 'World' },
    components: {
        HelloComponent
    }
});