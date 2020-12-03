import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const HeaderContent = styled.View`
  padding: 0 24px;
  height: 64px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;
