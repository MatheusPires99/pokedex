import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { Theme } from '../../styles/styled';

type LoadingProps = ActivityIndicatorProps & {
  size?: 'small' | 'large';
  color?: keyof Theme['colors'];
};

const Loading = ({ size, color, ...rest }: LoadingProps) => {
  return <ActivityIndicator size={size} color={color} {...rest} />;
};

Loading.defaultProps = {
  size: 'small',
  color: 'grey',
};

export default Loading;
