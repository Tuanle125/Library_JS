const Empty_Img_Path = "./img/books/empty.svg";
const Check_Img_Path = "./img/icon/check.svg";
const library = [];
document.addEventListener("DOMContentLoaded", () => {
    const btn_addBookDialog = document.querySelector("#add-book-dialog");
    const formBook = document.querySelector(".dialog-book");
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
        library.push(book);
        createBookCard(book);
        formBook.close();
        // e.preventDefault();
    });
});



function Book(title, author, imgPath, isRead) {
    this.title = title;
    this.author = author;
    this.imgPath = imgPath;
    this.isRead = isRead;
}

function addBookToLib(book) {
    library.push(book);
}

function createBookCard(book){
    const cardList = document.querySelector(".card-list");
    const card = document.createElement("div");
    card.classList.add("card2");

    const title = document.createElement("div");
    const author = document.createElement("div");
    const img = document.createElement("img");
    const subContainer = document.createElement("div");

    title.classList.add("title", "truncate1");
    author.classList.add("author", "truncate2");
    img.classList.add("img-book");
    subContainer.classList.add("author-readed");

    img.src = book.imgPath;
    
    title.innerHTML = book.title;
    author.innerHTML = book.author;

    subContainer.append(author);
    if(book.isRead){
        const readed = document.createElement("img");
        readed.classList.add("readed", "untouchable");
        readed.src = Check_Img_Path;
        subContainer.append(readed);
    }
    card.append(img, title, subContainer);
    cardList.append(card);
}
