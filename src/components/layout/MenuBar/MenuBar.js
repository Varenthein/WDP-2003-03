import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';

import { Link } from 'react-router-dom';

class MenuBar extends React.Component {
  static defaultProps = {
    pages: ['', 'furniture', 'chair', 'table', 'sofa', 'bedroom', 'blog'],
  };

  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
    });
  }

  render() {
    const { pages } = this.props;
    const { activePage } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col'>
              <ProductSearch />
            </div>
            <div className={'col-auto ' + styles.menu}>
              <ul>
                <li>
                  <Link
                    to='/'
                    className={pages[0] === activePage ? styles.active : ''}
                    onClick={() => this.handlePageChange(pages[0])}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/shop/furniture`}
                    className={pages[1] === activePage ? styles.active : ''}
                    onClick={() => this.handlePageChange(pages[1])}
                  >
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    to='/shop/chair'
                    className={pages[2] === activePage ? styles.active : ''}
                    onClick={() => this.handlePageChange(pages[2])}
                  >
                    Chair
                  </Link>
                </li>
                <li>
                  <Link
                    to='/shop/table'
                    className={pages[3] === activePage ? styles.active : ''}
                    onClick={() => this.handlePageChange(pages[3])}
                  >
                    Table
                  </Link>
                </li>
                <li>
                  <Link
                    to='/shop/sofa'
                    className={pages[4] === activePage ? styles.active : ''}
                    onClick={() => this.handlePageChange(pages[4])}
                  >
                    Sofa
                  </Link>
                </li>
                <li>
                  <Link
                    to='/shop/bedroom'
                    className={pages[5] === activePage ? styles.active : ''}
                    onClick={() => this.handlePageChange(pages[5])}
                  >
                    Bedroom
                  </Link>
                </li>
                <li>
                  <Link
                    to='/shop/blog'
                    className={pages[6] === activePage ? styles.active : ''}
                    onClick={() => this.handlePageChange(pages[6])}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  children: PropTypes.node,
  pages: PropTypes.array,
};

export default MenuBar;
