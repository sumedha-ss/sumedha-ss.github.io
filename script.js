// Get the popup and close button
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

function removePopup() {
  popup.classList.replace("fade", "hidden");
}

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", function () {
  popup.classList.add("fade");
  setTimeout(removePopup, 400);
});

const catInfo = document.getElementById("catInfo");
const closeCat = document.getElementById("closeCat");
const catBackground = document.getElementById("catBackground");
const catGlow = document.getElementById("catGlow");

function showCatGlow() {
  catGlow.classList.add("show");
}

function removeCatGlow() {
  catGlow.classList.remove("show");
}

function hideBookButtons() {
  book1.classList.add("hidden");
  book2.classList.add("hidden");
  book3.classList.add("hidden");
  book4.classList.add("hidden");
  book5.classList.add("hidden");
  book6.classList.add("hidden");
}

function hideTennisButtons() {
  tennis1.classList.add("hidden");
  tennis2.classList.add("hidden");
  tennis3.classList.add("hidden");
  tennis4.classList.add("hidden");
  tennis5.classList.add("hidden");
  tennis6.classList.add("hidden");
  tennis7.classList.add("hidden");
  tennis8.classList.add("hidden");
  tennis9.classList.add("hidden");
  tennis10.classList.add("hidden");
  tennis11.classList.add("hidden");
}

function hideCatButtons() {
  cat1.classList.add("hidden");
  cat2.classList.add("hidden");
  cat3.classList.add("hidden");
  cat4.classList.add("hidden");
  cat5.classList.add("hidden");
  cat6.classList.add("hidden");
  cat7.classList.add("hidden");
  cat8.classList.add("hidden");
  cat9.classList.add("hidden");
  cat10.classList.add("hidden");
  cat11.classList.add("hidden");
  cat12.classList.add("hidden");
  cat13.classList.add("hidden");
  cat14.classList.add("hidden");
  cat15.classList.add("hidden");
  cat16.classList.add("hidden");
  cat17.classList.add("hidden");
  cat18.classList.add("hidden");
  cat19.classList.add("hidden");
}

function hidePhotoButtons() {
  photo1.classList.add("hidden");
  photo2.classList.add("hidden");
}

function catButtons() {
  catBackground.classList.add("show");
  catInfo.classList.add("show");
  hidePhotoButtons();
  hideTennisButtons();
  hideBookButtons();
}

function showBookButtons() {
  book1.classList.remove("hidden");
  book2.classList.remove("hidden");
  book3.classList.remove("hidden");
  book4.classList.remove("hidden");
  book5.classList.remove("hidden");
  book6.classList.remove("hidden");
}

function showTennisButtons() {
  tennis1.classList.remove("hidden");
  tennis2.classList.remove("hidden");
  tennis3.classList.remove("hidden");
  tennis4.classList.remove("hidden");
  tennis5.classList.remove("hidden");
  tennis6.classList.remove("hidden");
  tennis7.classList.remove("hidden");
  tennis8.classList.remove("hidden");
  tennis9.classList.remove("hidden");
  tennis10.classList.remove("hidden");
  tennis11.classList.remove("hidden");
}

function showCatButtons() {
  cat1.classList.remove("hidden");
  cat2.classList.remove("hidden");
  cat3.classList.remove("hidden");
  cat4.classList.remove("hidden");
  cat5.classList.remove("hidden");
  cat6.classList.remove("hidden");
  cat7.classList.remove("hidden");
  cat8.classList.remove("hidden");
  cat9.classList.remove("hidden");
  cat10.classList.remove("hidden");
  cat11.classList.remove("hidden");
  cat12.classList.remove("hidden");
  cat13.classList.remove("hidden");
  cat14.classList.remove("hidden");
  cat15.classList.remove("hidden");
  cat16.classList.remove("hidden");
  cat17.classList.remove("hidden");
  cat18.classList.remove("hidden");
  cat19.classList.remove("hidden");
}

function showPhotoButtons() {
  photo1.classList.remove("hidden");
  photo2.classList.remove("hidden");
}

function closeCatButtons() {
  catBackground.classList.remove("show");
  catInfo.classList.remove("show");
  showBookButtons();
  showTennisButtons();
  showPhotoButtons();
}

