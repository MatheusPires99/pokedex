import express from 'express';

import PokemonController from './controllers/Pokemon';

const routes = express.Router();

const pokemonController = new PokemonController();

routes.get('/pokemons', pokemonController.index);

export default routes;
