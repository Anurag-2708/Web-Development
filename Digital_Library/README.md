# Digital Library

This project is a dynamic, client-side digital bookshelf application designed to help users track and manage their personal reading collections. It was created as part of my **Web Development** learning journey following the [The Odin Project](https://www.theodinproject.com) curriculum.

Link to Project 👉 [Digital Library](https://anurag-2708.github.io/Web-Development/Digital_Library/index.html)

## Key Features
- **Dynamic Bookshelf Management:** Add new books with comprehensive metadata including title, author, page count, and completion status.
- **Interactive State Toggling:** Change a book's reading status ("Completed" vs. "Not Completed") on the fly with immediate UI updates.
- **Live Metrics Tracking:** Displays real-time updates of the total book count and conditionally renders an empty-state message when the bookshelf is cleared.
- **Robust UI Resiliency:** Built with clean CSS Grid layouts and custom responsive element safety constraints to prevent text overflowing.

## Technical Implementation
The primary focus of this project was mastering **Object-Oriented Programming (OOP) principles** and optimizing DOM performance via **Event Delegation**. 

Books are instantiated as instances of a JavaScript `class` and uniquely identified using the native `crypto.randomUUID()` API. Rather than attaching event listeners to individual book cards, which risks memory leaks, a single click listener is bound to the parent `.bookshelf` container. This handler captures bubbling events, uses the `.closest()` method to target elements, and updates the underlying global array state before synchronizing it back to the viewport via a centralized `renderBookshelf()` method.

## Contacts

Feel free to connect with me through the links below:
- [LinkedIn](https://www.linkedin.com/in/anurag-ghosh-619072349/)
- [GitHub](https://github.com/Anurag-2708)
- [Discord](https://www.discord.com/users/750996926610145311)

**Finished on 9th June, 2026**