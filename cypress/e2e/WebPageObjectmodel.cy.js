
import webcontrol from './PageObjects/webcontrolobjectclass.cy';
describe('page object model implement', () => {
    it('test cases', () => {
        webcontrol.Visited();
        webcontrol.CheckBox1();
        webcontrol.UncheckBox1();
        webcontrol.CheckBox();
        webcontrol.Dropdown();
        webcontrol.Autocomplete()
        webcontrol.State();
        webcontrol.Assertion()
    }) 
})