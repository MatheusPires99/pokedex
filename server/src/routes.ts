import express from 'express';

import PokemonController from './controllers/Pokemon';
import TypesEffectivenessController from './controllers/TypesEffectiveness';
import EvolutionsController from './controllers/Evolutions';

const routes = express.Router();

const pokemonController = new PokemonController();
const typesEffectivenessController = new TypesEffectivenessController();
const evolutionsController = new EvolutionsController();

routes.get('/pokemons', pokemonController.index);
routes.get('/pokemons/:pokemon_name', pokemonController.show);
routes.get('/effectiveness/:type', typesEffectivenessController.show);
routes.get('/evolutions/:id', evolutionsController.show);

export default routes;