function fruitButtons() {
  fruitBackground.classList.add("show");
  fruitInfo.classList.add("show");
  hideCatButtons();
  hidePhotoButtons();
  hideTennisButtons();
  hideBookButtons();
}

const fruitInfo = document.getElementById("fruitInfo");
const closeFruit = document.getElementById("closeFruit");
const fruitBackground = document.getElementById("fruitBackground");
const fruitGlow = document.getElementById("fruitGlow");

function showFruitGlow() {
  fruitGlow.classList.add("show");
}

function removeFruitGlow() {
  fruitGlow.classList.remove("show");
}

function closeFruitButtons() {
  fruitBackground.classList.remove("show");
  fruitInfo.classList.remove("show");
  showCatButtons();
  showBookButtons();
  showTennisButtons();
  showPhotoButtons();
}

const fruit1 = document.getElementById("fruitButton1");
fruit1.addEventListener("mouseover", showFruitGlow);
fruit1.addEventListener("mouseout", removeFruitGlow);
fruit1.addEventListener("click", fruitButtons);

const fruit2 = document.getElementById("fruitButton2");
fruit2.addEventListener("mouseover", showFruitGlow);
fruit2.addEventListener("mouseout", removeFruitGlow);
fruit2.addEventListener("click", fruitButtons);

const fruit3 = document.getElementById("fruitButton3");
fruit3.addEventListener("mouseover", showFruitGlow);
fruit3.addEventListener("mouseout", removeFruitGlow);
fruit3.addEventListener("click", fruitButtons);

const fruit4 = document.getElementById("fruitButton4");
fruit4.addEventListener("mouseover", showFruitGlow);
fruit4.addEventListener("mouseout", removeFruitGlow);
fruit4.addEventListener("click", fruitButtons);

const fruit5 = document.getElementById("fruitButton5");
fruit5.addEventListener("mouseover", showFruitGlow);
fruit5.addEventListener("mouseout", removeFruitGlow);
fruit5.addEventListener("click", fruitButtons);

const fruit6 = document.getElementById("fruitButton6");
fruit6.addEventListener("mouseover", showFruitGlow);
fruit6.addEventListener("mouseout", removeFruitGlow);
fruit6.addEventListener("click", fruitButtons);

const fruit7 = document.getElementById("fruitButton7");
fruit7.addEventListener("mouseover", showFruitGlow);
fruit7.addEventListener("mouseout", removeFruitGlow);
fruit7.addEventListener("click", fruitButtons);

const fruit8 = document.getElementById("fruitButton8");
fruit8.addEventListener("mouseover", showFruitGlow);
fruit8.addEventListener("mouseout", removeFruitGlow);
fruit8.addEventListener("click", fruitButtons);

const fruit9 = document.getElementById("fruitButton9");
fruit9.addEventListener("mouseover", showFruitGlow);
fruit9.addEventListener("mouseout", removeFruitGlow);
fruit9.addEventListener("click", fruitButtons);

const fruit10 = document.getElementById("fruitButton10");
fruit10.addEventListener("mouseover", showFruitGlow);
fruit10.addEventListener("mouseout", removeFruitGlow);
fruit10.addEventListener("click", fruitButtons);

const fruit11 = document.getElementById("fruitButton11");
fruit11.addEventListener("mouseover", showFruitGlow);
fruit11.addEventListener("mouseout", removeFruitGlow);
fruit11.addEventListener("click", fruitButtons);

const fruit12 = document.getElementById("fruitButton12");
fruit12.addEventListener("mouseover", showFruitGlow);
fruit12.addEventListener("mouseout", removeFruitGlow);
fruit12.addEventListener("click", fruitButtons);

const fruit13 = document.getElementById("fruitButton13");
fruit13.addEventListener("mouseover", showFruitGlow);
fruit13.addEventListener("mouseout", removeFruitGlow);
fruit13.addEventListener("click", fruitButtons);

const fruit14 = document.getElementById("fruitButton14");
fruit14.addEventListener("mouseover", showFruitGlow);
fruit14.addEventListener("mouseout", removeFruitGlow);
fruit14.addEventListener("click", fruitButtons);

