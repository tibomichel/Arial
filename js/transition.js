
$(document).ready(function() {

$("body").css("display", "none");
$("img").css("display", "none");

$("body").fadeIn(500);
$("img").fadeIn(1000);

$("a.transition").click(function(event){
event.preventDefault();
linkLocation = this.href;
$("body").fadeOut(500, redirectPage); 1000
$("img").fadeOut(1000, redirectPage);   
});

function redirectPage() {
if (location.href.indexOf('reload')==-1) location.replace(location.href+'?reload');
window.location = linkLocation;
}

});


// $(document).ready(function() {
//     $("body").css("display", "none");
 
//     $("body").fadeIn(1000);
 
//     $("a").click(function(event){
//         event.preventDefault();
//         linkLocation = this.href;
//         $("body").fadeOut(1000, redirectPage);      
//     });
         
//     function redirectPage() {
//         if (location.href.indexOf('reload')==-1) location.replace(location.href+'?reload');
//         window.location = linkLocation;
//     }
// });
