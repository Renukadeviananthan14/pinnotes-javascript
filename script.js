var addpopupbutton = document.querySelector(".add")
var popoverlay = document.querySelector(".pop-overlay")
var popbox = document.querySelector(".pop-box")

addpopupbutton.addEventListener("click",function()
{
popoverlay.style.display="block"
popbox.style.display="block"
})

function add(event){
popoverlay.style.display="none"
popbox.style.display="none"
}

var cancelbtn = document.querySelector(".cancel-btn")
cancelbtn.addEventListener("click",function(){
    event.preventDefault()
    popoverlay.style.display="none"
    popbox.style.display="none"

})

var container = document.querySelector(".book-container")
var title = document.getElementById("input-title")
var author = document.getElementById("input-author")
var text = document.getElementById("textarea")
var addbtnn = document.querySelector(".add-btn")

addbtnn.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h3>${author.value}</h3>
    <p>${text.value}</p>
   <button class="btn">Delete</button>`

    container.append(div)
    popoverlay.style.display="none"
    popbox.style.display="none"
})
function deleteitem(event){
    event.target.parentElement.remove()
}