const fruit15 = document.getElementById("fruitButton15");
fruit15.addEventListener("mouseover", showFruitGlow);
fruit15.addEventListener("mouseout", removeFruitGlow);
fruit15.addEventListener("click", fruitButtons);

const fruit16 = document.getElementById("fruitButton16");
fruit16.addEventListener("mouseover", showFruitGlow);
fruit16.addEventListener("mouseout", removeFruitGlow);
fruit16.addEventListener("click", fruitButtons);

const fruit17 = document.getElementById("fruitButton17");
fruit17.addEventListener("mouseover", showFruitGlow);
fruit17.addEventListener("mouseout", removeFruitGlow);
fruit17.addEventListener("click", fruitButtons);

const fruit18 = document.getElementById("fruitButton18");
fruit18.addEventListener("mouseover", showFruitGlow);
fruit18.addEventListener("mouseout", removeFruitGlow);
fruit18.addEventListener("click", fruitButtons);

const fruit19 = document.getElementById("fruitButton19");
fruit19.addEventListener("mouseover", showFruitGlow);
fruit19.addEventListener("mouseout", removeFruitGlow);
fruit19.addEventListener("click", fruitButtons);

const fruit20 = document.getElementById("fruitButton20");
fruit20.addEventListener("mouseover", showFruitGlow);
fruit20.addEventListener("mouseout", removeFruitGlow);
fruit20.addEventListener("click", fruitButtons);

const hint = document.getElementById("hintBlob");
const hintText1 = document.getElementById("hintText1");
const hintText2 = document.getElementById("hintText2");

function addHint() {
  hint.classList.remove("hidden");
  hintText1.classList.remove("hidden");
  hintText2.classList.remove("hidden");
}

function removeHint() {
  hint.classList.add("hidden");
  hintText1.classList.add("hidden");
  hintText2.classList.add("hidden");
}

const undoButton = document.getElementById("undoButton");
undoButton.addEventListener("click", function () {
  fruitOption1.classList.remove("clicked");
  fruitOption2.classList.remove("clicked");
  fruitOption3.classList.remove("clicked");
  fruitOption4.classList.remove("clicked");
  fruitOption5.classList.remove("clicked");
  errorMessage.classList.remove("show");
  removeFruitInfoCover();
  addHint();
  removeWrongOption();
});

const errorMessage = document.getElementById("errorMessage");
const errorAnimation1 = document.getElementById("errorAnimation1");
const errorAnimation2 = document.getElementById("errorAnimation2");

function addWrongOption() {
  undoButton.classList.add("show");
  errorMessage.classList.add("show");
  errorAnimation1.classList.add("show");
  errorAnimation2.classList.add("show");
  removeHint();
  addFruitInfoCover();
}

function removeWrongOption() {
  undoButton.classList.remove("show");
  errorMessage.classList.remove("show");
  errorAnimation1.classList.remove("show");
  errorAnimation2.classList.remove("show");
}

const fruitInfoCover = document.getElementById("fruitInfoCover");

function addFruitInfoCover() {
  fruitInfoCover.classList.add("show");
}

function removeFruitInfoCover() {
  fruitInfoCover.classList.remove("show");
}

const fruitOption1 = document.getElementById("fruitOption1");
fruitOption1.addEventListener("mouseover", function () {
  fruitOption1.classList.add("hover");
});
fruitOption1.addEventListener("mouseout", function () {
  fruitOption1.classList.remove("hover");
});
fruitOption1.addEventListener("click", function () {
  fruitOption1.classList.replace("hover", "clicked");
});
fruitOption1.addEventListener("click", addWrongOption);

const fruitOption2 = document.getElementById("fruitOption2");
fruitOption2.addEventListener("mouseover", function () {
  fruitOption2.classList.add("hover");
});
fruitOption2.addEventListener("mouseout", function () {
  fruitOption2.classList.remove("hover");
});
fruitOption2.addEventListener("click", function () {
  fruitOption2.classList.replace("hover", "clicked");
});
fruitOption2.addEventListener("click", addWrongOption);

