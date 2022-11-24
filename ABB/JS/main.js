

let search = document.querySelector("#searchBtn")

search.onclick = function Search(e){
    e.preventDefault();
    console.log("salam");
    var inp=document.querySelector(".search");
 var inputsetting=inp.classList;
 inputsetting.toggle("d-none")


}


let icon = document.querySelector("#icon")
icon.onclick = function CloseInput(e) {
    e.preventDefault();
  console.log("gh") 
  var inp=document.querySelector(".search");
  var inputsetting=inp.classList;
  inputsetting.add("d-none")
}