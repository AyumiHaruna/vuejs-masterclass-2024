<script setup lang="ts">
import { tasksWithProjectsQuery } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/tasksColumns';
import type { TasksWithProjectsQuery } from '@/utils/supaQueries';

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjectsQuery | null>(null)
// Immediately Invoked Function Expression (executed as soon as file loaded)
const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  if (error) useErrorStore().setError({error, customCode: status})

  tasks.value = data
}

await getTasks();
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