const fruitOption3 = document.getElementById("fruitOption3");
fruitOption3.addEventListener("mouseover", function () {
  fruitOption3.classList.add("hover");
});
fruitOption3.addEventListener("mouseout", function () {
  fruitOption3.classList.remove("hover");
});
fruitOption3.addEventListener("click", function () {
  fruitOption3.classList.replace("hover", "clicked");
});
fruitOption3.addEventListener("click", addWrongOption);

const fruitOption4 = document.getElementById("fruitOption4");
fruitOption4.addEventListener("mouseover", function () {
  fruitOption4.classList.add("hover");
});
fruitOption4.addEventListener("mouseout", function () {
  fruitOption4.classList.remove("hover");
});
fruitOption4.addEventListener("click", function () {
  fruitOption4.classList.replace("hover", "clicked");
});
fruitOption4.addEventListener("click", addWrongOption);

const fruitOption5 = document.getElementById("fruitOption5");
fruitOption5.addEventListener("mouseover", function () {
  fruitOption5.classList.add("hover");
});
fruitOption5.addEventListener("mouseout", function () {
  fruitOption5.classList.remove("hover");
});
fruitOption5.addEventListener("click", removeHint);
fruitOption5.addEventListener("click", function () {
  fruitOption5.classList.replace("hover", "clicked");
});
fruitOption5.addEventListener("click", addWrongOption);
fruitOption5.addEventListener("click", addFruitInfoCover);

closeFruit.addEventListener("click", closeFruitButtons);

const cat1 = document.getElementById("catButton1");
cat1.addEventListener("mouseover", showCatGlow);
cat1.addEventListener("mouseout", removeCatGlow);
cat1.addEventListener("click", catButtons);

const cat2 = document.getElementById("catButton2");
cat2.addEventListener("mouseover", showCatGlow);
cat2.addEventListener("mouseout", removeCatGlow);
cat2.addEventListener("click", catButtons);

const cat3 = document.getElementById("catButton3");
cat3.addEventListener("mouseover", showCatGlow);
cat3.addEventListener("mouseout", removeCatGlow);
cat3.addEventListener("click", catButtons);

const cat4 = document.getElementById("catButton4");
cat4.addEventListener("mouseover", showCatGlow);
cat4.addEventListener("mouseout", removeCatGlow);
cat4.addEventListener("click", catButtons);

const cat5 = document.getElementById("catButton5");
cat5.addEventListener("mouseover", showCatGlow);
cat5.addEventListener("mouseout", removeCatGlow);
cat5.addEventListener("click", catButtons);

const cat6 = document.getElementById("catButton6");
cat6.addEventListener("mouseover", showCatGlow);
cat6.addEventListener("mouseout", removeCatGlow);
cat6.addEventListener("click", catButtons);

const cat7 = document.getElementById("catButton7");
cat7.addEventListener("mouseover", showCatGlow);
cat7.addEventListener("mouseout", removeCatGlow);
cat7.addEventListener("click", catButtons);

const cat8 = document.getElementById("catButton8");
cat8.addEventListener("mouseover", showCatGlow);
cat8.addEventListener("mouseout", removeCatGlow);
cat8.addEventListener("click", catButtons);

const cat9 = document.getElementById("catButton9");
cat9.addEventListener("mouseover", showCatGlow);
cat9.addEventListener("mouseout", removeCatGlow);
cat9.addEventListener("click", catButtons);

const cat10 = document.getElementById("catButton10");
cat10.addEventListener("mouseover", showCatGlow);
cat10.addEventListener("mouseout", removeCatGlow);
cat10.addEventListener("click", catButtons);

const cat11 = document.getElementById("catButton11");
cat11.addEventListener("mouseover", showCatGlow);
cat11.addEventListener("mouseout", removeCatGlow);
cat11.addEventListener("click", catButtons);

const cat12 = document.getElementById("catButton12");
cat12.addEventListener("mouseover", showCatGlow);
cat12.addEventListener("mouseout", removeCatGlow);
cat12.addEventListener("click", catButtons);

const cat13 = document.getElementById("catButton13");
cat13.addEventListener("mouseover", showCatGlow);
cat13.addEventListener("mouseout", removeCatGlow);
cat13.addEventListener("click", catButtons);

