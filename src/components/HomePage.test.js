import React from 'react';
import expect from 'expect';
import { mount, shallow} from 'enzyme';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders h1 tag', () => {
    const wrapper = mount(<HomePage allWeather={[]}/>);
    expect(wrapper.find('h1').text()).toEqual('Weather List By City');
  });
});
