 function sendEmail(){
   var params = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("message").value
   }
   emailjs.send("service_nusxcjt","template_l1g1qsh", params).then(function (res){
    alert("votre message envoyé");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

   })
 }

 function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

 document.addEventListener("click", function(event) {
  const sidebar = document.getElementById("sidebar");
  const openButton = document.querySelector(".open-btn");

   if (!sidebar.contains(event.target) && !openButton.contains(event.target) && sidebar.classList.contains("active")) {
    closeSidebar();
  }
});

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
}
