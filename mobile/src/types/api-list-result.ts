import { Pokemon } from './pokemon';

export type ApiListResult = {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
};

export default ApiListResult;
