import express from 'express';

import PokemonController from './controllers/Pokemon';
import TypesEffectiveness from './controllers/TypesEffectiveness';

const routes = express.Router();

const pokemonController = new PokemonController();
const typesEffectiveness = new TypesEffectiveness();

routes.get('/pokemons', pokemonController.index);
routes.get('/effectiveness/:type', typesEffectiveness.show);

export default routes;