const cat14 = document.getElementById("catButton14");
cat14.addEventListener("mouseover", showCatGlow);
cat14.addEventListener("mouseout", removeCatGlow);
cat14.addEventListener("click", catButtons);

const cat15 = document.getElementById("catButton15");
cat15.addEventListener("mouseover", showCatGlow);
cat15.addEventListener("mouseout", removeCatGlow);
cat15.addEventListener("click", catButtons);

const cat16 = document.getElementById("catButton16");
cat16.addEventListener("mouseover", showCatGlow);
cat16.addEventListener("mouseout", removeCatGlow);
cat16.addEventListener("click", catButtons);

const cat17 = document.getElementById("catButton17");
cat17.addEventListener("mouseover", showCatGlow);
cat17.addEventListener("mouseout", removeCatGlow);
cat17.addEventListener("click", catButtons);

const cat18 = document.getElementById("catButton18");
cat18.addEventListener("mouseover", showCatGlow);
cat18.addEventListener("mouseout", removeCatGlow);
cat18.addEventListener("click", catButtons);

const cat19 = document.getElementById("catButton19");
cat19.addEventListener("mouseover", showCatGlow);
cat19.addEventListener("mouseout", removeCatGlow);
cat19.addEventListener("click", catButtons);

closeCat.addEventListener("click", closeCatButtons);

const tennisInfo = document.getElementById("tennisInfo");
const closeTennis = document.getElementById("closeTennis");
const tennisBackground = document.getElementById("tennisBackground");
const tennisGlow = document.getElementById("tennisGlow");

function showTennisGlow() {
  tennisGlow.classList.add("show");
}

function removeTennisGlow() {
  tennisGlow.classList.remove("show");
}

function tennisButtons() {
  tennisBackground.classList.add("show");
  tennisInfo.classList.add("show");
  hidePhotoButtons();
  hideBookButtons();
}

function closeTennisButtons() {
  tennisBackground.classList.remove("show");
  tennisInfo.classList.remove("show");
  showBookButtons();
  showPhotoButtons();
}

const tennis1 = document.getElementById("tennisButton1");
tennis1.addEventListener("mouseover", showTennisGlow);
tennis1.addEventListener("mouseout", removeTennisGlow);
tennis1.addEventListener("click", tennisButtons);

const tennis2 = document.getElementById("tennisButton2");
tennis2.addEventListener("mouseover", showTennisGlow);
tennis2.addEventListener("mouseout", removeTennisGlow);
tennis2.addEventListener("click", tennisButtons);

const tennis3 = document.getElementById("tennisButton3");
tennis3.addEventListener("mouseover", showTennisGlow);
tennis3.addEventListener("mouseout", removeTennisGlow);
tennis3.addEventListener("click", tennisButtons);

const tennis4 = document.getElementById("tennisButton4");
tennis4.addEventListener("mouseover", showTennisGlow);
tennis4.addEventListener("mouseout", removeTennisGlow);
tennis4.addEventListener("click", tennisButtons);

const tennis5 = document.getElementById("tennisButton5");
tennis5.addEventListener("mouseover", showTennisGlow);
tennis5.addEventListener("mouseout", removeTennisGlow);
tennis5.addEventListener("click", tennisButtons);

const tennis6 = document.getElementById("tennisButton6");
tennis6.addEventListener("mouseover", showTennisGlow);
tennis6.addEventListener("mouseout", removeTennisGlow);
tennis6.addEventListener("click", tennisButtons);

const tennis7 = document.getElementById("tennisButton7");
tennis7.addEventListener("mouseover", showTennisGlow);
tennis7.addEventListener("mouseout", removeTennisGlow);
tennis7.addEventListener("click", tennisButtons);

const tennis8 = document.getElementById("tennisButton8");
tennis8.addEventListener("mouseover", showTennisGlow);
tennis8.addEventListener("mouseout", removeTennisGlow);
tennis8.addEventListener("click", tennisButtons);

const tennis9 = document.getElementById("tennisButton9");
tennis9.addEventListener("mouseover", showTennisGlow);
tennis9.addEventListener("mouseout", removeTennisGlow);
tennis9.addEventListener("click", tennisButtons);

