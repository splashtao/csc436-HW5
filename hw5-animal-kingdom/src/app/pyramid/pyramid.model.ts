import { PyramidRow } from '../pyramid-row/pyramid-row.model';

export class Pyramid {

  pyramidRows: PyramidRow[];

  constructor(pyramidRows: PyramidRow[]) {
    this.pyramidRows = pyramidRows;
  }
}