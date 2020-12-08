const EIGHTHS = 8;

const getPokemonGenderStats = (gender_rate: number) => {
  const femalePercentage = (gender_rate / EIGHTHS) * 100;
  const malePercentage = 100 - femalePercentage;

  return [
    { gender: 'male', rate: malePercentage },
    { gender: 'female', rate: femalePercentage },
  ];
};

export default getPokemonGenderStats;
