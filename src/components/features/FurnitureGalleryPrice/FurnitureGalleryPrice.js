import React from 'react';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FurnitureGalleryPrice.module.scss';

class FurnitureGalleryPrice extends React.Component {
  render() {
    const { stars, name, price, oldPrice } = this.props;
    return (
      <div>
        <div className={styles.price}>
          <h5 className={styles.regularPrice}>{'$' + price}</h5>
          <s>{oldPrice && <h6 className={styles.oldPrice}>{'$' + oldPrice}</h6>}</s>
        </div>
        <div className={styles.name}>
          <div className={styles.decorationRight}></div>
          <div className={styles.decorationLeft}></div>
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

FurnitureGalleryPrice.propTypes = {
  stars: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
};

export default FurnitureGalleryPrice;
