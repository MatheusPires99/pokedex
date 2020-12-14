import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import useSearch from '../../../hooks/search';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import Loading from '../../../components/Loading';

import { Content, SearchButtonContainer, SearchButton } from './styles';

const SearchModal = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const {
    handleToggleSearch,
    searchValue,
    setSearchValue,
    handleSearchPokemon,
  } = useSearch();

  const [isFocussed, setIsFocussed] = useState(false);
  const [loading, setLoading] = useState(false);

  const width = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(width, {
      toValue: isFocussed ? 48 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocussed, width]);

  const handleSearch = useCallback(async () => {
    setLoading(true);

    const pokemon = await handleSearchPokemon(searchValue);

    setLoading(false);

    if (pokemon) {
      navigation.navigate('Pokemon', {
        pokemon,
        from: 'search',
      });
    }
  }, [handleSearchPokemon, searchValue, navigation]);

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
            placeholder="Search for a Pokemon name..."
            setValue={setSearchValue}
            onFocus={() => setIsFocussed(true)}
            onBlur={() => setIsFocussed(false)}
            autoCorrect={false}
          />

          {isFocussed && (
            <SearchButtonContainer style={{ width: widthStyle }}>
              <SearchButton onPress={handleSearch}>
                {loading ? (
                  <Loading color="white" />
                ) : (
                  <Icon name="send" size={20} color={colors.white} />
                )}
              </SearchButton>
            </SearchButtonContainer>
          )}
        </Content>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default SearchModal;
