   // file: middleware/auth.js
   export default function ({ store, redirect }) {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!store.state.authenticated) {
      // Nếu chưa, chuyển hướng đến trang đăng nhập
      return redirect('/login');
    }
  }
