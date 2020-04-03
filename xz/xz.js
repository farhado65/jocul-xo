var activePlayer = 'x';
$('.table div').click(makeMove);

function makeMove() {
    $(this).text(activePlayer)
           .addClass(activePlayer == 'x' ? 'x' : 'z')
           .unbind('click', makeMove);
    activePlayer = activePlayer == 'x' ? '0' : 'x';
    checkEndGame();         
}

function checkEndGame() {
    let cells = $('.table div').toArray();
    checkComplete(cells.filter((value, index) => index < 3));
    checkComplete(cells.filter((value, index) => index > 2 && index < 6));
    checkComplete(cells.filter((value, index) => index > 5));
    checkComplete(cells.filter((value, index) => index % 3 == 0));
    checkComplete(cells.filter((value, index) => index % 3 == 1));
    checkComplete(cells.filter((value, index) => index % 3 == 2));
    checkComplete(cells.filter((value, index) => index % 4 == 0));
    checkComplete(cells.filter((value, index) => [2, 4, 6].includes(index)));
}

/**
 * 
 * @param {Array} cells 
 */
function checkComplete(cells) {
    if(cells.every(cell => $(cell).text() == 'x')
    || cells.every(cell => $(cell).text() == '0')
    ) {
        $('.end').addClass('visible');
    }
}