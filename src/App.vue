<script setup lang="ts">
  const errorStore = useErrorStore()

  onErrorCaptured((error) => {
    errorStore.setError({ error })
  })
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore" />

    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>

        <template #fallback>
          <span> Loading... </span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>