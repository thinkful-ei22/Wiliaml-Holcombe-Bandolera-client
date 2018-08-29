import React from 'react';
import { mount } from 'enzyme';
import {CodeList} from './CodeList';
import { setTopicId } from '../actions/subtopic';

import { fetchSubjects } from '../actions/subject';


describe('CodeList', () => {
    it('Dispatches the setTopicId action', () => {
       const wrapper = mount(<CodeList />);
       console.log(wrapper.debug);
    });

    // it('Dispatches the fetchSubjects action', () => {
    //     const wrapper = shallow(<NewTopicForm />);
    //     console.log(wrapper.debug());
    // });

    // it('Dispatches the setTopicId action', () => {
    //     const wrapper = shallow(<NewTopicForm />);
    //     console.log(wrapper.debug());
    // });

});