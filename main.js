/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("mySplashText").style.display = 'none';
  } else {
    x.className = "topnav";
	document.getElementById("mySplashText").style.display = 'block';
  }
}