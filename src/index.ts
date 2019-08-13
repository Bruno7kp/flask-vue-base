import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloComponent from './components/Hello.vue';
import '../style/custom.scss';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
];

const router = new VueRouter({
  routes
});

let v = new Vue({
    el: '#app',
    router,
    template: `
    <div>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <label>Name: <input class="form-control" v-model="name" type="text"></label>
        <br/>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-view></router-view>
    </div>
    `,
    data: { name: 'World' },
    components: {
        HelloComponent
    },
});