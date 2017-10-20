var zara = (function() {
  var navState = false;
  var navBtnMobile = document.getElementById("navBtn-mobile");
  var navBtnDesktop = document.getElementById("navBtn-desktop");
  var navpage = document.getElementById("navpage");
  var navCloseBtnMobile = document.getElementById("navCloseBtn-mobile");
  var navCloseBtnDesktop = document.getElementById("navCloseBtn-desktop");
  var zaraNav = document.getElementById("zaraNav");

  function showNavpage() {
    navState = !navState;

    if(navState) {
      // nav opened
      changeNavBtn(navState);
      navpage.style.zIndex = 1;
      navpage.style.opacity = 1;
    }
    else {
      // nav closed
      changeNavBtn(navState);
      navpage.style.opacity = 0;
      setTimeout(function() {
        navpage.style.zIndex = -1;
      }, 250);
    }
  }

  function changeNavBtn(navisopened) {
    if(navisopened) {
      // style in opened state
      navCloseBtnMobile.style.transform = "scale(1)";
      navCloseBtnDesktop.style.transform = "scale(1)";
      navBtnMobile.style.display = "none";
      navBtnDesktop.style.display = "none";
      if(window.innerWidth > 920) {
        zaraNav.style.backgroundColor = "#000";
      }
    }
    else {
      // style in closed state
      navCloseBtnMobile.style.transform = "scale(0)";
      navCloseBtnDesktop.style.transform = "scale(0)";
      navBtnMobile.style.display = "flex";
      navBtnDesktop.style.display = "flex";
      if(window.innerWidth > 920) {
        zaraNav.style.backgroundColor = "#FFF";
      }
    }
  }

  function initialize() {
    navBtnMobile.addEventListener("click", showNavpage);
    navBtnDesktop.addEventListener("click", showNavpage);
    navCloseBtnMobile.addEventListener("click", showNavpage);
    navCloseBtnDesktop.addEventListener("click", showNavpage);
  }

  return {
    init: initialize
  }
}());

zara.init();
