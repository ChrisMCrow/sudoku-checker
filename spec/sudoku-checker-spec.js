import { Row, GameBoard } from '../src/sudoku-checker.js';

const row1 = new Row(5, 3, 4, 6, 7, 8, 9, 1, 2);
const row2 = new Row(6, 7, 2, 1, 9, 5, 3, 4, 8);
const row3 = new Row(1, 9, 8, 3, 4, 2, 5, 6, 7);
const row4 = new Row(8, 5, 9, 7, 6, 1, 4, 2, 3);
const row5 = new Row(4, 2, 6, 8, 5, 3, 7, 9, 1);
const row6 = new Row(7, 1, 3, 9, 2, 4, 8, 5, 6);
const row7 = new Row(9, 6, 1, 5, 3, 7, 2, 8, 4);
const row8 = new Row(2, 8, 7, 4, 1, 9, 6, 3, 5);
const row9 = new Row(3, 4, 5, 2, 8, 6, 1, 7, 9);
const legalBoard = new GameBoard(row1, row2, row3, row4, row5, row6, row7, row8, row9);

describe('SudokuChecker', function() {
  
  it('should check if a single row contains all numbers 1-9', function() {
    expect(row1.check()).toEqual(true);
  });

  it('should check if each row contains numbers 1-9', function() {
    expect(legalBoard.check()).toEqual(true);
  });

  it('should check if a single columns contains all numbers 1-9', function(){
    expect(legalBoard.checkColumn1()).toEqual(true);
  });

  it('should check if each column contains all numbers 1-9', function(){
    expect(legalBoard.checkAllColumns()).toEqual(true);
  });
});