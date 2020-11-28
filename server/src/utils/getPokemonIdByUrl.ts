const getPokemonIdByUrl = (url: string): string => url.split('/')[6];

export default getPokemonIdByUrl;
