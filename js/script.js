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

if(!localStorage.getItem("index")){
    localStorage.setItem("index", "0");
}

function removeActiveDiv(){
    for(var i = 0; i < divisions.length; i++){
        divisions[i].classList.remove("active_division");
    }
}

crossMark.addEventListener('click', closeAlert);

function closeAlert(){
    alertDiv.style.display = "none";
}

function alertPop(color, mssg){
    alertDiv.children.item(0).innerHTML = mssg;
    alertDiv.style.backgroundColor = color;
    alertDiv.style.display = "flex";

    setTimeout(function(){
        closeAlert();
    }, 5000);
}

var index = localStorage.getItem("index");
var date = new Date();

/* add the task to the task array and call function render() when the plus is clicked*/
function add()
{
    // the code runs only if the input has some values or text in it
    if(listInput.value)
    {
        localStorage.setItem("task"+index, listInput.value);
        localStorage.setItem("isCompleted"+index, false);
        localStorage.setItem("updateDate"+index, date);
        localStorage.setItem("isDeleted"+index, false);

        tasks.push(
            {
                task: localStorage.getItem("task"+index),
                isComplete: localStorage.getItem("isCompleted"+index),
                updateDate: localStorage.getItem("updateDate"+index).slice(4,21),
                isDeleted: localStorage.getItem("isDeleted"+index)
            }
        );

        // console.log(tasks);

        index++;
        localStorage.setItem("index", index);
            
        // after the list is pushed in the array then the input will be erased itself
        listInput.value = "";
        render();
        listInput.focus();

        document.querySelector(".active_division").scrollTop = document.querySelector(".active_division").scrollHeight;
        
        alertPop("#2E5AAC", "Added new Task");
    }
};

function pushTask(){
    tasks = [];

    for(let i = 0; i < index; i++){
        if(localStorage.getItem("task"+i) != null){
            tasks.push(
                {
                    task: localStorage.getItem("task"+i),
                    isComplete: localStorage.getItem("isCompleted"+i),
                    updateDate: localStorage.getItem("updateDate"+i).slice(4, 21),
                    isDeleted: localStorage.getItem("isDeleted"+i)
                }
            );
        }
    }
}

document.onkeyup = function(e) {
    // console.log(e.key);
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
    }else if(e.altKey && e.key == 't'){
        removeActiveDiv();
        deletedList.classList.add("active_division");
        activeIndex = 3;
    }
    // else if(e.altKey && e.key == 's'){
    //     selectTop();
    // }else if(e.key == 'ArrowRight'){
    //     slideDivision(1);
    // }else if(e.key == 'ArrowLeft'){
    //     slideDivision(-1);
    // }else if(e.key == 'ArrowUp'){
    //     navigateUpDown(-1);
    // }else if(e.key == 'ArrowDown'){
    //     navigateUpDown(1);
    // }
};

function selectTop(){
    var activeDiv = document.querySelector(".active_division");

    var activeUl = activeDiv.children.item(1);
    var activeLi = activeUl.children.item(0).children.item(0);

    activeLi.children.item(0).focus();
}

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

    activeUl.children.item(listIndex).children.item(0).children.item(0).focus();
}


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

