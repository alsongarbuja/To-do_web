var tasks = [];
var listInput = document.querySelector("#task");

var uCompleted = document.querySelector(".uncompleted");
var Completed = document.querySelector(".completed");
var allList = document.querySelector(".All");
var deletedList = document.querySelector(".deleted");
var unCompletedUlList = document.querySelector("#uList");
var completedUlList = document.querySelector("#cList");
var allListUl = document.querySelector("#aList");
var deletedListUl = document.querySelector("#dList");
var divisions = document.getElementsByClassName("lists_division");
var alertDiv = document.querySelector(".alert-popup");
var crossMark = document.querySelector(".cross-mark");

// Starting the index for task indexing
if(!localStorage.getItem("index")){
    localStorage.setItem("index", "0");
}

//removes the active_division class from every lists
function removeActiveDiv(){
    for(var i = 0; i < divisions.length; i++){
        divisions[i].classList.remove("active_division");
    }
}

//add event listener in the alert popup cross mark
crossMark.addEventListener('click', closeAlert);

// closes the alert pop up
function closeAlert(){
    alertDiv.style.display = "none";
}

// defines the background color and message to show on the alert popup
// also shows the pop up for 5 sec
function alertPop(color, mssg){
    alertDiv.children.item(0).innerHTML = mssg;
    alertDiv.style.backgroundColor = color;
    alertDiv.style.display = "flex";

    setTimeout(function(){
        closeAlert();
    }, 5000);
}

// defining index from localstorage
var index = localStorage.getItem("index");

/* add the task to the task array and call function render() when the plus is clicked*/
function add()
{
    // the code runs only if the input has some values or text in it
    if(listInput.value)
    {
        //add task in localstorage
        var newTask = {
            'name': listInput.value, 
            'isCompleted': false,
            'updateDate': Date().slice(4, 21),
            'isDeleted': false
        };
        localStorage.setItem("task"+index, JSON.stringify(newTask));

        //then push the task to the tasks array
        tasks.push(JSON.parse(localStorage.getItem("task"+index)));

        console.log(tasks);

        index++;
        localStorage.setItem("index", index);
            
        // after the list is pushed in the array then the input will be erased itself
        listInput.value = "";
        render();
        listInput.focus();

        // scrolling to the latest added task automatically
        document.querySelector(".active_division").children.item(1).scroll(0, document.querySelector(".active_division").children.item(1).scrollHeight);
        
        alertPop("#2E5AAC", "Added new Task");
    }
};

//add the tasks from localstorage to tasks array on startup
function pushTask(){
    for(let i = 0; i < index; i++){
        tasks.push(JSON.parse(localStorage.getItem("task"+i)));
    }
}

//function to select the top task of the current active list
function selectTop(){
    var activeDiv = document.querySelector(".active_division");

    var activeUl = activeDiv.children.item(1);
    var activeLi = activeUl.children.item(0);

    activeLi.style.boxShadow = "1px 6px 30px black";
}

// remove the focus from the previously selected task when navigating
function removeFocus(){
    var totalLi = document.querySelector(".active_division").children.item(1).childElementCount;
    var activeUl = document.querySelector(".active_division").children.item(1);
    
    for(var i = 0; i < totalLi; i++){
        activeUl.children.item(i).style.boxShadow = "1px 2px 3px black";
    }

    listIndex = 0;
}

// remove the focus from the previously selected task when clicking on the window elsewhere
document.addEventListener('click', removeFocus);

// function to navigate the list
var listIndex = 0;

function navigateUpDown(val){
    var totalLi = document.querySelector(".active_division").children.item(1).childElementCount;
    var activeUl = document.querySelector(".active_division").children.item(1);

    listIndex += val;

    if(listIndex > totalLi-1){
        listIndex = 0;
    }

    if(listIndex < 0){
        listIndex = totalLi-1;
    }

    activeUl.children.item(listIndex).style.boxShadow = "1px 6px 30px black";

    if(listIndex == totalLi-1 && val == -1)
        activeUl.children.item(0).style.boxShadow = "1px 2px 3px black";
    else if(listIndex == 0 && val == 1)
        activeUl.children.item(totalLi-1).style.boxShadow = "1px 2px 3px black";
    else
        activeUl.children.item(listIndex-val).style.boxShadow = "1px 2px 3px black";

    if(listIndex != 0)
        activeUl.scroll(0, activeUl.children.item(listIndex).offsetTop-500);
    else
        activeUl.scroll(0,0);
}


/*add the task to the array and call the add() function when enter is hit in input */
listInput.addEventListener("keydown", function(event){
    if(event.key == 'Enter'){
        add();
    }
});

// remove input values and focus from the input when alt and - is entered
listInput.onkeyup = function(event){
    if(event.altKey && event.key == '-'){
        listInput.value = "";
        listInput.blur();
    }
}

