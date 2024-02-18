<script setup>
import { ref } from 'vue';
const productList = ref([
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 99.99,
    category: {
      id: 1,
      name: "Electronics"
    },
    images: ["image1.jpg", "image2.jpg"],
    reviews: [
      {
        id: 1,
        rating: 4,
        comment: "Great product!",
        author: "John Doe"
      },
      {
        id: 1,
        rating: 5,
        comment: "Great product!",
        author: "John Doe"
      },
      
      // 更多评论...
    ]
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 1",
    price: 199.99,
    category: {
      id: 1,
      name: "Electronics"
    },
    images: ["image1.jpg", "image2.jpg"],
    reviews: [
      {
        id: 1,
        rating: 4,
        comment: "Great product!",
        author: "John Doe"
      },
      {
        id: 1,
        rating: 5,
        comment: "Great product!",
        author: "John Doe"
      },
      
      // 更多评论...
    ]
  }
  // 更多商品...
]);
</script>
<template>
    <div>
        <ul>
           <li v-for="item in productList" :key="item.id">
                商品名称：{{ item.name }} - 价格： {{ item.price }} - 平均评分：{{ item.reviews.reduce((a, b) => a + b.rating, 0) / item.reviews.length}}
            </li> 
        </ul>
    </div>
</template>