var col = document.getElementsByClassName("desc-part");

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
        trashCan.style.width = "55%";
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

        tasks.forEach(
            function(t, ind)
            {
                if(t.isDeleted == "true"){
                    deleted += "<li><div class='title-part'><div><input type = 'checkbox' disabled><strike>"+t.task+"</strike></div><div class='trash-can'><i class='fas fa-trash-restore' onclick='recoverTask("+ind+")'></i><p class='date-text'>Deleted at: "+t.updateDate+"</p></div></div></li>";
                }else if(t.isComplete == "true"){
                    complete += "<li><div class='title-part'><div class='overflow-titleC"+ind+" overflow-title'><input type = 'checkbox' onclick = 'changeStatus("+ind+");' checked id='task"+ind+"'><label for='task"+ind+"'><span class='task-text' onclick='showDetails("+ind+")'>"+t.task+"</span></label></div><div class='trash-canC"+ind+" trash-can'><div class='icons-sec'><i class='fas fa-trash-alt' onclick='deleteTask("+ind+")'></i><i class='fas fa-caret-down drop-icon' onclick='expand("+ind+", 1)'></i></div><p class='date-text'>Completed at: "+t.updateDate+"</p></div></div><div class='desc-partC"+ind+" desc-part'><div><input type = 'checkbox' onclick = 'changeStatus("+ind+");' checked id='task"+ind+"'><label for='task"+ind+"'><span class='task-text' onclick='showDetails("+ind+")'>"+t.task+"</span></label></div></div></li>";
                }else{
                    uncomplete += "<li><div class='title-part'><div class='overflow-titleUn"+ind+" overflow-title'><input type = 'checkbox' onclick = 'changeStatus("+ind+");' id='task"+ind+"'><label for='task"+ind+"'><span class='task-text' onclick='showDetails("+ind+")'>"+t.task+"</span></label></div><div class='trash-canUn"+ind+" trash-can'><div class='icons-sec'><i class='fas fa-trash-alt' onclick='deleteTask("+ind+")'></i><i class='fas fa-caret-down drop-icon' onclick='expand("+ind+", 2)'></i></div><p class='date-text'>Created at: "+t.updateDate+"</p></div></div><div class='desc-partUn"+ind+" desc-part'><div><input type = 'checkbox' onclick = 'changeStatus("+ind+");' id='task"+ind+"'><label for='task"+ind+"'><span class='task-text' onclick='showDetails("+ind+")'>"+t.task+"</span></label></div></div></li>";
                }
            }
        )

        unCompletedUlList.innerHTML = uncomplete;
        completedUlList.innerHTML = complete;
        deletedListUl.innerHTML = deleted;

    addTask();
};

function addTask(){
    var isChecked = "";
    var all = "";

    tasks.forEach(
        function(t, ind){
            if(t.isDeleted == "false"){
                if(t.isComplete == "true"){
                    isChecked = "checked";
                }else{
                    isChecked = "";
                }
                all += "<li><div class='title-part'><div class='overflow-titleAll"+ind+" overflow-title'><input type='checkbox' onclick='changeStatus("+ind+");' "+isChecked+" id='taskA"+ind+"'><label for='taskA"+ind+"'><span>"+t.task+"</span></label></div><div class='trash-canAll"+ind+" trash-can'><div class='icons-sec'><i class='fas fa-trash-alt' onclick='deleteTask("+ind+")'></i><i class='fas fa-caret-down drop-icon' onclick='expand("+ind+", 3)'></i></div></div></div><div class='desc-partAll"+ind+" desc-part'><div><input type='checkbox' onclick='changeStatus("+ind+");' "+isChecked+" id='taskA"+ind+"'><label for='taskA"+ind+"'><span class='task-text' onclick='showDetails("+ind+")'>"+t.task+"</span></label></div></div></li>";
            }
        }
    );

    allListUl.innerHTML = all;
}

/*it changes the stauts that is isComplete of the task */
function changeStatus(ind)
{
    var mssg = "", color = "";

    if(tasks[ind].isComplete == "true"){
        tasks[ind].isComplete = "false";
        mssg = "Removed task from completed list";
        color = "#B95000";
    }else{
        tasks[ind].isComplete = "true";
        mssg = "Added task to completed list";
        color = "#287D3C";
    }

    tasks[ind].updateDate = Date().slice(4, 21);
    localStorage.setItem("updateDate"+ind, Date());
    localStorage.setItem("isCompleted"+ind, tasks[ind].isComplete);

    render();

    alertPop(color, mssg);
};

function deleteTask(ind)
{
    tasks[ind].isDeleted = "true";
    localStorage.setItem("isDeleted"+ind, true);

    tasks[ind].updateDate = Date().slice(4,21);
    localStorage.setItem("updateDate"+ind, Date());

    render();

    alertPop("#DA1414", "Task Deleted");
}

function recoverTask(ind)
{
    tasks[ind].isDeleted = "false";
    localStorage.setItem("isDeleted"+ind, false);

    tasks[ind].updateDate = Date().slice(4,21);
    localStorage.setItem("updateDate"+ind, Date());

    render();

    alertPop("#FF8F39", "Task Recovered");
}

function deleteTaskPermanently(){
    var newDate = new Date();

    for(let i = 0; i < index; i++){
        if(localStorage.getItem("isDeleted"+i) == "true"){
            if(((Date.parse(newDate) - Date.parse(localStorage.getItem("updateDate"+i))) / (1000*60*60*24)) >= 15){
                localStorage.removeItem("task"+i);
                localStorage.removeItem("isCompleted"+i);
                localStorage.removeItem("updateDate"+i);
                localStorage.removeItem("isDeleted"+i);
            }
        }
    }
}

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