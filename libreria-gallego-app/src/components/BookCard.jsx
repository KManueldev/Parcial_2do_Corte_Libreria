import React, { useEffect, useState } from "react";

export default function BookCard() {
  const [books, setBooks] = useState([]);

  // Consumir API
  const fetchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error al obtener libros:", error);
    }
  };

  useEffect(() => {
    fetchBooks("popular");
  }, []);

  return (
    <section
      id="bookcard"
      className="relative bg-transparent w-full z-10 mt-24" 
      // mt-24 agrega espacio para que no tape el h2
    >
      <div className="px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Libros populares
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {books.map((book) => {
            const { title, authors, publishedDate, imageLinks } = book.volumeInfo;
            const thumbnail = imageLinks?.thumbnail;

            return (
              <div
                key={book.id}
                className="w-60 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col"
              >
                {/* Imagen */}
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-72 object-cover rounded-lg mb-3"
                  />
                ) : (
                  <div className="w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-3">
                    Sin imagen
                  </div>
                )}

                {/* Info */}
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Autor(es):</span>{" "}
                  {authors ? authors.join(", ") : "Desconocido"}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Año:</span>{" "}
                  {publishedDate ? publishedDate.substring(0, 4) : "N/A"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
