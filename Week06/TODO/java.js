
//Modified some ideas from W3 Schools

function createClose() {
    let listItems = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < listItems.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        listItems[i].appendChild(span);
    }
}

// Click on a close button to hide the current list item
function clickClose() {
    let close = document.getElementsByClassName("close");
    let j;
    for (j = 0; j < close.length; j++) {
        close[j].onclick = function () {
            let div = this.parentElement;
            div.remove();
        }
    }


}

window.onload = function () {

    masterList = [];
    masterList = document.getElementsByTagName("LI");

    let initialList = JSON.parse(localStorage.getItem("li's"));  //Will need to put this in place of above code when it works
    
    for (i = 0; i < initialList.length; i++) {
        let li = document.createElement("li");
        let t = document.createTextNode(initialList[i]);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(t);
    }

    createClose();
    clickClose();
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
    this.showAll();
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;

    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Blank To do List Items Don't Do Much Good!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    createClose();
    clickClose();
    masterList = document.getElementsByTagName("LI");
    
}

function showAll() {
    let i;
    let j = 0
    for (i = 0; i < masterList.length; i++) {
        masterList[i].style.visibility = "visible";
        j++;
    }
    j += " Tasks Left";
    document.getElementById("tasks_left").innerHTML = j;
}

function showActive() {
    let i;
    let j = 0;
    for (i = 0; i < masterList.length; i++) {
        if (masterList[i].className == "checked") {
            masterList[i].style.visibility = "hidden";
        }
        else {
            masterList[i].style.visibility = "visible";
            j++;
        }
    }
    j += " Tasks Left";
    document.getElementById("tasks_left").innerHTML = j;
}

function showComplete() {
    let i;
    let j = 0;
    for (i = 0; i < masterList.length; i++) {
        if (masterList[i].className == "checked") {
            masterList[i].style.visibility = "visible";
            j++;
        }
        else {
            masterList[i].style.visibility = "hidden";
        }
    }
    j += " Tasks Left";
    document.getElementById("tasks_left").innerHTML = j;
}

window.onunload = function () {
    masterList = document.getElementsByTagName("LI");
    let temp = Array.prototype.slice.call( masterList )
    localStorage.setItem("li's", JSON.stringify(temp));
}

