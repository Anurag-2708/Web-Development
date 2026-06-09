const library = []

class Book {
    constructor(title, author, pages, status) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

const form = document.querySelector(".add_book_form");
const bookshelf = document.querySelector(".bookshelf");
const total_books = document.querySelector(".total_books");
const empty_message = document.querySelector(".empty_message");

function renderBookshelf() {
    bookshelf.innerHTML = "";

    for (let i = 0; i < library.length; i++) {
        const book = library[i];

        const book_div = document.createElement("div");
        book_div.classList.add("book");
        book_div.dataset.id = book.id;

        const book_info = document.createElement("div");
        book_info.classList.add("book_info");

        const title_p = document.createElement("p");
        const other_info = document.createElement("p");
        title_p.classList.add("title");
        other_info.classList.add("other_info");

        title_p.textContent = book.title;
        other_info.textContent = `by ${book.author} | ${book.pages} pages`;
        book_info.appendChild(title_p);
        book_info.appendChild(other_info);

        const status_button = document.createElement("button");
        status_button.classList.add("status_button");

        if (book.status === "completed") {
            status_button.classList.add("completed");
            status_button.textContent = "Completed";
        } else {
            status_button.classList.add("not_completed");
            status_button.textContent = "Not Completed";
        }

        const remove_button = document.createElement("button");
        remove_button.classList.add("remove_button");
        remove_button.textContent = "Remove";

        book_div.appendChild(book_info);
        book_div.appendChild(status_button);
        book_div.appendChild(remove_button);

        bookshelf.appendChild(book_div);
    }

    total_books.textContent = `Total Books: ${library.length}`;

    if (library.length === 0) {
        empty_message.classList.remove("hidden");
    } else {
        empty_message.classList.add("hidden");
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const pages = form.elements.pages.value;
    const status = form.elements.status.value;

    const book = new Book(title, author, pages, status);
    library.push(book);

    renderBookshelf();
    form.reset();
})

bookshelf.addEventListener("click", e => {
    const target = e.target;
    const bookDiv = target.closest(".book");
    if (!bookDiv) return;

    const bookId = bookDiv.dataset.id;

    if (target.classList.contains("status_button")) {
        const book = library.find(b => b.id === bookId);

        if (target.classList.contains("completed")) {
            target.classList.replace("completed", "not_completed");
            target.textContent = "Not Completed";
            book.status = "not_completed";
        }
        else {
            target.classList.add("completed");
            target.classList.replace("not_completed", "completed");
            target.textContent = "Completed";
            book.status = "completed";
        }

        renderBookshelf();
    }

    if (target.classList.contains("remove_button")) {
        const index = library.findIndex(b => b.id === bookId);
        library.splice(index, 1);

        renderBookshelf();
    }
})