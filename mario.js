let pyramid = $('#pyramid');
const selectPoints = $('input[name="points"]').eq(0);
const selectBrick = $('select[name="brick"]').eq(0);
let symbol = '#';
let height = 5;
$('#construction').remove();
//These variable declarations are sloppy af

printPyramid(height, symbol);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height, symbol) {
    const space = "\xa0"
    let pound = symbol;
    let row = '';
    for (i = height - 1; i >= 0; i--) {
        pound += symbol;
        let spaces = space.repeat(i);
        row = spaces + pound;
        let newRow = $( '<p>' ).text(row);
        pyramid.append(newRow);
    }}

function deletePyramid(){
    pyramid.empty();
}
    
selectBrick.change(function(event){
    if(!event.target.value) {symbol = '#'
    } else {
    symbol = event.target.value;
    deletePyramid();
    printPyramid(5, symbol);
    }
});

selectPoints.change(function(activity){
    if(!activity.target.value) {height = 5
    } else {
        height = activity.target.value;
        deletePyramid();
        printPyramid(height, symbol);
    }
});
