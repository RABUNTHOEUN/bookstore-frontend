<template>
    <div class="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold mb-6">Add New Book</h1>
        <form @submit.prevent="addBook" class="space-y-4">
            <input
                v-model="title"
                placeholder="Title"
                required
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
                v-model="author"
                placeholder="Author"
                required
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
                v-model="price"
                placeholder="Price"
                type="number"
                required
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <textarea
                v-model="description"
                placeholder="Description"
                required
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
            <input
                v-model="image_url"
                placeholder="Image URL"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
                type="submit"
                class="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
                Add Book
            </button>
        </form>
        <router-link
            to="/"
            class="inline-block mt-4 text-blue-500 hover:underline"
        >
            Back to Book List
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: '',
            author: '',
            price: 0,
            description: '',
            image_url: '',
        };
    },
    methods: {
        async addBook() {
            // await axios.post('http://localhost:5000/api/books', {
            //     title: this.title,
            //     author: this.author,
            //     price: this.price,
            //     description: this.description,
            //     image_url: this.image_url,
            // });
            // this.$router.push('/');
        },
    },
};
</script>

<style>
/* Optional: Add additional custom styles here if needed */
</style>
