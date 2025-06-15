<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { h, ref } from 'vue'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table';
import DataTable from '@/components/ui/data-table/data-table.vue';
import { RouterLink } from 'vue-router';

const tasks = ref<Tables<'tasks'>[] | null>(null)

// Immediately Invoked Function Expression (executed as soon as file loaded)
;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.log(error)

  tasks.value = data
})()

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.id}`,
          class: 'text-left font-medium hover:bg-muted block w-full'
        },
        () => row.getValue('name'))
    }
  },
  {
    accessorKey: 'status',
    header: () => h('div', {class: 'text-left'}, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium'}, row.getValue('status'))
    }
  },
  {
    accessorKey: 'description',
    header: () => h('div', {class: 'text-left'}, 'Description'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium'}, row.getValue('description'))
    }
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', {class: 'text-left'}, 'DueDate'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium'}, row.getValue('due_date'))
    }
  },
  {
    accessorKey: 'project_id',
    header: () => h('div', {class: 'text-left'}, 'ProjectId'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium'}, row.getValue('project_id'))
    }
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', {class: 'text-left'}, 'Collaborators'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium'}, JSON.stringify(row.getValue('collaborators')))
    }
  }
]

</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
