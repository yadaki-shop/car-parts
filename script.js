document.addEventListener("DOMContentLoaded", function () {

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", function(){

console.log("جستجو:", search.value);

});

}

});
