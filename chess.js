// chess.js

// Create the chessboard container element
let chessContainer = document.createElement('div');
chessContainer.setAttribute('id', 'ChessContainer');

// Create the chessboard table
let ChessTable = document.createElement('table');

// Loop to create rows and cells
for (let i = 0; i < 8; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < 8; j++) {
    let td = document.createElement('td');

    if ((i + j) % 2 == 0) {
        td.setAttribute('class', 'cell whitecell');
        
    }else {
        td.setAttribute('class', 'cell blackcell');
    }
    tr.appendChild(td);

  }

  ChessTable.appendChild(tr);
}

// Append the chessboard table to the container
chessContainer.appendChild(ChessTable);
ChessTable.setAttribute('cellspacing', '0');

// Append the container to the document body
document.body.appendChild(chessContainer);
