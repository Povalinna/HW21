//let div = document.createElement('div');
 // div.className = "alert";
//  div.innerHTML = "<strong>DIV</strong> привид";
 // div.id = "att1"
 // document.body.append(div);
  window.addEventListener("DOMContentLoaded", function()
  {
  document.getElementById("f1").addEventListener("focus", function()
   {
   document.getElementById("att1").style.display="block";
   });
   document.getElementById("f1").addEventListener("blur", function()
   {
   document.getElementById("att1").style.display="none";
   });
  })