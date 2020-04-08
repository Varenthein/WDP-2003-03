import React from 'react';
import PropTypes from 'prop-types';
import { Swipe } from 'react-swipe-component';

const SwipeComponent = ({ children, swipeAction, activeItem, itemsCount }) => {
  const onSwipedRight = () => {
    if (activeItem - 1 >= 0) {
      swipeAction(activeItem - 1);
    }
    if (activeItem - 1 < 0) {
      swipeAction(itemsCount - 1);
    }
  };

  const onSwipedLeft = () => {
    if (activeItem + 1 < itemsCount) {
      swipeAction(activeItem + 1);
    }
    if (activeItem + 1 >= itemsCount) {
      swipeAction(itemsCount - 1 - activeItem);
    }
  };

  return (
    <Swipe
      nodeName='div'
      detectTouch='true'
      onSwipedLeft={onSwipedLeft}
      onSwipedRight={onSwipedRight}
    >
      {children}
    </Swipe>
  );
};

SwipeComponent.propTypes = {
  children: PropTypes.node,
  swipeAction: PropTypes.func,
  activeItem: PropTypes.number,
  itemsCount: PropTypes.number,
};

export default SwipeComponent;
