import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedProducts.module.scss';

import Button from '../../common/Button/Button';
import FeaturedProductsBox from '../../common/FeaturedProductsBox/FeaturedProductsBox';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

class FeaturedProducts extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        titleBold: PropTypes.string,
        subtitle: PropTypes.string,
        btnName: PropTypes.string,
        imgAlt: PropTypes.string,
        image: PropTypes.string,
      })
    ),
    viewport: PropTypes.object,
    hotDeals: PropTypes.array,
    countHotDeal: PropTypes.number,
    getCountSlides: PropTypes.number,
  };

  static defaultProps = {
    categories: [],
    products: [],
    feedback: [],
    viewport: {},
  };

  state = {
    activeSlideSmall: 0,
    activeSlidePage: 0,

    rating: 5,
  };

  handleSlidePageChange(newSlidePage) {
    if (newSlidePage < 0) {
      this.setState({ activeSlidePage: 3 });
    } else if (newSlidePage > this.props.getCountSlides - 1) {
      this.setState({ activeSlidePage: 0 });
    } else {
      this.setState({
        activeSlidePage: newSlidePage,
      });
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.handleSlideSmChange(
          this.state.activeSlideSmall === this.props.countHotDeal - 1
            ? 0
            : this.state.activeSlideSmall + 1
        ),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSlideSmChange(newSlide) {
    setTimeout(() => this.setState({ activeSlideSmall: newSlide }), 100);
  }

  render() {
    const { slides, hotDeals, countHotDeal, getCountSlides, viewport } = this.props;
    const { activeSlideSmall, activeSlidePage } = this.state;

    const dotsSlides = [];
    for (let i = 0; i < countHotDeal; i++) {
      dotsSlides.push(
        <li key={i}>
          <a
            onClick={() => {
              this.handleSlideSmChange(i);

              clearInterval(this.interval);

              this.interval = setInterval(
                () =>
                  this.handleSlideSmChange(
                    this.state.activeSlideSmall === countHotDeal - 1
                      ? 0
                      : this.state.activeSlideSmall + 1
                  ),
                10000
              );

              clearInterval(this.interval);
            }}
            className={i === activeSlideSmall ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row '}>
            <div
              className={`col-4 col-sm-4 col-md-4 col-lg-4  ${
                this.props.viewport.mode === 'mobile' ? styles.hidden : ''
              }`}
            >
              <div className={styles.altPanel}>
                <div>HOT DEALS</div>

                <div className={'col-auto ' + styles.dots}>
                  <ul>{dotsSlides}</ul>
                </div>
              </div>

              <TransitionGroup className='row'>
                {(hotDeals || [])
                  .slice(activeSlideSmall * 1, (activeSlideSmall + 1) * 1)
                  .map(item => (
                    <CSSTransition
                      key={item.id}
                      timeout={3000}
                      classNames='fade'
                      appear={true}
                      exit={false}
                      classNames={{
                        appear: styles.fadeAppear,
                        appearActive: styles.fadeAppearActive,
                        enter: styles.fadeEnter,
                        enterActive: styles.fadeEnterActive,
                        exit: styles.fadeExit,
                        exitActive: styles.fadeExitActive,
                        exitActiveDone: styles.fadeExitActiveDone,
                      }}
                    >
                      <div key={item.id} className='col-12'>
                        <FeaturedProductsBox {...item} />
                      </div>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </div>

            <div
              className={`col-12 col-sm-12 col-md-8 col-lg-8 ${
                this.props.viewport.mode === 'mobile' ? styles.h100 : ''
              }`}
            >
              <SwipeComponent
                itemsCount={getCountSlides}
                activeItem={this.state.activeSlidePage}
                swipeAction={this.handleSlidePageChange.bind(this)}
              >
                <TransitionGroup className='row'>
                  {(slides || [])
                    .slice(activeSlidePage, activeSlidePage + 1)
                    .map(item => (
                      <CSSTransition
                        key={item.id}
                        timeout={3000}
                        classNames='fade'
                        appear={true}
                        exit={false}
                        classNames={{
                          appear: styles.fadeAppear,
                          appearActive: styles.fadeAppearActive,
                          enter: styles.fadeEnter,
                          enterActive: styles.fadeEnterActive,
                          exit: styles.fadeExit,
                          exitActive: styles.fadeExitActive,
                          exitActiveDone: styles.fadeExitActiveDone,
                        }}
                      >
                        <div key={item.id} className={styles.shopNow}>
                          <img src={item.image} alt={item.imgAlt} />

                          <div
                            className={`${styles.shadow} ${
                              this.props.viewport.mode === 'mobile'
                                ? styles.shadowSm
                                : ''
                            }`}
                          >
                            <div className={styles.title}>
                              <div>{item.title}</div>
                              <div>{item.titleBold}</div>
                            </div>
                            <div className={styles.subtitle}>{item.subtitle}</div>
                          </div>

                          <div
                            className={`${styles.buttons} ${
                              this.props.viewport.mode === 'mobile'
                                ? styles.buttonsSm
                                : ''
                            }`}
                          >
                            <Button variant='white'>{item.btnName}</Button>
                          </div>
                        </div>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </SwipeComponent>

              <div className={styles.arrowWrapper}>
                <Button
                  variant='arrow'
                  onClick={e => {
                    e.preventDefault();
                    this.handleSlidePageChange(activeSlidePage - 1);
                  }}
                >
                  <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </Button>
                <Button
                  variant='arrow'
                  onClick={e => {
                    e.preventDefault();
                    this.handleSlidePageChange(activeSlidePage + 1);
                  }} //e,
                >
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedProducts;
