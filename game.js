var marray = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', '+', '?', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', '+', '?'];
var tiles_flipped = 0;
var flipped_values = [];
var flipped_value_id = [];
var shuffled_array = [];

function shuffle(array) {
    var copy = [], n = array.length, i;
    while (n) {
        i = Math.floor(Math.random() * array.length);
        if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
        }
    }

    return copy;
}


 function newGame() {
    setInterval(time,1000);
    document.getElementById('moves').innerHTML = "0";
    document.getElementById('time').innerHTML = "80";
    document.getElementById('timer').style.display = "";
    document.getElementById('start').style.display = 'none';
    document.getElementById('memory').style.display = 'block';
    shuffled_array = shuffle(marray);
    var insert = '';
    for (var i=0;i<shuffled_array.length;i++){
         insert += '<div id="tile_' + i + '" onclick="flip_tile(this,\'' + shuffled_array[i] + '\')"></div>';
     }
     document.getElementById('memory').innerHTML = insert;
 }

 function flip_tile(tile,val){
     moves = document.getElementById('moves').innerHTML;
     document.getElementById('moves').innerHTML = parseInt(moves)+1;
    if(tile.innerHTML=="" && flipped_values.length<2){
        tile.style.background = "white";
        tile.innerHTML = val;
        if(flipped_values.length==0){
            flipped_values.push(val);
            flipped_value_id.push(tile.id);
        }
        else if (flipped_values.length==1){
            flipped_values.push(val);
            flipped_value_id.push(tile.id);
            if(flipped_values[0]==flipped_values[1]){
                tiles_flipped+=2;
                flipped_values = [];
                flipped_value_id = [];
                if(tiles_flipped==marray.length){
                    move = document.getElementById('moves').innerHTML
                    alert("You have completed the game\nNo of moves = "+move);
                    window.location.reload();
                }
            }
            else{
                function flip_back(){
                    document.getElementById(flipped_value_id[0]).style.background = 'url(assets/q.png) no-repeat center';
                    document.getElementById(flipped_value_id[1]).style.background = 'url(assets/q.png) no-repeat center';
                    document.getElementById(flipped_value_id[0]).innerHTML = "";
                    document.getElementById(flipped_value_id[1]).innerHTML = "";
                    flipped_values = [];
                    flipped_value_id = [];
                }
                setTimeout(flip_back,1000);
            }
        }
    }
 }

 function time(){
    time_now = document.getElementById('time').innerHTML;
    if(parseInt(time_now)==0){
        alert("Time's up. You have lost");
        window.location.reload();

    }
    document.getElementById('time').innerHTML = parseInt(time_now)-1;
 }

 function moves(){

 }

