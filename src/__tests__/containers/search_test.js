import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../../containers/search'

describe("Search", () => {
  let wrapper
  const store = {data: 10}

  beforeEach(() => {
    wrapper = shallow(<Search store={store}/>)
  })

  it("should render correctly", () => {
    expect(wrapper.length).toEqual(1)
  })

})
