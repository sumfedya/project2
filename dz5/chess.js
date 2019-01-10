function chessboard() {
    var chessTable = document.createElement("table");
    chessTable.style.border = "1px solid black";
    //chessTable.style.width = "800px";
    chessTable.style.borderCollapse = "collapse";
    var i, j, cellValue = "";
    for (i = 0; i < 10; i++) {
        var tr = chessTable.insertRow(-1);
        for (j = 0; j < 10; j++) {
            cellValue = "";
            var td = tr.insertCell(-1);
            td.style.textAlign = "center";
            if (((i == 0) || (j == 0)) || ((i == 9) || (j == 9))) { ////////////////////////////////// легенда доски
                if (i == 0) {
                    td.style.height = "25px";
                    if ((j == 0) || (j == 9)) {
                        td.style.width = "25px";
                        cellValue = "";
                    } else {
                        td.style.transform = "scale(-1, -1)";
                        cellValue = String.fromCharCode(64 + j); ///////////////////////////////////// буквы перевернуто
                    }
                } else if (i == 9) {
                    td.style.height = "25px";
                    if ((j == 0) || (j == 9)) {
                        td.style.width = "25px";
                        cellValue = "";
                    } else {
                        cellValue = String.fromCharCode(64 + j); ///////////////////////////////////// буквы
                    }
                } else if (j == 0) {
                    cellValue = 9 - i; ///////////////////////////////////////////////////////////////// цифры
                } else if (j == 9) {
                    td.style.transform = "scale(-1, -1)";
                    cellValue = 9 - i; ///////////////////////////////////////////////////////////////// цифры перевернуто
                }
                td.appendChild(document.createTextNode(cellValue));
            } else { ////////////////////////////////////////////////////////////////////////////////// клетки доски     
                td.style.width = "80px";
                td.style.height = "80px";
                td.style.border = "1px solid black";
                td.style.fontSize = "50px";
                if ((i % 2) != 0) {
                    if ((j % 2) != 0) {
                        td.style.backgroundColor = "white";
                    } else {
                        td.style.backgroundColor = "black";
                    }
                } else {
                    if ((j % 2) == 0) {
                        td.style.backgroundColor = "white";
                    } else {
                        td.style.backgroundColor = "black";
                    }
                }
                if (i == 1) {
                    if ((j % 2) == 0) {
                        td.style.color = "white";
                    } else {
                        td.style.color = "black";
                    }
                    if (j == 1) {
                        cellValue = "\u265C";
                    }
                    if (j == 2) {
                        cellValue = "\u2658";
                    }
                    if (j == 3) {
                        cellValue = "\u265D";
                    }
                    if (j == 4) {
                        cellValue = "\u2655";
                    }
                    if (j == 5) {
                        cellValue = "\u265A";
                    }
                    if (j == 6) {
                        cellValue = "\u2657";
                    }
                    if (j == 7) {
                        cellValue = "\u265E";
                    }
                    if (j == 8) {
                        cellValue = "\u2656";
                    }
                }
                if (i == 2) { ////////////////////////////////////////////////////////////////////////////////// пешки
                    //td.style.transform = "scale(-1, -1)";
                    if ((j % 2) == 1) {
                        td.style.color = "white";
                        cellValue = "\u2659";
                    }
                    if ((j % 2) == 0) {
                        td.style.color = "black";
                        cellValue = "\u265F";
                    }
                }
                if (i == 7) { ////////////////////////////////////////////////////////////////////////////////// пешки
                    if ((j % 2) == 0) {
                        td.style.color = "white";
                        cellValue = "\u265F";
                    }
                    if ((j % 2) == 1) {
                        td.style.color = "black";
                        cellValue = "\u2659";
                    }
                }
                if (i == 8) {
                    if ((j % 2) == 1) {
                        td.style.color = "white";
                    } else {
                        td.style.color = "black";
                    }
                    if (j == 1) {
                        cellValue = "\u265C";
                    }
                    if (j == 2) {
                        cellValue = "\u2658";
                    }
                    if (j == 3) {
                        cellValue = "\u265D";
                    }
                    if (j == 4) {
                        cellValue = "\u2655";
                    }
                    if (j == 5) {
                        cellValue = "\u265A";
                    }
                    if (j == 6) {
                        cellValue = "\u2657";
                    }
                    if (j == 7) {
                        cellValue = "\u265E";
                    }
                    if (j == 8) {
                        cellValue = "\u2656";
                    }
                }
                td.appendChild(document.createTextNode(cellValue));
            }
        }
    }
    document.body.appendChild(chessTable);
}

chessboard();