const tennis10 = document.getElementById("tennisButton10");
tennis10.addEventListener("mouseover", showTennisGlow);
tennis10.addEventListener("mouseout", removeTennisGlow);
tennis10.addEventListener("click", tennisButtons);

const tennis11 = document.getElementById("tennisButton11");
tennis11.addEventListener("mouseover", showTennisGlow);
tennis11.addEventListener("mouseout", removeTennisGlow);
tennis11.addEventListener("click", tennisButtons);

closeTennis.addEventListener("click", closeTennisButtons);

const bookInfo = document.getElementById("bookInfo");
const closeBook = document.getElementById("closeBook");
const bookBackground = document.getElementById("bookBackground");
const bookGlow = document.getElementById("bookGlow");

const ladybug = document.getElementById("ladybug");

function showBookGlow() {
  bookGlow.classList.add("show");
}

function removeBookGlow() {
  bookGlow.classList.remove("show");
}

function bookButtons() {
  bookBackground.classList.add("show");
  bookInfo.classList.add("show");
  ladybug.classList.add("freeze");
  hidePhotoButtons();
}

function closebookButtons() {
  bookBackground.classList.remove("show");
  bookInfo.classList.remove("show");
  ladybug.classList.remove("freeze");
  showPhotoButtons();
}

const book1 = document.getElementById("bookButton1");
book1.addEventListener("mouseover", showBookGlow);
book1.addEventListener("mouseout", removeBookGlow);
book1.addEventListener("click", bookButtons);

const book2 = document.getElementById("bookButton2");
book2.addEventListener("mouseover", showBookGlow);
book2.addEventListener("mouseout", removeBookGlow);
book2.addEventListener("click", bookButtons);

const book3 = document.getElementById("bookButton3");
book3.addEventListener("mouseover", showBookGlow);
book3.addEventListener("mouseout", removeBookGlow);
book3.addEventListener("click", bookButtons);

const book4 = document.getElementById("bookButton4");
book4.addEventListener("mouseover", showBookGlow);
book4.addEventListener("mouseout", removeBookGlow);
book4.addEventListener("click", bookButtons);

const book5 = document.getElementById("bookButton5");
book5.addEventListener("mouseover", showBookGlow);
book5.addEventListener("mouseout", removeBookGlow);
book5.addEventListener("click", bookButtons);

const book6 = document.getElementById("bookButton6");
book6.addEventListener("mouseover", showBookGlow);
book6.addEventListener("mouseout", removeBookGlow);
book6.addEventListener("click", bookButtons);

closeBook.addEventListener("click", closebookButtons);

const photoInfo = document.getElementById("photoInfo");
const closePhoto = document.getElementById("closePhoto");
const photoBackground = document.getElementById("photoBackground");
const photoGlow = document.getElementById("photoGlow");

function showPhotoGlow() {
  photoGlow.classList.add("show");
}

function removePhotoGlow() {
  photoGlow.classList.remove("show");
}

function photoButtons() {
  photoBackground.classList.add("show");
  photoInfo.classList.add("show");
}

function closePhotoButtons() {
  photoBackground.classList.remove("show");
  photoInfo.classList.remove("show");
}

const photo1 = document.getElementById("photoButton1");
photo1.addEventListener("mouseover", showPhotoGlow);
photo1.addEventListener("mouseout", removePhotoGlow);
photo1.addEventListener("click", photoButtons);

const photo2 = document.getElementById("photoButton2");
photo2.addEventListener("mouseover", showPhotoGlow);
photo2.addEventListener("mouseout", removePhotoGlow);
photo2.addEventListener("click", photoButtons);

closePhoto.addEventListener("click", closePhotoButtons);

const bookButton1 = document.getElementById("bookPicButton1");
const bookButton2 = document.getElementById("bookPicButton2");
const bookButton3 = document.getElementById("bookPicButton3");
const bookButton4 = document.getElementById("bookPicButton4");
const bookButton5 = document.getElementById("bookPicButton5");

const bookHover1 = document.getElementById("bookHover1");
const bookHover2 = document.getElementById("bookHover2");
const bookHover3 = document.getElementById("bookHover3");
const bookHover4 = document.getElementById("bookHover4");
const bookHover5 = document.getElementById("bookHover5");

