<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <router-link to="/register">Register</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async login() {
            // try {
            //     await axios.post('http://localhost:5000/api/users/login', {
            //         username: this.username,
            //         password: this.password,
            //     });


            //     this.$router.push('/');
            // } catch (error) {
            //     console.error('Login error:', error.response.data.message);
            // }
        },
    },
};
</script>
