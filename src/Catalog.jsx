import React from "react";

import books from "./data";

import CatalogItem from "./CatalogItem";

function Catalog() {
  return (
    <div>
      <h2>Daftar Buku Perpustakaan</h2>

      <div className="book-container">
        {books.map((book) => (
          <CatalogItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
