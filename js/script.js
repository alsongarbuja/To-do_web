var tasks = [];
var listInput = document.querySelector("#task");

var uCompleted = document.querySelector(".uncompleted");
var Completed = document.querySelector(".completed");
var allList = document.querySelector(".All");
var unCompletedUlList = document.querySelector("#uList");
var completedUlList = document.querySelector("#cList");
var allListUl = document.querySelector("#aList");
var divisions = document.getElementsByClassName("lists_division");


function removeActiveDiv(){
    for(var i = 0; i < divisions.length; i++){
        divisions[i].classList.remove("active_division");
    }
}
/* add the task to the task array and call function render() when the plus is clicked*/
function add()
{
    // the code runs only if the input has some values or text in it
    if(listInput.value)
    {
        tasks.push(
            {
                name: listInput.value,
                isComplete: false
            }
        );
            
        // after the list is pushed in the array then the input will be erased itself
        listInput.value = "";
        render();
        listInput.focus();
    }
};

document.onkeyup = function(e) {
    // console.log(e.keyCode);
    if (e.key == '+') {
        listInput.focus();
    }else if (e.altKey && e.key == 'u') {
        removeActiveDiv();
        uCompleted.classList.add("active_division");
        activeIndex  = 0;
    }else if(e.altKey && e.key == 'c') {
        removeActiveDiv();
        Completed.classList.add("active_division");
        activeIndex = 1;
    }else if(e.altKey && e.key == 'a') {
        removeActiveDiv();
        allList.classList.add("active_division");
        activeIndex = 2;
    }
};


/*add the task to the array and call the add() function when enter is hit in input */
listInput.addEventListener("keydown", function(event){
    if(event.key == 'Enter'){
        add();
    } 
});

listInput.onkeyup = function(event){
    if(event.altKey && event.key == '-'){
        listInput.value = "";
        listInput.blur();
    }
}

/*it adds the task in the respective list */
function render()
{
    var complete = "";
    var uncomplete = "";
        tasks.forEach(
            function(t, ind)
            {
                if(t.isComplete){
                    complete += "<li><input type = 'checkbox' onclick = 'changeStatus("+ind+");' checked>"+t.name+"</li><br/>";
                }else{
                    uncomplete += "<li><input type = 'checkbox' onclick = 'changeStatus("+ind+");'>"+t.name+"</li><br/>";
                }
            }
        )

        unCompletedUlList.innerHTML = uncomplete;
        completedUlList.innerHTML = complete;

    addTask();
};

function addTask(){
    var isChecked = "";
    var all = "";

    tasks.forEach(
        function(t, ind){
            if(t.isComplete){
                isChecked = "checked";
            }else{
                isChecked = "";
            }
            all += "<li><input type='checkbox' onclick='changeStatus("+ind+");' "+isChecked+" >"+t.name+"</li><br/>";
        }
    );

    allListUl.innerHTML = all;
}

/*it changes the stauts that is isComplete of the task */
function changeStatus(ind)
{
    if(tasks[ind].isComplete){
        tasks[ind].isComplete = false;
    }else{
        tasks[ind].isComplete = true;
    }

    render();
};

var activeIndex = 0;

function slideDivision(pressedBtn){
    
    removeActiveDiv();

    activeIndex += pressedBtn;

    if(activeIndex > 2){
        activeIndex = 0;
    }

    if(activeIndex < 0){
        activeIndex = 2;
    }

    divisions[activeIndex].classList.add("active_division");

}

document.getElementsByClassName("left-arrow")[0].addEventListener('click', function(){
    slideDivision(-1);
});

document.getElementsByClassName("right-arrow")[0].addEventListener('click', function(){
    slideDivision(1);
});