import { Animal } from '../animal.model';

export class PyramidRow {
  animals: Animal[];


  constructor(animals: Animal[]) {
    this.animals = animals;

  }
}