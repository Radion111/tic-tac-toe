let linka = document.querySelectorAll(".main__alink");

let noll = document.querySelector(".main__noliki");
let krest = document.querySelector(".main__krestuki");

let flag = 0;
let spaminfo = document.querySelectorAll(".spaminfo");

linka.forEach((item) => {
  item.addEventListener("click", function ticTac(event) {
    event.preventDefault();
    let data = item.firstElementChild.innerHTML;

    if (data == "x" || data == "0") {
      alert("Даная клетка занята");
      return false;
    } else {
      if (flag % 2 == 0) {
        krest.classList.remove("active");
        noll.classList.add("active");
        item.firstElementChild.innerHTML = "x";
      } else {
        noll.classList.remove("active");
        krest.classList.add("active");

        item.firstElementChild.innerHTML = "0";
      }
    }

    for (let i = 0; i < spaminfo.length; i++) {
      if (
        (spaminfo[0].innerHTML == "x" &&
          spaminfo[1].innerHTML == "x" &&
          spaminfo[2].innerHTML == "x") ||
        (spaminfo[3].innerHTML == "x" &&
          spaminfo[4].innerHTML == "x" &&
          spaminfo[5].innerHTML == "x") ||
        (spaminfo[6].innerHTML == "x" &&
          spaminfo[7].innerHTML == "x" &&
          spaminfo[8].innerHTML == "x") ||
        (spaminfo[0].innerHTML == "x" &&
          spaminfo[3].innerHTML == "x" &&
          spaminfo[6].innerHTML == "x") ||
        (spaminfo[0].innerHTML == "x" &&
          spaminfo[4].innerHTML == "x" &&
          spaminfo[8].innerHTML == "x") ||
        (spaminfo[2].innerHTML == "x" &&
          spaminfo[5].innerHTML == "x" &&
          spaminfo[8].innerHTML == "x") ||
        (spaminfo[3].innerHTML == "x" &&
          spaminfo[4].innerHTML == "x" &&
          spaminfo[5].innerHTML == "x") ||
        (spaminfo[1].innerHTML == "x" &&
          spaminfo[4].innerHTML == "x" &&
          spaminfo[7].innerHTML == "x") ||
        (spaminfo[2].innerHTML == "x" &&
          spaminfo[4].innerHTML == "x" &&
          spaminfo[6].innerHTML == "x")
      ) {
        alert(
          "Крестики победили ,для того чтобы переиграть нажмите клавишу f5"
        );
        return false;
      } else if (
        (spaminfo[0].innerHTML == "0" &&
          spaminfo[1].innerHTML == "0" &&
          spaminfo[2].innerHTML == "0") ||
        (spaminfo[3].innerHTML == "0" &&
          spaminfo[4].innerHTML == "0" &&
          spaminfo[5].innerHTML == "0") ||
        (spaminfo[6].innerHTML == "0" &&
          spaminfo[7].innerHTML == "0" &&
          spaminfo[8].innerHTML == "0") ||
        (spaminfo[0].innerHTML == "0" &&
          spaminfo[3].innerHTML == "0" &&
          spaminfo[6].innerHTML == "0") ||
        (spaminfo[0].innerHTML == "0" &&
          spaminfo[4].innerHTML == "0" &&
          spaminfo[8].innerHTML == "0") ||
        (spaminfo[2].innerHTML == "0" &&
          spaminfo[5].innerHTML == "0" &&
          spaminfo[8].innerHTML == "0") ||
        (spaminfo[3].innerHTML == "0" &&
          spaminfo[4].innerHTML == "0" &&
          spaminfo[5].innerHTML == "0") ||
        (spaminfo[1].innerHTML == "0" &&
          spaminfo[4].innerHTML == "0" &&
          spaminfo[7].innerHTML == "0") ||
        (spaminfo[2].innerHTML == "0" &&
          spaminfo[4].innerHTML == "0" &&
          spaminfo[6].innerHTML == "0")
      ) {
        alert("Нолики победили ,для того чтобы переиграть нажмите клавишу f5");
        return false;
      }
    }
    flag++;
  });
});
