import React, { useState } from 'react';
import { FlatList, Animated, ViewProps } from 'react-native';

import { Container, Dot } from './styles';

const Dots = ({ ...props }: Animated.AnimatedProps<ViewProps>) => {
  const [dots] = useState(Array.from(Array(15).keys()));

  return (
    <Container {...props}>
      <FlatList
        data={dots}
        keyExtractor={key => String(key)}
        numColumns={5}
        renderItem={({ item: dot }) => {
          return <Dot key={dot} />;
        }}
      />
    </Container>
  );
};

export default Dots;
