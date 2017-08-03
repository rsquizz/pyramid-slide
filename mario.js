let pyramid = document.getElementById('pyramid');
let selectPoints = document.querySelector('input[name="points"]');
let selectBrick = document.querySelector('select[name="brick"]');
let symbol = '#';
let height = 5;
let divTwo = document.getElementById('construction');
    divTwo.parentNode.removeChild(divTwo);
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
    const space = "&nbsp"
    let pound = symbol;
    let row = '';
    for (i = height - 1; i >= 0; i--) {
        pound += symbol;
        let spaces = space.repeat(i);
        row = spaces + pound;
        pyramid.innerHTML+="<p>" + row + "</p>";
    }}

function deletePyramid(){
    pyramid.innerHTML =''
}
    
selectBrick.addEventListener("change", function(event){
    if(!event.target.value) {symbol = '#'
    } else {
    symbol = event.target.value;
    deletePyramid();
    printPyramid(5, symbol);
    }
});

selectPoints.addEventListener("change", function(activity){
    if(!activity.target.value) {height = 5
    } else {
        height = activity.target.value;
        deletePyramid();
        printPyramid(height, symbol);
    }
});
