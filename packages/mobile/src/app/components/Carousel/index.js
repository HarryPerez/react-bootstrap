import React, { useEffect, useRef, useState } from 'react';
import { View, ViewPropTypes } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { number, arrayOf, shape, func, bool, string } from 'prop-types';

import Pagination from './components/Pagination';

function CarouselComponent({
  data,
  containerStyle,
  activeIndex,
  sliderWidth,
  withPagination = true,
  activeDotColor,
  inactiveDotColor,
  dotSize,
  onSnapToItem,
  ...carouselProps
}) {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(activeIndex);
  useEffect(() => {
    carouselRef.current.snapToItem(activeIndex);
    setIndex(activeIndex);
  }, [activeIndex]);
  const handleSnap = newIndex => {
    onSnapToItem?.(newIndex);
    setIndex(newIndex);
  };
  return (
    <View style={containerStyle}>
      <Carousel
        ref={carouselRef}
        data={data}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        enableMomentum
        onSnapToItem={handleSnap}
        firstItem={index}
        getItemLayout={(_, itemIndex) => ({
          offset: sliderWidth * itemIndex,
          length: sliderWidth,
          index: itemIndex
        })}
        {...carouselProps}
      />
      {withPagination && (
        <Pagination
          activeIndex={index}
          dotsLength={data.length}
          activeDotColor={activeDotColor}
          inactiveDotColor={inactiveDotColor}
          dotSize={dotSize}
        />
      )}
    </View>
  );
}

CarouselComponent.propTypes = {
  activeIndex: number.isRequired,
  activeDotColor: string.isRequired,
  containerStyle: ViewPropTypes.style,
  data: arrayOf(shape()).isRequired,
  dotSize: number,
  inactiveDotColor: string.isRequired,
  onSnapToItem: func,
  renderItem: func.isRequired,
  sliderWidth: number.isRequired,
  withPagination: bool
};

export default CarouselComponent;
