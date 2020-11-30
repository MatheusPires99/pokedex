import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  margin-top: -48px;
  padding: 0 24px;
`;

type TabLabelProps = {
  focused: boolean;
};

export const TabLabel = styled.Text<TabLabelProps>`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;

  ${props =>
    props.focused &&
    css`
      font-family: ${({ theme }) => theme.fonts.bold};
      color: ${({ theme }) => theme.colors.black};
    `}
`;
