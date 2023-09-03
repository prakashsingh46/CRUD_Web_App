 const displayRecord=document.querySelector(".record");

 function empty(){
    document.getElementById("fname").value="";
    document.getElementById("roln").value="";
    document.getElementById("branch").value="";
    document.getElementById("email").value="";
    document.getElementById("gender").value="";
 }

 

 function writeData(event){
    event.preventDefault();
    var name =document.getElementById("fname").value;
    var rol =document.getElementById("roln").value;
    var branch =document.getElementById("branch").value;
    var email =document.getElementById("email").value;
    var gender =document.getElementById("gender").value;

    let rec=document.createElement("ul");
    let data=`<li class="field" id="dname">${name}</li>
    <li class="field" id="droll">${rol}</li>
    <li class="field" id="dbranch">${branch}</li>
    <li class="field" id="demail">${email}</li>
    <li class="field" id="dgender">${gender}</li>
    <button type="button" class="btn2" id="update" onclick="update(this)">Update</button>
    <button type="button" class="btn2" id="delete" onclick="deleteData(this)">Delete</button>
    <br><br>`;
    rec.innerHTML=data;
    displayRecord.prepend(rec);
   //  alert("Data added successfully");
    empty()

}
function checkEmpty(event){
   let a=event;
   a.preventDefault()
   let name =document.getElementById("fname").value;
   let rol =document.getElementById("roln").value;
   let branch =document.getElementById("branch").value;
   let email =document.getElementById("email").value;
   let gender =document.getElementById("gender").value;

   if((name!="") && (rol!="") && (branch!="") && (email!="") && (gender!="")){

     writeData(a);
   }
   else{
     alert("Please enter all the records!");
   }
}
const a=document.querySelector(".btn")
a.addEventListener("click",checkEmpty);


function deleteData(e){
   e.parentNode.parentNode.removeChild(e.parentNode);
}
var dlt;
function update(e){
   dlt=e;
   let name =document.getElementById("fname");
   let rol =document.getElementById("roln");
   let branch =document.getElementById("branch");
   let email =document.getElementById("email");
   let gender =document.getElementById("gender");
   let cn=e.parentNode.childNodes
   name.value=cn[0].textContent
   rol.value=cn[2].textContent
   branch.value=cn[4].textContent
   email.value=cn[6].textContent
   gender.value=cn[8].textContent

   document.getElementById("sub").style.display="none"
   document.getElementById("set").style.display="block"
   let p=document.getElementById("cap")
   p.textContent="Please update your details"
   p.style.color="blue"
   document.getElementById("form").style.backgroundColor="#acedc0"
   
}

const st=document.querySelector("#set")
st.addEventListener("click",function(e){
   writeData(e)
   deleteData(dlt);
   document.getElementById("sub").style.display="block"
   document.getElementById("set").style.display="none"
   let p=document.getElementById("cap")
   p.textContent="Eneter your details here"
   p.style.color="black"
   document.getElementById("form").style.backgroundColor="#bedbf3"

});