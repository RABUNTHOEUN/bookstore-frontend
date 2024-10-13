<template>
    <div class="max-w-2xl mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Most Viewed Books</h1>
        <router-link
            to="/add-book"
            class="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mb-4 transition"
        >
            Add New Book
        </router-link>
        <table class="min-w-full border border-gray-300">
            <thead>
                <tr class="bg-gray-100">
                    <th class="border border-gray-300 p-2">Title</th>
                    <th class="border border-gray-300 p-2">Author</th>
                    <th class="border border-gray-300 p-2">Price</th>
                    <th class="border border-gray-300 p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="book in sortedBooks"
                    :key="book.id"
                    class="hover:bg-gray-50"
                >
                    <td class="border border-gray-300 p-2">
                        <router-link
                            :to="`/book/${book.id}`"
                            class="text-blue-700 hover:underline"
                        >
                            {{ book.title }}
                        </router-link>
                    </td>
                    <td class="border border-gray-300 p-2">{{ book.author }}</td>
                    <td class="border border-gray-300 p-2">${{ book.price }}</td>
                    <td class="border border-gray-300 p-2 flex gap-2">
                        <router-link
                            :to="`/edit-book/${book.id}`"
                            class="bg-yellow-500 text-white rounded px-2 py-1 hover:bg-yellow-600 transition"
                        >
                            Edit
                        </router-link>
                        <button
                            @click="deleteBook(book.id)"
                            class="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            books: [],
        };
    },
    created() {
        this.fetchBooks();
    },
    computed: {
        sortedBooks() {
            // Sort books by the number of views in descending order
            return this.books.sort((a, b) => b.views - a.views);
        },
    },
    methods: {
        async fetchBooks() {
            const response = await axios.get('http://localhost:5000/api/books');
            this.books = response.data;
        },
        async deleteBook(bookId) {
            if (confirm('Are you sure you want to delete this book?')) {
                await axios.delete(`http://localhost:5000/api/books/${bookId}`);
                this.fetchBooks(); // Refresh the book list
            }
        },
    },
};
</script>

<style>
/* Optional: Add additional custom styles here if needed */
</style>
