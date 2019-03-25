

var Beispiel;
Beispiel = 4;


var Beispiel2;
Beispiel2 = 5;     



var Kuehlschrank
Kuehlschrank = ["Apfel", "Mandarine", "Erdbeer"];

for (var i = 0; i<Kuehlschrank.length; i++) {
    console.log(Kuehlschrank[i]);
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}







var i = 0;
do {
    console.log(i)
    i++;

}
while (i < 10);


$('.colorchange').on("click", function(){
    $('body').css("background-color", "red");
})






                 