import React from 'react';
import { shallow } from 'enzyme';
import ProductListBaner from './ProductListBaner';

describe('ProductListBaner', () => {
  it('renders without crashing', () => {
    shallow(<ProductListBaner />);
  });
});
