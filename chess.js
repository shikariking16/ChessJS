// Create the chessboard container element
let chessContainer = document.createElement('div');
chessContainer.setAttribute('id', 'ChessContainer');

// Create the chessboard table
let ChessTable = document.createElement('table');

// Loop to create rows and cells
for (let i = 0; i < 8; i++) {
    let tr = document.createElement('tr');
    let rankLabel = 8 - i; // Generate rank numbers (8, 7, 6...) for the left side

    for (let j = 0; j < 8; j++) {
        let td = document.createElement('td');

        // Create file labels (a, b, c...) for the bottom row
        if (i === 7 ) {
            let fileLabel = String.fromCharCode(96 + j); // Generate file letters (a, b, c...) for the bottom
            td.textContent = fileLabel;
            td.setAttribute('class', 'fileLabel');
        }

        // Add rank numbers (8, 7, 6...) to the left side
        if (j === 0) {
            td.textContent = rankLabel;
            td.setAttribute('class', 'rankLabel');
            rankLabel++;
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
