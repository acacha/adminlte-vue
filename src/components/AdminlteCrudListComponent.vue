<template>
    <div>
        <ul class="todo-list" :id="listId">
            <li>
                <div class="input-group input-group-sm">
                    <input type="email" :id="newItemId" :name="name" :placeholder="placeholder" v-model="newItem"
                           class="form-control" @keyup.enter="add()">
                    <span class="input-group-btn">
                        <button type="button" @click="add()" class="btn btn-success btn-flat"><i class="fa fa-fw fa-plus"></i></button>
                    </span>
                </div>
            </li>
            <li v-for="item in items" :key="item.id" class="crud-list-item" :class="{ editing: item.id == editing }" :data-id="item.id">
                <div class="view">
                    <slot itemIcon></slot>
                    <span @dblclick="initEdit(item)">
                        {{item.value}}
                    </span>
                    <div class="tools">
                        <span class="handle">
                          <slot name="crud-list-sort-icon"><i class="fa fa-sort"></i></slot>
                        </span>
                        <span class="edit-icon" @click="initEdit(item)">
                          <slot name="crud-list-edit-icon"><i class="fa fa-edit green"></i></slot>
                        </span>
                        <span class="delete-icon" @click="confirmRemove(item.id)" v-if="!(confirmingRemove === item.id)">
                          <slot name="crud-list-delete-icon"><i class="fa fa-trash-o"></i></slot>
                        </span>
                        <template v-else>
                            <i class="fa fa-check green" @click="remove(item)" v-if="!(removing  === item.id)"></i>
                            <i class="fa fa-refresh fa-spin" v-else></i>
                            <i class="fa fa-remove red" @click="cancelConfirmRemove()" ></i>
                        </template>
                    </div>
                </div>
                <input v-focus type="email" id="editEmail" name="email" v-model="item.value"
                       class="form-control edit" @keyup.enter="edit(item)" @keyup.esc="cancelEdit(item)">
            </li>
        </ul>
    </div>
</template>

<style>
    .red {
        color: #dd4b39;
    }
    .green {
        color: #196c4b;
    }

    .todo-list li .edit {
        display: none;
    }

    .todo-list li.editing .view {
        display: none;
    }

    .todo-list li.editing .edit {
        display: block;
    }
</style>

<script>
  import pluralize from 'pluralize'
  import capitalize from 'capitalize'

  export default {
    name: 'AdminLTECrudList',
    props: {
      items: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        default: 'item'
      },
      placeholder: {
        type: String,
        default: 'Add an item here...'
      }
    },
    data () {
      return {
        removing: null,
        confirmingRemove: null,
        editing: null,
        submittingEdit: false,
        newItem: '',
        beforeEditCache: '',
        startId: null
      }
    },
    computed: {
      listId () {
        return pluralize(this.name)
      },
      newItemId () {
        return 'new' + capitalize(this.name)
      }
    },
    methods: {
      add () {
        if (this.newItem) {
          this.$emit('add', this.newItem.trim())
        }
      }
    },
    directives: {
      'focus': function (el) {
        el.focus()
      }
    }
  }
</script>
