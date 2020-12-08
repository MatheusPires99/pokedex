import styled from 'styled-components/native';

export const Container = styled.View`
  width: 212px;
  height: 212px;
  background: ${({ theme }) => theme.colors.white}20;
  border-radius: 24px;

  position: absolute;
  top: -95px;
  left: -110px;
  transform: rotate(-12deg);
`;
