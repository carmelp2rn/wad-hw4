import {mount, shallowMount} from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header', () => {
    // Now mount the component and you have the wrapper
    const testData = []
    const wrapper = mount(Header, {
        propsData: {
            list: testData
        }
    })
    // Check that this component properly displays today's date

    it('renders the correct date', () => {
        let today = new Date();
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    })

    /*it('renders the correct year', () => {
        let today = new Date();
        let year1 = today.getFullYear();

        expect((wrapper.find('year')).toBe(2018))
    })*/
    it('renders the correct year', () => {
        let today = new Date();
        let year = today.getFullYear();
        expect(wrapper.html()).toContain(year);
    })

    it('renders the correct month', () => {
        let today = new Date();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
        let month =  months[today.getMonth()]
        expect(wrapper.html()).toContain(month.slice(0,3).toUpperCase());
    })

   it('renders the correct week day', () => {
        let today = new Date();
        let weekday = today.getDay();
        expect(wrapper.html()).toContain(weekday);
    })

});
