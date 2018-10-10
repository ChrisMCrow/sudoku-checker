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
      this.`Row${i}`.check() ? count++ : count;
    }
    return (count == 9) ? true : false;
  }

  checkAllColumns() {
    let count = 0;
    for (let columnNumber = 1; columnNumber <= 9; columnNumber++) {
      let columnNumberValues = [];
      for (let rowNumber = 1; rowNumber <= 9; rowNumber++) {
        columnNumberValues.push(this.`Row${rowNumber}`[`Column${columnNumber}`]);
      }
      for (let number = 1; number <= 9; number++) {
        columnNumberValues.includes(number) ? count++ : count;
      }
    }
    return (count == 81) ? true : false;
  }

  checkAllBoxes() {
    let count = 0;
    for (let boxRow = 0; boxRow <= 6; boxRow + 3) {
      for (let boxColumn = 0; boxColumn <= 6; boxColumn + 3) {
        let boxValues = [];
        for (let row = 1; row <= 3; row++) {
          for (let column = 1; column <= 3; column++) {
            boxValues.push(this["Row" + (row)]["Column" + (column + boxColumn)]);
          }
          for (let number = 1; number <= 9; number++) {
            boxValues.includes(number) ? count++ : count;
          }
        }
      }
    }
    return (count == 81) ? true : false;
  }
}
