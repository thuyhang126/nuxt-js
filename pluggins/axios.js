   // file: plugins/axios.js
   import axios from 'axios';

   export default function ({ $axios, redirect }) {
     // Cấu hình Axios
     $axios.defaults.baseURL = 'https://api.example.com';

     // Thêm interceptor để xử lý lỗi
     $axios.onError(error => {
       if (error.response.status === 404) {
         redirect('/404'); // Chuyển hướng đến trang 404 nếu không tìm thấy
       }
     });
   }