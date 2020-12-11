import React, { useEffect, useMemo, useState } from 'react';
import { Animated, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import { useSearch } from '../../../hooks/search';

import { Content, SearchButtonContainer, SearchButton } from './styles';

type SearchModalProps = {
  setSearchValue: (value: string) => void;
};

const SearchModal = ({ setSearchValue }: SearchModalProps) => {
  const { colors } = useTheme();
  const { handleToggleSearch } = useSearch();

  const [isFocussed, setIsFocussed] = useState(false);

  const width = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(width, {
      toValue: isFocussed ? 48 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocussed, width]);

  const widthStyle = width.interpolate({
    inputRange: [0, 48],
    outputRange: [0, 48],
    extrapolate: 'clamp',
  });

  return (
    <KeyboardAvoidingView
      style={{ zIndex: 10, position: 'absolute', bottom: 0 }}
      behavior="position"
    >
      <Modal handleCloseModal={handleToggleSearch}>
        <Content>
          <Input
            icon="search"
            placeholder="Search for a Pokemon name"
            setValue={setSearchValue}
            onFocus={() => setIsFocussed(true)}
            onBlur={() => setIsFocussed(false)}
          />

          {isFocussed && (
            <SearchButtonContainer style={{ width: widthStyle }}>
              <SearchButton>
                <Icon name="send" size={20} color={colors.white} />
              </SearchButton>
            </SearchButtonContainer>
          )}
        </Content>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default SearchModal;
