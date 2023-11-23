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

       // Create file labels (a, b, c...) for the bottom row and add rank numbers (8, 7, 6...) to the left side
    if (i === 7 && j === 0) {
        // For the bottom-left cell (first cell in the last row)
        td.textContent = '1a'; // Set '1a' for the bottom-left cell
        td.setAttribute('class', 'fileLabel rankLabel');
    } else if (i === 7) {
        // For the bottom row (excluding the bottom-left cell)
        let fileLabel = String.fromCharCode(97 + j); // Generate file letters (a, b, c...) for the bottom
        td.textContent = fileLabel;
        td.setAttribute('class', 'fileLabel');
    } else if (j === 0) {
        // For the leftmost column (excluding the bottom-left cell)
        td.textContent = 8 - i; // Set rank numbers (8, 7, 6...) to the left side
        td.setAttribute('class', 'rankLabel');
    }

        // Add alternating cell colors
        if ((i + j) % 2 == 0) {
            td.setAttribute('class', 'cell whitecell');
        } else {
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
