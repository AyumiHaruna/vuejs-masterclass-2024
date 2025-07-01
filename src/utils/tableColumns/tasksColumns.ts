import type { ColumnDef } from "@tanstack/vue-table"
import type { TasksWithProjectsQuery } from "../supaQueries"
import { RouterLink } from "vue-router"

export const columns: ColumnDef<TasksWithProjectsQuery[0]>[] = [
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
        () => row.getValue('name')
      )
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
    accessorKey: 'projects',
    header: () => h('div', {class: 'text-left'}, 'ProjectId'),
    cell: ({ row }) => {
      return row.original.projects ?
        h(
          RouterLink,
          {
            to: `/projects/${row.original.projects.slug}`,
            class: 'text-left font-medium hover:bg-muted block w-full'
          },
          () => row.original.projects?.name
        ) : ''
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