// function to expand the task tiles
function expand(ind, list){
    var col, overflowText, trashCan;

    if(list == "1"){
        col = document.getElementsByClassName("desc-partC"+ind)[0];
        trashCan = document.getElementsByClassName("trash-canC"+ind)[0];
        overflowText = document.getElementsByClassName("overflow-titleC"+ind)[0];
    }else if(list == "2"){
        col = document.getElementsByClassName("desc-partUn"+ind)[0];
        trashCan = document.getElementsByClassName("trash-canUn"+ind)[0];
        overflowText = document.getElementsByClassName("overflow-titleUn"+ind)[0];
    }else if(list == "3"){
        col = document.getElementsByClassName("desc-partAll"+ind)[0];
        trashCan = document.getElementsByClassName("trash-canAll"+ind)[0];
        overflowText = document.getElementsByClassName("overflow-titleAll"+ind)[0];
    }

    if(col.style.maxHeight){
        col.style.maxHeight = null;
        trashCan.style.width = "35%";
        overflowText.style.display = "block";
    }else{
        col.style.maxHeight = col.scrollHeight + "px";
        trashCan.style.width = "100%";
        overflowText.style.display = "none";
    }
}

/*it adds the task in the respective list */
function render()
{
    var complete = "";
    var uncomplete = "";
    var deleted = "";
    
    // "<li><div class='title-part'><div class='overflow-title'><input type = 'checkbox' onclick = 'changeStatus("+ind+");' checked id='task"+ind+"'><label for='task"+ind+"'></label><span class='task-text' onclick='showDetails("+ind+")'>"+t.task+"</span></div><div class='trash-can'><div class='icons-sec'><i class='fas fa-trash-alt' onclick='deleteTask("+ind+")'></i><i class='fas fa-caret-down drop-icon' onclick='expand("+ind+")'></i></div><p class='date-text'>Completed at: "+t.updateDate+"</p></div></div><div class='desc-part'><div><input type = 'checkbox' onclick = 'changeStatus("+ind+");' checked id='task"+ind+"'><label for='task"+ind+"'></label><span class='task-text' onclick='showDetails("+ind+")'>"+t.task+"</span></div></div></li>"
        for (var prop in tasks)
        {
            if(tasks[prop] != null){
                if(tasks[prop].isDeleted){
                    deleted += "<li><div class='title-part'><div><input type = 'checkbox' disabled><strike>"+tasks[prop].name+"</strike></div><div class='trash-can'><i class='fas fa-trash-restore' onclick='changeState("+prop+")'></i><p class='date-text'>Deleted at: "+tasks[prop].updateDate+"</p></div></div></li>";
                }else if(tasks[prop].isComplete){
                    complete += "<li><div class='title-part'><div class='overflow-titleC"+prop+" overflow-title'><input type = 'checkbox' onclick = 'changeStatus("+prop+");' checked id='task"+prop+"'><label for='task"+prop+"'><span class='task-text' onclick='showDetails("+prop+")'>"+tasks[prop].name+"</span></label></div><div class='trash-canC"+prop+" trash-can'><div class='icons-sec'><i class='fas fa-trash-alt' onclick='changeState("+prop+")'></i><i class='fas fa-caret-down drop-icon' onclick='expand("+prop+", 1)'></i></div><p class='date-text'>Completed at: "+tasks[prop].updateDate+"</p></div></div><div class='desc-partC"+prop+" desc-part'><div><input type = 'checkbox' onclick = 'changeStatus("+prop+");' checked id='task"+prop+"'><label for='task"+prop+"'><span class='task-text' onclick='showDetails("+prop+")'>"+tasks[prop].name+"</span></label></div></div></li>";
                }else{
                    uncomplete += "<li><div class='title-part'><div class='overflow-titleUn"+prop+" overflow-title'><input type = 'checkbox' onclick = 'changeStatus("+prop+");' id='task"+prop+"'><label for='task"+prop+"'><span class='task-text' onclick='showDetails("+prop+")'>"+tasks[prop].name+"</span></label></div><div class='trash-canUn"+prop+" trash-can'><div class='icons-sec'><i class='fas fa-trash-alt' onclick='changeState("+prop+")'></i><i class='fas fa-caret-down drop-icon' onclick='expand("+prop+", 2)'></i></div><p class='date-text'>Created at: "+tasks[prop].updateDate+"</p></div></div><div class='desc-partUn"+prop+" desc-part'><div><input type = 'checkbox' onclick = 'changeStatus("+prop+");' id='task"+prop+"'><label for='task"+prop+"'><span class='task-text' onclick='showDetails("+prop+")'>"+tasks[prop].name+"</span></label></div></div></li>";
                }
            }
        }

        unCompletedUlList.innerHTML = uncomplete;
        completedUlList.innerHTML = complete;
        deletedListUl.innerHTML = deleted;

    addTask();
};

