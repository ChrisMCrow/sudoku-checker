export class Row {
  constructor(col1, col2, col3, col4, col5, col6, col7, col8, col9) {
    this.Column1 = col1;
    this.Column2 = col2;
    this.Column3 = col3;
    this.Column4 = col4;
    this.Column5 = col5;
    this.Column6 = col6;
    this.Column7 = col7;
    this.Column8 = col8;
    this.Column9 = col9;
  }

  check() {
    var rowValues = Object.values(this);
    let count = 0;
    for (let i = 1; i <= 9; i++) {
      rowValues.includes(i) ? count++ : count;
    }
    return (count == 9) ? true : false;
  }
}

export class GameBoard {
  constructor(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
    this.Row1 = row1;
    this.Row2 = row2;
    this.Row3 = row3;
    this.Row4 = row4;
    this.Row5 = row5;
    this.Row6 = row6;
    this.Row7 = row7;
    this.Row8 = row8;
    this.Row9 = row9;
  }

  checkAllRows() {
    let count = 0;
    for (let i = 1; i <= 9; i++) {
      this[`Row${i}`].check() ? count++ : count;
    }
    return (count == 9) ? true : false;
  }

  checkAllColumns() {
    let count = 0;
    for (let columnNumber = 1; columnNumber <= 9; columnNumber++) {
      let columnNumberValues = [];
      for (let rowNumber = 1; rowNumber <= 9; rowNumber++) {
        columnNumberValues.push(this[`Row${rowNumber}`][`Column${columnNumber}`]);
      }
      for (let number = 1; number <= 9; number++) {
        columnNumberValues.includes(number) ? count++ : count;
      }
    }
    return (count == 81) ? true : false;
  }

  checkAllGrids() {
    let count = 0;
    for (let xGrid = 0; xGrid <= 6; xGrid += 3) {
      for (let yGrid = 0; yGrid <= 6; yGrid += 3) {
        let gridValues = [];
        for (let row = 1; row <= 3; row++) {
          for (let column = 1; column <= 3; column++) {
            gridValues.push(this[`Row${row + xGrid}`][`Column${column + yGrid}`]);
          }
        }
        for (let number = 1; number <= 9; number++) {
          gridValues.includes(number) ? count++ : count;
        }
      }
    }
    return (count == 81) ? true : false;
  }

  check() {
    return (this.checkAllRows() && this.checkAllColumns() && this.checkAllGrids()) ? true : false;
  }
}
