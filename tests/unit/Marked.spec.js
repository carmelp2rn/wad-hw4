import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('Task marked done in the list', () => {
    const tasks = [
        {
            id: 1,
            title: 'test1',
            done: false
        },
        {
            id: 2,
            title: 'test2',
            done: false
        },
        {
            id: 3,
            title: 'test3',
            done: false
        }
    ];
    const wrapper = mount(List, {
        propsData:{
            list: tasks
        }
    });

    it('item is updated when an item in the list is marked as done', () => {
        wrapper.find('span:first-of-type').trigger('click');
        let list = wrapper.props().list;
        expect(list[0].done).toEqual(true)
    })
});