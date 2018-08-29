import React from 'react';
import {shallow, mount} from 'enzyme';


import NewTopicForm from './new-topic-form';


describe('<NewTopicForm />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<NewTopicForm />);
        //console.log(wrapper.debug());
    });

    // it('Adds an item when form is submitted', () => {
    //         const itemToAdd = 'Merry Christmas';
    //         const wrapper = mount(<NewTopicForm />);
    //         const input = wrapper.find('#new-topic-id');
    //         input.instance().value = itemToAdd;
    //         const form = wrapper.find('.new-topic-form');
    //         form.simulate('submit');
    // })
});


