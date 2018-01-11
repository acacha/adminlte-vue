import { mount } from 'vue-test-utils'
import expect from 'expect'
import Component from '../src/components/AdminlteCrudListComponent.vue'

describe('Component', () => {
  let component

  const ITEMS = [
    {
      id: 1,
      value: 'item1'
    },
    {
      id: 2,
      value: 'item2'
    },
    {
      id: 3,
      value: 'item3'
    },
    {
      id: 4,
      value: 'item4'
    }
  ]

  beforeEach(() => {
    component = mount(Component,
      {
        propsData: {
          items: ITEMS
        }
      })
  })

  it ('see items after setting them via prop', () => {
    component.setProps({
      name: 'item',
      placeholder: 'Add an item here'
    })
    expect(component.vm.items).toEqual(ITEMS)

    ITEMS.forEach(function (item) {
      expect(component.html()).toContain(item.value)
    })

    expect(component.html()).toContain('<i class="fa fa-sort">')
    expect(component.html()).toContain('<i class="fa fa-edit green"></i>')
    expect(component.html()).toContain('<i class="fa fa-trash-o"></i>')

    exists('#items')
    exists('#newItem')
  })

  it ('no items if items is an empty array', () => {
    component.setProps({ items: [] })
    expect(component.vm.items).toEqual([])
    expect(component.contains('il.crud-list-item')).toBe(false)
  })

  it ('can add item', () => {
    addItem('Go to the store ')

    expect(component.emitted().add).toBeTruthy()
    expect(component.emitted().add[0]).toEqual(['Go to the store'])
  })

  it ('can remove any item', () => {
    addItem('Go to the store')
    addItem('Finish screencast')

    click('ul > li:first-child .remove')

    expect(component.emitted().remove).toBeTruthy()
    expect(component.emitted().remove[0]).toEqual(['Go to the store'])
  })

  // Helper Functions

  let exists = (selector) => {
    expect(component.find(selector)).toBeTruthy()
  }

  let see = (text, selector) => {
    let wrap = selector ? component.find(selector) : wrapper

    expect(wrap.html()).toContain(text)
  }

  function addItem(body) {
    let newReminder = component.find('input[name=item]')

    newReminder.element.value = body
    newReminder.trigger('input')

    click('button')
  }

  let click = selector => {
    component.find(selector).trigger('click')
  }

})