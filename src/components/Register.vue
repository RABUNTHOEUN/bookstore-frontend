<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <input v-model="username" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <input v-model="email" placeholder="Email" required />
            <button type="submit">Register</button>
        </form>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            email: '',
        };
    },
    methods: {
        async register() {
            // await axios.post('http://localhost:5000/api/users/register', {
            //     username: this.username,
            //     password: this.password,
            //     email: this.email,
            // });
            // this.$router.push('/login');
        },
    },
};
</script>
