it('Should render items in the todo list', () => {
    const items = ['Buy Milk', 'Learn React'];
    const wrapper =  shallow(<App />);
    const lis = wrapper.find('.todo-item');
    //each rendered item should equal to items
    items.forEach((items, index)=> {
        expect(lis.at(index).text()).toEqual(items[index]);
    })

})

//