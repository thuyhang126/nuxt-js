<!-- file: pages/users/index.vue -->
<template>
  <div class="user_list">
    <h1>Danh sách người dùng</h1>
    <nuxt-link to="/">Quay lại trang chính</nuxt-link>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users.slice(0, 10)" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.users = data.map(user => ({
        id: user.id,
        name: user.name,
        phone: user.phone
      }));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}
</script>
<style scoped>
.user_list {
  max-width: 900px;
  margin: 0 auto;
}
table {
  width: 100%;
}
tr, th, td {
  border: 1px solid #ccc;
  padding: 5px 10px;
}
</style>
