import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';
import Constants from 'expo-constants';

import { HEADER_HEIGHT } from '../../../constants';

import { TAB_BUTTON_WIDTH } from '.';

const { height, width } = Dimensions.get('window');

export const Container = styled(Animated.View)`
  height: ${height - (Constants.statusBarHeight + HEADER_HEIGHT)}px;
  background: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 16px 0;
`;

export const Tabs = styled.View`
  padding: 16px 0 24px;
  margin: 0 24px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.lightGrey};
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TabButton = styled.TouchableOpacity`
  height: 24px;
  width: ${TAB_BUTTON_WIDTH}px;

  align-items: center;
  justify-content: center;
`;

export const SelectedIndicator = styled(Animated.View)`
  height: 2px;
  width: ${TAB_BUTTON_WIDTH}px;
  background: ${({ theme }) => theme.colors.blue};

  position: absolute;
  bottom: -1px;
`;

export const SlideWrapper = styled.View`
  width: ${width}px;
  padding: 24px;
`;
