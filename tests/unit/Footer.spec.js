import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer";

describe('Footer', () => {
	
	const wrapper = mount(Footer);

    it("Clicking on + button changes value to True",() => {
        expect(wrapper.vm.open).toBe(false);
		const button=wrapper.find("span")
		button.trigger('click')
        expect(wrapper.vm.open).toBe(true);
    });
});