import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';

const Brands = children => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row align-items-center ${styles.row}`}>
        <div className='col-1 text-center'>
          <button>&#x3c;</button>
        </div>
        <div className='col-10'>
          <div className='row'>
            <div className={`col-4 col-md-2 ${styles.imageOne} ${styles.image}`}></div>
            <div className={`col-4 col-md-2 ${styles.imageTwo} ${styles.image}`}></div>
            <div
              className={`col-4 col-md-2 ${styles.imageThree} ${styles.image}`}
            ></div>
            <div
              className={`col-4 col-md-2 d-none d-md-block  ${styles.imageFour} ${styles.image}`}
            ></div>
            <div
              className={`col-md-2 d-none d-md-block ${styles.imageFive} ${styles.image}`}
            ></div>
            <div
              className={`col-md-2 d-none d-md-block ${styles.imageSix} ${styles.image}`}
            ></div>
          </div>
        </div>
        <div className='col-1'>
          <button>&#x3e;</button>
        </div>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  children: PropTypes.node,
};

export default Brands;
