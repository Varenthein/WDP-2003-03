import React from 'react';
import { shallow } from 'enzyme';
import FeaturedProducts from './FeaturedProducts';
jest.mock('../../common/SwipeComponent/SwipeComponent', () => 'SwipeComponent');

const mockProps = {
  viewport: [{ mode: 'desktop' }, { mode: 'tablet' }, { mode: 'mobile' }],
};

describe('Component FeaturedProducts', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeaturedProducts />);
    expect(component).toBeTruthy();
  });

  it('should render for desktop width', () => {
    const component = shallow(<FeaturedProducts viewport={mockProps.viewport[0]} />);
    expect(component).toBeTruthy();
  });

  it('should render tablet width', () => {
    const component = shallow(<FeaturedProducts viewport={mockProps.viewport[1]} />);
    expect(component).toBeTruthy();
  });

  it('should render for mobile width', () => {
    const component = shallow(<FeaturedProducts viewport={mockProps.viewport[2]} />);
    expect(component).toBeTruthy();
  });
});
