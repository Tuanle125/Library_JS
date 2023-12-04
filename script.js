const library = [];

function Book(title, desc, imgPath) {
    this.title = title;
    this.desc = desc;
    this.imgPath = imgPath;
}

function addBookToLib(book) {
    library.push(book);
}

function createBookStyle(book){
    const cardList = document.querySelector(".card-list");
    const card = document.createElement("div");
    card.classList.add("card2");

    const title = document.createElement("div");
    const desc = document.createElement("div");
    const img = document.createElement("img");
    title.classList.add("txt2", "truncate1");
    desc.classList.add("description", "truncate2");
    img.classList.add("img-book");

    img.src = book.imgPath;
    title.innerHTML = book.title;
    desc.innerHTML = book.desc;

    card.append(img, title, desc);
    cardList.append(card);
}

let dungViec = new Book("Dung Viec", "afalksfjkds ksdfjsdkf fksdfj", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630654893i/27840432.jpg");
createBookStyle(dungViec);