
var currentRoom = "E3";
var help = ["go (direction)","take (item name)","inventory or inv"];
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

function takeItem(itemName) {
    if(rooms[currentRoom].items[itemName] !== undefined){
        inventory.push(itemName);
        $('#game-text').append("<p>You pick up the " + itemName + "</p>");
    }else{
        $('#game-text').append("<p>There's nothing to take.</p>");
    }
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
        case "take" :
            var itemName = input.split(" ")[1];
            takeItem(itemName);
            break;
        case "inv":
            //fallthrough
        case "inventory":
            showInventory();
            break;
        default:
            $('#game-text').append("<p>Invalid command.</p>");
    }
}

const out = document.getElementById("game-text");
const isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1

$(document).ready(function() {
    $('#game-text').append("<p>" + rooms.E3.description +"<p>");

    $(document).keypress(function(key) {
        if (key.which === 13 && $('#user-input').is(':focus')){
            var input = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(input)
        }
        if (isScrolledToBottom) {
            out.scrollTop = out.scrollHeight - out.clientHeight
        }
    })
})