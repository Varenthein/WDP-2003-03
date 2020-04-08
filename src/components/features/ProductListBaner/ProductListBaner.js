import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductListBaner.module.scss';

import { Link } from 'react-router-dom';

const ProductListBaner = ({ match }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row no-gutters align-items-center'>
        <div className={'col-12 col-md-12 ' + styles.baner}>
          <div className={styles.title}>
            <div>BEDROOM</div>
            <div>FURNITURE</div>
          </div>
          <div className={styles.subtitle}>
            ALWAYS <span>25%</span> OFF OR MORE
          </div>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to={`/shop/${match.params.categoryId}`}>
              {match.params.categoryId}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

ProductListBaner.propTypes = {
  children: PropTypes.node,
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string,
    }),
  }),
};

ProductListBaner.defaultProps = {
  match: {
    params: {},
  },
};

export default ProductListBaner;
