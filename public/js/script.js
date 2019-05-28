/*
 * Set the width of the side navigation to 250px
 * Add a black background color to body
 * */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/*
 * Set the width of the side navigation to 0
 * and the background color of body to white
 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();

    $('#reserveModal').modal('show');
});
