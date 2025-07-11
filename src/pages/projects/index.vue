<script setup lang="ts">
import { projectsQuery } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/projectsColumns';
import type { Projects } from '@/utils/supaQueries';

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)

// Immediately Invoked Function Expression (executed as soon as file loaded)
const getProjects = async () => {
  const { data, error, status } = await projectsQuery

  if (error) useErrorStore().setError({error, customCode: status})

  projects.value = data
}

await getProjects();

</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
