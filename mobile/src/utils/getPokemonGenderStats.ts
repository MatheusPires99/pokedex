const EIGHTHS = 8;

type Gender = {
  gender: 'genderless' | 'male' | 'female';
  rate?: number;
};

const getPokemonGenderStats = (gender_rate: number): Gender[] => {
  if (gender_rate === -1) {
    return [
      {
        gender: 'genderless',
      },
    ];
  }

  const femalePercentage = (gender_rate / EIGHTHS) * 100;
  const malePercentage = 100 - femalePercentage;

  return [
    { gender: 'male', rate: malePercentage },
    { gender: 'female', rate: femalePercentage },
  ];
};

export default getPokemonGenderStats;
