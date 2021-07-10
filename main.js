guestarray = [];
function addGuest (input){
    var newGuest = input.split(",");
    guestarray = guestarray.concat(newGuest);
    document.getElementById("errorbar").innerHTML = "Guests Added!";
}
function deleteGuest(input){
    if(guestarray.indexOf(input) != -1 && guestarray.length > 0){
        guestarray.splice(guestarray.indexOf(input),1);
        document.getElementById("errorbar").innerHTML = "Guest Deleted!";
    }else if(guestarray.indexOf(input) == -1){
        document.getElementById("errorbar").innerHTML = "The guest you want to delete is not in the list.";
    }else{
        document.getElementById("errorbar").innerHTML = "There are no more guests to delete.";   
    }
}
function displayNewGuest(){
    addGuest(document.getElementById("newg").value);
    document.getElementById("list").innerHTML= "Your guests are:"+guestarray.join();
}
function displaydeletedguest(){
    deleteGuest(document.getElementById("delg").value);
    document.getElementById("list").innerHTML= "Your guests are:"+guestarray.join();
}