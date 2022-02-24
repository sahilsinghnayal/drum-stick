let drumnum = document.getElementsByClassName("drum").length; //use for finding how many drums are of class drum for use in for  loop

for (let i = 0; i <= drumnum; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    alert("i got clicked");

  });
}
