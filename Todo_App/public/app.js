 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import { getDatabase, push, ref, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDnWfD1y5YMgbmGWAeQr5hjHtt_SQu1EWo",
   authDomain: "abdullah-practice-todo-app.firebaseapp.com",
   projectId: "abdullah-practice-todo-app",
   storageBucket: "abdullah-practice-todo-app.appspot.com",
   messagingSenderId: "474180183979",
   appId: "1:474180183979:web:cc4640f8b7261631efd4ee",
   measurementId: "G-KK76X39LLV"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

var db = getDatabase();


var inpVal = document.getElementById("input");
var list = document.getElementById("list");


window.add() = function() { 
    if (inpVal.value == '') {
        alert("You Have To Write Something !!!")
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = inpVal.value;
        list.appendChild(li);

        var del = document.createElement("BUTTON");
        var delText = document.createTextNode("Delete");
        del.appendChild(delText);
        del.setAttribute("class", "delBtn");
        del.setAttribute("onclick", "delRow(this)");
        li.appendChild(del);
    }
    inpVal, value = "";
}

function delRow(delBtn){
    delBtn.parentNode.remove();
}

list.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }

    else if(e.target.tagName == "del"){
        delRow();
    }
}, false)