// render all the tasks except deleted ones in the all to do's list
function addTask(){
    var isChecked = "";
    var all = "";

    for (var prop in tasks) 
    {
        if(tasks[prop] != null){
            if(!tasks[prop].isDeleted){
                if(tasks[prop].isComplete){
                    isChecked = "checked";
                }else{
                    isChecked = "";
                }
                all += "<li><div class='title-part'><div class='overflow-titleAll"+prop+" overflow-title'><input type='checkbox' onclick='changeStatus("+prop+");' "+isChecked+" id='taskA"+prop+"'><label for='taskA"+prop+"'><span>"+tasks[prop].name+"</span></label></div><div class='trash-canAll"+prop+" trash-can'><div class='icons-sec'><i class='fas fa-trash-alt' onclick='changeState("+prop+")'></i><i class='fas fa-caret-down drop-icon' onclick='expand("+prop+", 3)'></i></div></div></div><div class='desc-partAll"+prop+" desc-part'><div><input type='checkbox' onclick='changeStatus("+prop+");' "+isChecked+" id='taskA"+prop+"'><label for='taskA"+prop+"'><span class='task-text' onclick='showDetails("+prop+")'>"+tasks[prop].name+"</span></label></div></div></li>";
            }
        }
    }

    allListUl.innerHTML = all;
}

/*it changes the stauts that is isComplete of the task */
function changeStatus(ind)
{
    var mssg = "", color = "";

    if(tasks[ind].isComplete){
        tasks[ind].isComplete = false;
        mssg = "Removed task from completed list";
        color = "#B95000";
    }else{
        tasks[ind].isComplete = true;
        mssg = "Added task to completed list";
        color = "#287D3C";
    }

    tasks[ind].updateDate = Date().slice(4, 21);
    var oldData = JSON.parse(localStorage.getItem("task"+ind));

    oldData.updateDate = Date().slice(4, 21);
    oldData.isComplete = tasks[ind].isComplete;

    localStorage.setItem("task"+ind, JSON.stringify(oldData));

    render();

    alertPop(color, mssg);
};

// delete or recover task
function changeState(ind)
{
    var color = "", mssg = "";

    if(tasks[ind].isDeleted){
        tasks[ind].isDeleted = false;
        color = "#FF8F39";
        mssg = "Task Recovered";
    }else{
        tasks[ind].isDeleted = true;
        color = "#DA1414";
        mssg = "Task Deleted";
    }

    tasks[ind].updateDate = Date().slice(4,21);

    var oldData = JSON.parse(localStorage.getItem("task"+ind));

    oldData.updateDate = tasks[ind].updateDate;
    oldData.isDeleted = tasks[ind].isDeleted;

    localStorage.setItem("task"+ind, JSON.stringify(oldData));

    render();

    alertPop(color, mssg);
}

//permanently deletes the deleted data which is in deleted section for more than 15 days 
function deleteTaskPermanently(){
    var newDate = new Date();

    for(let i = 0; i < index; i++){
        var task = JSON.parse(localStorage.getItem("task"+i));
        if(task != null){
            if(task.isDeleted){
                if(((Date.parse(newDate) - Date.parse(task.updateDate)) / (1000*60*60*24)) >= 15){
                    localStorage.removeItem("task"+i);
                }
            }
        }
    }
}

//navigate through the lists
var activeIndex = 0;

function slideDivision(pressedBtn){
    
    removeActiveDiv();

    activeIndex += pressedBtn;

    if(activeIndex > 3){
        activeIndex = 0;
    }

    if(activeIndex < 0){
        activeIndex = 3;
    }

    divisions[activeIndex].classList.add("active_division");
}

document.getElementsByClassName("left-arrow")[0].addEventListener('click', function(){
    slideDivision(-1);
});

document.getElementsByClassName("right-arrow")[0].addEventListener('click', function(){
    slideDivision(1);
});

// key bind functions
document.onkeyup = function(e) {
    // console.log(e.key);
    if (e.key == '+') {
        listInput.focus();
        removeFocus();
    }else if (e.altKey && e.key == 'u') {
        removeActiveDiv();
        uCompleted.classList.add("active_division");
        activeIndex  = 0;
        removeFocus();
    }else if(e.altKey && e.key == 'c') {
        removeActiveDiv();
        Completed.classList.add("active_division");
        activeIndex = 1;
        removeFocus();
    }else if(e.altKey && e.key == 'a') {
        removeActiveDiv();
        allList.classList.add("active_division");
        activeIndex = 2;
        removeFocus();
    }else if(e.altKey && e.key == 't'){
        removeActiveDiv();
        deletedList.classList.add("active_division");
        activeIndex = 3;
        removeFocus();
    }else if(e.altKey && e.key == 's'){
        selectTop();
    }else if(e.key == 'ArrowRight'){
        slideDivision(1);
        removeFocus();
    }else if(e.key == 'ArrowLeft'){
        slideDivision(-1);
        removeFocus();
    }else if(e.key == 'ArrowUp'){
        navigateUpDown(-1);
    }else if(e.key == 'ArrowDown'){
        navigateUpDown(1);
    }
};