import styled, { css } from 'styled-components/native';

import Text from '../Text';

type TypeProps = {
  size: 'regular' | 'small';
};

export const Container = styled.View<TypeProps>`
  flex-direction: ${props => (props.size === 'regular' ? 'row' : 'column')};
  align-items: ${props => (props.size === 'regular' ? 'center' : 'flex-start')};
`;

export const Type = styled.View<TypeProps>`
  background: ${({ theme }) => theme.colors.white}30;
  padding: ${props => (props.size === 'regular' ? '6px 28px' : '4px 12px')};
  border-radius: 16px;
  margin-right: 8px;

  ${props =>
    props.size === 'regular'
      ? css`
          margin-right: 8px;
        `
      : css`
          margin-top: 4px;
        `}
`;

export const TypeText = styled(Text).attrs({
  variant: 'caption',
  color: 'white',
})<TypeProps>`
  ${props =>
    props.size === 'small' &&
    css`
      font-size: 8px;
      line-height: 10px;
    `}
`;
