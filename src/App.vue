<template>
  <div>导航栏 | <router-link to="/">Lynn</router-link> | <router-link to="/12">Lynn2</router-link></div>
  <hr />
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
