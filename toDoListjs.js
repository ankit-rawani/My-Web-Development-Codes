window.setTimeout(function(){
	var to_Dos = ["Learn Web Development"];
    var input = prompt("What would you like to do?");
    while(input !== "quit") {
    if(input === "list") {
    	listToDos();
    }else if(input === "new") {
    	addToDos();
    }else if(input === "delete") {
    	removeToDos();
    }
    input = prompt("What would you like to do?"); }

    function listToDos() {
	console.log("**********");
    	to_Dos.forEach(function(toDo, i){
    		console.log(i+": "+toDo);
    	})
    	console.log("**********")
}

function addToDos() {
	var newTo_Do = prompt("Enter the new To-Do");
    	to_Dos.push(newTo_Do);
    	console.log("To-Do Added");
}

function removeToDos() {
	var index = prompt("Enter the index of the to-do to be deleted");
    	to_Dos.splice(index,1);
    	console.log("To-Do Removed");
}

    console.log("OKAY, YOU QUIT THE APP");
}, 500);

