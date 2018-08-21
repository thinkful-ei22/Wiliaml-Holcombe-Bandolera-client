


import actions;
 
describe('increment', () => {
    it('Should return an action', () => {
        const by = 5;
        const action = increment(by);
        expect(action.type).toEqual(DECREMENT);
        expect(action.by).toEqual(by);
    
    });
});



