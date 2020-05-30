


window.onload = function(){
    document.getElementById("action").addEventListener('change', show);
    document.getElementById("do_something").addEventListener('click', doSomething);
    localStorage.setItem("Make a To Do List","0");
}


function doSomething(){
    let action = document.getElementById("action").value;
    
    if (action == "insert"){
        
        let item = document.getElementById("item").value;    

        window.localStorage.setItem("0","item");
        show();
    }
}

function show(event){
    let action = document.getElementById("action").value;
    if (action == "display"){
            document.getElementById("display").style.display = "block";

                
                let list = window.localStorage.getItem("0");
                document.getElementById("display").value = list;

            // list.forEach(element => {
            //     document.getElementById("display").innerHTML += element;
            //     let check = document.createElement("INPUT");
            //     check.setAttribute("type", "checkbox");
            //     document.getElementById("display").appendChild(check);
            //     document.getElementById("display").innerHTML += "<br>";                 
            // });
            
            
    }
    else{
        document.getElementById("display").style.display = "none";
    }
    if (action == "complete"){
        document.getElementById("complete").style.display = "block";
    }
    else{
        document.getElementById("complete").style.display = "none";
    }
    if (action == "delete"){
        document.getElementById("delete").style.display = "block";
    }
    else{
        document.getElementById("delete").style.display = "none";
    }
    if (action == "insert"){
        document.getElementById("insert").style.display = "block";
    }
    else{
        document.getElementById("insert").style.display = "none";
    }   
}






function loadStory(){
    let storyName = document.getElementById("name_input").value;
    let storyHTML = localStorage.getItem(storyName);
    document.getElementById("story_editor").value = storyHTML;
}

function saveStory(){
    let storyName = document.getElementById("name_input").value;
    let storyHTML = document.getElementById("story_editor").value;
    localStorage.setItem(storyName, storyHTML);
}

function displayStory(){
    let storyHTML = document.getElementById("story_editor").value;
    document.getElementById("story_display").innerHTML = storyHTML;
}