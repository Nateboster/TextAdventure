
var currentRoom = "E3";
var help = ["go (direction)","take (item name)","inventory"];
var inventory = [];

function changeRoom(dir){
    if(rooms[currentRoom].directions[dir] !== undefined){
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description +"<p>");
    }else {
        $('#game-text').append("<p>Your path is blocked.</p>");
    }
}

function showHelp() {
    $('#game-text').append("<p>Here are the possible commands</p>");
    $('#game-text').append("<p><ul>");
    for(var i = 0; i < help.length; i++) {
        $('#game-text').append("<li>" + help[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function showInventory() {
    if(inventory.length === 0) {
        $('#game-text').append("<p>You have nothing in your inventory.</p>");
        return;
    }
    $('#game-text').append("<p>---Inventory---</p>");
    $('#game-text').append("<p><ul>");
    for(var i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + inventory[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

const out = document.getElementById("game-text")
// const isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1
// if (isScrolledToBottom) {
//     out.scrollTop = out.scrollHeight - out.clientHeight
// }
let c = 0

setInterval(function() {
    // allow 1px inaccuracy by adding 1
    const isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1

    const newElement = document.createElement("div")

    newElement.textContent = format(c++, 'Bottom position:', out.scrollHeight - out.clientHeight,  'Scroll position:', out.scrollTop)

    // out.appendChild(newElement)
    $('#game-text').append("<p>Test</p>");

    // scroll to bottom if isScrolledToBottom is true
    if (isScrolledToBottom) {
        out.scrollTop = out.scrollHeight - out.clientHeight
    }
}, 500)

function format () {
    return Array.prototype.slice.call(arguments).join(' ')
}

function playerInput(input){
    var command = input.split(" ")[0];
    switch(command){
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help" :
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;
        default:
            $('#game-text').append("<p>Invalid command.</p>");
    }
}

$(document).ready(function() {
    $('#game-text').append("<p>" + rooms.E3.description +"<p>");

    $(document).keypress(function(key) {
        if (key.which === 13 && $('#user-input').is(':focus')){
            var input = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(input)
        }
    })
})