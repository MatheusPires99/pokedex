import React, { useMemo } from 'react';

import TabWrapper from '../../../../components/TabWrapper';
import Text from '../../../../components/Text';
import usePokemon from '../../../../hooks/pokemon';
import { convertValues } from '../../../../utils';

import { PokemonProportionsContainer, PokemonProportions } from './styles';

const About = () => {
  const { pokemon } = usePokemon();

  const pokemonFormatted = useMemo(() => {
    return {
      ...pokemon,
      heightInMeters: convertValues.decimeterToMeter(pokemon.height),
      heightInFeet: convertValues.decimeterToFeet(pokemon.height),
      weightInKilograms: convertValues.hectogramsToKilograms(pokemon.weight),
      weightInPounds: convertValues.hectogramsToPounds(pokemon.weight),
    };
  }, [pokemon]);

  return (
    <TabWrapper>
      <Text>{pokemon.description}</Text>

      <PokemonProportionsContainer>
        <PokemonProportions>
          <Text color="grey" bold style={{ marginBottom: 8 }}>
            Height
          </Text>

          <Text bold>
            {pokemonFormatted.heightInMeters} m ({pokemonFormatted.heightInFeet}
            ft)
          </Text>
        </PokemonProportions>

        <PokemonProportions>
          <Text color="grey" bold style={{ marginBottom: 8 }}>
            Height
          </Text>

          <Text bold>
            {pokemonFormatted.weightInKilograms} kg (
            {pokemonFormatted.weightInPounds} lbs)
          </Text>
        </PokemonProportions>
      </PokemonProportionsContainer>
    </TabWrapper>
  );
};

export default About;
