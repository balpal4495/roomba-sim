$(document).keydown(function(e){
    reCalculate(e);
    cleanTile();
    return false;
});

let currCell = $('td').first();
 $(currCell).focus();
 $('td').click(function(){
   active = $(this).closest('table').find('td').index(this);
   currCell = $(this);
   cleanTile();
});


// controls work differently as they natrually would because table has been rotated
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
    let hooverPosition = {x: 0, y: 0};
    hooverPosition.x = c[0].cellIndex; 
    hooverPosition.y = c[0].parentNode.rowIndex; 
    printHooverPosition(hooverPosition);
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
    let dirtyClasses = $('#table .dirty').length;
    dirtyCount(dirtyClasses);
}

const cleanTile = () => {
  let currentCell = currCell[0];
  if ( $(currentCell).hasClass('dirty')) {
    $(currentCell).removeClass('dirty');
  };
  $(currentCell).addClass('clean');
}

const printHooverPosition = (hoover) => {
    $('#xPos').text(hoover.x);
    $('#yPos').text(hoover.y);
}

const dirtyCount = (dirty) => {
     $('#dirtyCount').text(dirty);
}