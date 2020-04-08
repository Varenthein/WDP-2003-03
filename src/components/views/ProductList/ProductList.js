import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

import ProductListBaner from '../../features/ProductListBaner/ProductListBaner';

class ProductList extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.shape({
      params: PropTypes.shape({
        categoryId: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    match: {
      params: {},
    },
  };

  render() {
    const { match } = this.props;

    return (
      <div className={styles.root}>
        <ProductListBaner match={match} />
        This is ProductList
        <div className={styles.category}>{match.params.categoryId}</div>
      </div>
    );
  }
}

export default ProductList;
