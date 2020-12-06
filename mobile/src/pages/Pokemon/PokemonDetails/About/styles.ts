import styled from 'styled-components/native';

import Text from '../../../../components/Text';

export const Section = styled.View`
  margin-bottom: 32px;
`;

export const SectionTitle = styled(Text).attrs({
  variant: 'body1',
  bold: true,
})`
  margin-bottom: 8px;
`;

export const SectionContent = styled.View`
  margin-top: 16px;

  flex-direction: row;
  align-items: center;
`;

export const SectionSubtitle = styled(Text).attrs({
  color: 'grey',
})`
  width: 100px;
`;

export const SectionText = styled(Text).attrs({
  bold: true,
})``;

export const ShadowContainer = styled.View`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 2px 6px 15px rgba(0, 0, 0, 0.2);
  padding: 24px;

  flex-direction: row;
  justify-content: space-between;
`;