const bookHighlight1 = document.getElementById("bookHighlight1");
const bookHighlight2 = document.getElementById("bookHighlight2");
const bookHighlight3 = document.getElementById("bookHighlight3");
const bookHighlight4 = document.getElementById("bookHighlight4");
const bookHighlight5 = document.getElementById("bookHighlight5");

bookButton1.addEventListener("mouseover", function () {
  bookHover1.classList.add("show");
  bookHighlight1.classList.add("show");
});
bookButton1.addEventListener("mouseout", function () {
  bookHover1.classList.remove("show");
  bookHighlight1.classList.remove("show");
});

bookButton2.addEventListener("mouseover", function () {
  bookHover2.classList.add("show");
  bookHighlight2.classList.add("show");
});
bookButton2.addEventListener("mouseout", function () {
  bookHover2.classList.remove("show");
  bookHighlight2.classList.remove("show");
});

bookButton3.addEventListener("mouseover", function () {
  bookHover3.classList.add("show");
  bookHighlight3.classList.add("show");
});
bookButton3.addEventListener("mouseout", function () {
  bookHover3.classList.remove("show");
  bookHighlight3.classList.remove("show");
});

bookButton4.addEventListener("mouseover", function () {
  bookHover4.classList.add("show");
  bookHighlight4.classList.add("show");
});
bookButton4.addEventListener("mouseout", function () {
  bookHover4.classList.remove("show");
  bookHighlight4.classList.remove("show");
});

bookButton5.addEventListener("mouseover", function () {
  bookHover5.classList.add("show");
  bookHighlight5.classList.add("show");
});
bookButton5.addEventListener("mouseout", function () {
  bookHover5.classList.remove("show");
  bookHighlight5.classList.remove("show");
});

const lampCordOn = document.getElementById("lampCordOn");
const lampCordOff = document.getElementById("lampCordOff");
const lampOn = document.getElementById("lampOn");
const lampCord = document.getElementById("lampCord");

lampCordOn.addEventListener("click", function () {
  lampOn.classList.add("show");
  lampCordOff.classList.add("show");
  lampCord.classList.add("onAnimate");
});

function normalCord() {
  lampCord.classList.remove("offAnimate");
}

lampCordOff.addEventListener("click", function () {
  lampOn.classList.remove("show");
  lampCordOff.classList.remove("show");
  lampCord.classList.replace("onAnimate", "offAnimate");
  setTimeout(normalCord, 400);
});

function positionCatGlow() {
  const body = document.body;
  const bg = new Image();
  bg.src = getComputedStyle(body).backgroundImage.replace(
    /url\((['"])?(.*?)\1\)/gi,
    "$2"
  );

  bg.onload = () => {
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;
    const bgRatio = bg.width / bg.height;
    const bodyRatio = bodyWidth / bodyHeight;

    let bgWidth, bgHeight, bgLeft, bgTop;

    if (bodyRatio > bgRatio) {
      // body is wider than bg
      bgHeight = bodyHeight;
      bgWidth = bgHeight * bgRatio;
      bgTop = 0;
      bgLeft = (bodyWidth - bgWidth) / 2;
    } else {
      // body is taller than bg
      bgWidth = bodyWidth;
      bgHeight = bgWidth / bgRatio;
      bgLeft = 0;
      bgTop = (bodyHeight - bgHeight) / 2;
    }

    // Example: position catGlow relative to background
    const glowLeft = bgLeft + 0.124 * bgWidth; // 17.2% from left of bg
    const glowTop = bgTop + 0.0945 * bgHeight; // 9.35% from top of bg
    const glowWidth = 0.2885 * bgWidth; // 25.2% of bg width
    const glowHeight = glowWidth; // assuming 1:1 aspect ratio

    catGlow.style.left = glowLeft + "px";
    catGlow.style.top = glowTop + "px";
    catGlow.style.width = glowWidth + "px";
    catGlow.style.height = glowHeight + "px";
  };
}

// Call initially and on resize
positionCatGlow();
window.addEventListener("resize", positionCatGlow);
