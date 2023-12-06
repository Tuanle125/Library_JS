const Empty_Img_Path = "./img/books/empty.svg";
const Check_Img_Path = "./img/icon/check.svg";
const library = [];
document.addEventListener("DOMContentLoaded", () => {
    const btn_addBookDialog = document.querySelector("#add-book-dialog");
    const formBook = document.querySelector("#dialog-book-add");
    btn_addBookDialog.addEventListener("click", () => {
        formBook.showModal();
    });

    const btn_addBook = document.querySelector("#add-book");
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const imgLink = document.querySelector("#img-link");
    const isRead = document.querySelector("#is-read");
    btn_addBook.addEventListener("click", (e) => {
        const book = new Book(
            title.value, 
            author.value, 
            imgLink.value ? imgLink.value : Empty_Img_Path,
            isRead.checked); console.log(isRead.checked);
        addBook(book);
        loadLibrary();
        formBook.close();
        e.preventDefault();
    });

    const formbookDetail = document.querySelector("#dialog-book-detail");
    const btn_saveBook = document.querySelector("#save-book");
    const btn_delBook = document.querySelector("#del-book");
    btn_saveBook.addEventListener("click", (e) => {
        const id = e.target.value; 
        library[id].isRead = document.querySelector("#is-read-detail").checked;
        loadLibrary();
        formbookDetail.close();
        e.preventDefault();
    });
    btn_delBook.addEventListener("click", (e) => {
        const id = e.target.value; 
        library.splice(id, 1);
        loadLibrary();
        formbookDetail.close();
        e.preventDefault();
    });
    loadLibrary();
});



function Book(title, author, imgPath, isRead) {
    this.title = title;
    this.author = author;
    this.imgPath = imgPath;
    this.isRead = isRead;
}

function loadLibrary(){
    const cardList = document.querySelector(".card-list");
    cardList.innerHTML = "";
    console.log(library);
    library.forEach((book, index) => {
        createBookCard(book, index);
        addEventOpenDetail(index);
    });
}

function addBook(book) {
    library.push(book);
    createBookCard(book, library.length);
    addEventOpenDetail(library.length);
}

function createBookCard(book, id){
    const cardList = document.querySelector(".card-list");
    const card = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const img = document.createElement("img");
    const subContainer = document.createElement("div");
    
    card.classList.add("card2", "book"+id);
    title.classList.add("title", "truncate1");
    author.classList.add("author", "truncate2");
    img.classList.add("img-book");
    subContainer.classList.add("author-readed");

    img.src = book.imgPath;
    title.innerHTML = book.title;
    author.innerHTML = book.author;

    subContainer.append(author);
    //add checked icon if book's readed
    if(book.isRead){
        const readed = document.createElement("img");
        readed.classList.add("readed", "untouchable");
        readed.src = Check_Img_Path;
        subContainer.append(readed);
    }
    card.append(img, title, subContainer);
    cardList.append(card);
}

function addEventOpenDetail(id){
    const bookDetailDialog = document.querySelector("#dialog-book-detail");
    const card = document.querySelector(".book"+id);
    card.addEventListener("click", () => {
        bookDetailDialog.showModal();
        document.querySelector("#is-read-detail").checked = library[id].isRead;
        document.querySelector("#save-book").value = id;
    });
}

const HTWFAFP = new Book("how to win friends and influence people", "Dale Carnegie", "./img/books/How To Win Friend & Influence People.jpg", true)
const SH = new Book("7 Habits", "Stephen Covey", "./img/books/7 Habits.jpg");
library.push(SH);
library.push(HTWFAFP);
