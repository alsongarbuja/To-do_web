var tasks = [];
var list = document.querySelector("#task");

var uCompleted = document.querySelector("#uList");
var Completed = document.querySelector("#cList");


/* add the task to the task array and call function render() when the plus is clicked*/
function add()
{
    // the code runs only if the input has some values or text in it
    if(list.value)
    {
        tasks.push(
            {
                name: list.value,
                isComplete: false
            }
        );
            
        // after the list is pushed in the array then the input will be erased itself
        list.value = "";
        render();
        list.focus();
    }
};


/*
* Its completed now
? how to focus in a input filed with keydown event
= use the .focus()function,
 */
// it focus on the input filed when pressed the + button
document.body.addEventListener("keyup", function(e){
    if(e.keyCode == 107){
        list.focus();
    }
}, false);


/*
 ! Do not change this code
*/
/*add the task to the array and call the add() function when enter is hit in input */
list.addEventListener("keydown", function(event){
    console.log(event.keyCode);
    if(event.keyCode == 13){
        add();
    }
});

/*it adds the task in the respective list */
function render()
{
    var complete = "";
    var uncomplete = "";
        tasks.forEach(
            function(t, ind)
            {
                if(t.isComplete){
                    complete += "<li><input type = 'checkbox' onclick = 'changeStatus(tasks["+ind+"]); render();' checked>"+t.name+"</li><br/>";
                }else{
                    uncomplete += "<li><input type = 'checkbox' onclick = 'changeStatus(tasks["+ind+"]); render();'>"+t.name+"</li><br/>";
                }
            }
        )

        uCompleted.innerHTML = uncomplete;
        Completed.innerHTML = complete;
};

/*it changes the stauts that is isComplete of the task */
function changeStatus(task1)
{
    if(task1.isComplete){
        task1.isComplete = false;
    }else{
        task1.isComplete = true;
    }
};