import  alertbuttons  from "./PageObjects/Objectclass";
describe('test suite', () => {
    it('handling web controls', () => {   // automated checked boxes.
        alertbuttons.Visited(); 
        alertbuttons.Option1();
        alertbuttons.Uncheck();
        alertbuttons.alert();
        alertbuttons.Confirm();
        alertbuttons.WindowAlert();
    });
})