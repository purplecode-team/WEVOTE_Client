import React, { Children } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import { useSlide, NEXT, PREV } from '../../../lib/hooks/useSlide';

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const Carousel = ({ children }) => {
  const [state, dispatch] = useSlide();
  const numItems = Children.count(children);

  const cardWidth = '322px';

  const slide = (dir) => {
    // 처음, 마지막 후보 카드에서 이전, 다음 스와이프 막기
    // if (state.pos === 0 && dir === PREV) {
    //   return true;
    // }
    // if (state.pos === numItems - 1 && dir === NEXT) {
    //   return false;
    // }
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
    // return true;
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Wrapper {...handlers} Width={cardWidth}>
      <CarouselContainer
        dir={state.dir}
        sliding={state.sliding}
        Width={cardWidth}
      >
        {Children.map(children, (child, index) => (
          <CarouselSlot
            key={index}
            order={getOrder({ index, pos: state.pos, numItems })}
          >
            {child}
          </CarouselSlot>
        ))}
      </CarouselContainer>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  width: 420px;
  transform: ${(props) => {
    return `translateX(calc(${props.Width}))`;
  }};
`;

const CarouselContainer = styled.div`
  margin: 0 20px;
  display: flex;
  transition: ${(props) => (props.sliding ? 'none' : 'transform 500ms ease')};
  transform: ${(props) => {
    if (!props.sliding) return `translateX(calc(-${props.Width}))`;
    if (props.dir === PREV)
      return `translateX(calc(2 * (-${props.Width} - 20px)))`;
    return 'translateX(0%)';
  }};
`;

const CarouselSlot = styled.div`
  flex: 1 0;
  order: ${(props) => props.order};
`;
