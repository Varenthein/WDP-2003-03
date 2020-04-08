import { connect } from 'react-redux';

import FeaturedProducts from './FeaturedProducts';

import { getHotDeal, countHotDeal } from '../../../redux/productsRedux.js';
import { getAllSlides, getCountSlides } from '../../../redux/slidesRedux.js';
import { getView } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  slides: getAllSlides(state),
  hotDeals: getHotDeal(state),
  countHotDeal: countHotDeal(state),
  getCountSlides: getCountSlides(state),
  viewport: getView(state),
});

/*
const mapDispatchToProps = dispatch => ({
   
});
*/

//mapDispatchToProps

export default connect(mapStateToProps)(FeaturedProducts);
