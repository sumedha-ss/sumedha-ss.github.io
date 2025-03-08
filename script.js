// Get the popup and close button
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", function () {
  popup.classList.add("hidden");
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

function showBookGlow() {
  bookGlow.classList.add("show");
}

function removeBookGlow() {
  bookGlow.classList.remove("show");
}

function bookButtons() {
  bookBackground.classList.add("show");
  bookInfo.classList.add("show");
  hidePhotoButtons();
}

function closebookButtons() {
  bookBackground.classList.remove("show");
  bookInfo.classList.remove("show");
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
