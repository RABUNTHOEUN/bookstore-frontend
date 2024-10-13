<template>
    <div class="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold mb-4">{{ book.title }}</h1>
        <p class="text-lg font-semibold"><strong>Author:</strong> {{ book.author }}</p>
        <p class="text-lg font-semibold"><strong>Price:</strong> ${{ book.price }}</p>
        <p class="text-gray-700 mb-4"><strong>Description:</strong> {{ book.description }}</p>
        <img
            :src="book.image_url"
            alt="Book Image"
            class="w-full h-auto rounded-md mb-4"
        />
        <router-link
            to="/"
            class="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            Back to Book List
        </router-link>
        <router-link class="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mx-4 transition"
         :to="`/edit-book/${book.id}`">Edit Book</router-link> <!-- Edit link -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            book: {},
        };
    },
    created() {
        this.fetchBook();
    },
    methods: {
        async fetchBook() {
            // const response = await axios.get(`http://localhost:5000/api/books/${this.$route.params.id}`);
            // this.book = response.data;
        },
    },
};
</script>

<style>
/* Optional: You can add additional custom styles here if needed */
</style>
