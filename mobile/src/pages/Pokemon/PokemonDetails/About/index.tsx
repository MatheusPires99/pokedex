import React, { useMemo } from 'react';

import TabWrapper from '../../../../components/TabWrapper';
import usePokemon from '../../../../hooks/pokemon';
import { convertValues } from '../../../../utils';

import {
  PokemonDescription,
  PokemonProportionsContainer,
  PokemonProportions,
  ProportionsTitle,
  ProportionsNumber,
} from './styles';

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
      <PokemonDescription>{pokemon.description}</PokemonDescription>

      <PokemonProportionsContainer>
        <PokemonProportions>
          <ProportionsTitle>Height</ProportionsTitle>

          <ProportionsNumber>
            {pokemonFormatted.heightInMeters} m ({pokemonFormatted.heightInFeet}
            ft)
          </ProportionsNumber>
        </PokemonProportions>

        <PokemonProportions>
          <ProportionsTitle>Weight</ProportionsTitle>

          <ProportionsNumber>
            {pokemonFormatted.weightInKilograms} kg (
            {pokemonFormatted.weightInPounds} lbs)
          </ProportionsNumber>
        </PokemonProportions>
      </PokemonProportionsContainer>
    </TabWrapper>
  );
};

export default About;
