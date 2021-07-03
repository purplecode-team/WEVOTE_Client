import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slide from './Slide';
import data from '../../../../api/TopInformation.json';

const SLIDES_NUM = 6;
const TOTAL_SLIDES = SLIDES_NUM - 3;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<any>();
  const slideSize = 204;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${
      currentSlide * slideSize
    }px)`; // 이동하는 애니메이션
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef} >
        <Link to="pledge?id=1">
          <Slide data={data[0]} />
        </Link>
        <Link to="pledge?id=2">
          <Slide data={data[1]} />
        </Link>
        <Link to="pledge?id=3">
          <Slide data={data[2]} />
        </Link>
        <Link to="pledge?id=4">
          <Slide data={data[3]} />
        </Link>
        <Link to="pledge?id=4">
          <Slide data={data[3]} />
        </Link>
        <Link to="pledge?id=4">
          <Slide data={data[3]} />
        </Link>
      </SliderContainer>
      <ButtonContainer>
        <Button onClick={prevSlide}>Prev</Button>
        <Button onClick={nextSlide}>Next</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 60rem;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid #5d3fe8;
  margin-left: 1rem;
  padding: 0.5em 2em;
  color: #5d3fe8;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    border: 1px solid #252c44;
    background-color: #252c44;
    color: #fff;
  }
`;


const StyleLink = styled(Link)``;
