let columns = 26;
let rows = 100;
const headerContainer = document.querySelector('.header');
const serialNumbersContainer = document.querySelector('.sno');
const mainContainer = document.querySelector('.main');

function createHeaderCells(){

    for(let i = 0;i <= columns;i++){
        const headerCell = document.createElement('div');
        headerCell.className = 'header-cell cell';
        if(i !== 0){

            headerCell.innerText = String.fromCharCode(64+i);
        }

        headerContainer.appendChild(headerCell);
    }
}

function createSerialNumberCells(){

    for(let i = 1;i <= rows;i++){

        const snoCell = document.createElement('div');
        snoCell.className ='sno-cell cell';
        snoCell.innerText = i;
        serialNumbersContainer.appendChild(snoCell);
    }
}

function createRow(rowNumber){

    // creates a row and each ow will have 26 cols

    const row = document.createElement('div');
    row.className = 'row';
    for(let i = 1;i <= columns;i++){

        const cell = document.createElement('div');
        cell.className = 'main-cell cell';
        cell.contentEditable=true;
        row.appendChild(cell);

        cell.id = String.fromCharCode(64+i) + rowNumber;

        // adding focus event for eveyrcell

        cell.addEventListener('focus',onCellFocus);

        // add input event for everycell

        cell.addEventListener('input',onFormChange);
    }
    mainContainer.appendChild(row);

}

function buildMainSection(){

    for(let i = 1;i <= rows;i++){

        createRow(i);
    }
}



createHeaderCells();
createSerialNumberCells();
buildMainSection();