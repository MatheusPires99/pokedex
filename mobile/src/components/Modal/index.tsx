import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Animated } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

import { Container, Content, Line } from './styles';

type ModalProps = {
  handleCloseModal: () => void;
};

const Modal = ({
  handleCloseModal,
  children,
}: PropsWithChildren<ModalProps>) => {
  const [modalHeight, setModalHeight] = useState(0);

  const translateY = useMemo(() => new Animated.Value(modalHeight), [
    modalHeight,
  ]);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = true;

      const { translationY } = event.nativeEvent;

      if (translationY >= 50) {
        opened = false;
        translateY.flattenOffset();
      } else {
        opened = true;
      }

      Animated.timing(translateY, {
        toValue: opened ? 0 : modalHeight,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        if (opened === false) {
          handleCloseModal();
        }
        translateY.extractOffset();
      });
    }
  };

  const containerStyle = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [0, modalHeight],
          outputRange: [0, modalHeight],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Container
        style={containerStyle}
        onLayout={e => setModalHeight(e.nativeEvent.layout.height)}
      >
        <Line />

        <Content>{children}</Content>
      </Container>
    </PanGestureHandler>
  );
};

export default Modal;
