import { createRouter, createWebHistory } from 'vue-router';
import BookList from '../components/BookList.vue';
import BookDetail from '../components/BookDetail.vue';
import AddBook from '../components/AddBook.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import EditBook from '../components/EditBook.vue';

const routes = [
    { path: '/', component: BookList },
    { path: '/book/:id', component: BookDetail },
    { path: '/add-book', component: AddBook },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/edit-book/:id', component: EditBook },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
