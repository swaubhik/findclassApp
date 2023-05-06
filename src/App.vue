<template>
  <header>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
