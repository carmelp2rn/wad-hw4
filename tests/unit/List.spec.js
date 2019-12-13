import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('List component', () => {
    const testData = []
    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    })


    it('Add your first Todo task', () => {
        const items = wrapper.findAll('.list-item');
        expect(items.length==0);
    })
    it('List is not defiend', () => {
        const items = wrapper.findAll('.list-item');
        expect(items.length=== undefined);
    })
    it('check if todo task text is present', () => {
        expect(wrapper.html()).toContain('<h3>Add your first Todo task</h3>')
    })
});