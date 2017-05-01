$(document).keydown(function(e){
    reCalculate(e);
    return false;
});

let currCell = $('td').first();
 $(currCell).focus();
$('#table').keydown(function (e) {
    let c = "";
    if (e.which == 39) {
        e.preventDefault();
        // Right Arrow
        c = currCell.closest('tr').next().find('td:eq(' + currCell.index() + ')');
    } else if (e.which == 37) { 
        // Left Arrow
        c = currCell.closest('tr').prev().find('td:eq(' + currCell.index() + ')');
    } else if (e.which == 38) { 
        e.preventDefault();
        // Up Arrow
        c = currCell.next();
    } else if (e.which == 40) { 
        // Down Arrow
        e.preventDefault();
        c = currCell.prev();
    }
    // If we didn't hit a boundary, update the current cell
    if (c.length > 0) {
        currCell = c;
        currCell.focus();
    }
});

const reCalculate = (e) => {
    let rows = $('#table tr').length;
    let columns = $('#table tr:eq(0) td').length;    
    if (e.keyCode == 37) { //move left or wrap
        active = (active>0)?active-1:active;
    }
    if (e.keyCode == 38) { // move up
        active = (active-columns>=0)?active-columns:active;
    }
    if (e.keyCode == 39) { // move right or wrap
       active = (active<(columns*rows)-1)?active+1:active;
    }
    if (e.keyCode == 40) { // move down
        active = (active+columns<=(rows*columns)-1)?active+columns:active;
    }
}