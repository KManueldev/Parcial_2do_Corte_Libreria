import React, { useState, useEffect } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  const toggleModal = () => setShowModal(!showModal);

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) {
      alert("Título y autor son obligatorios");
      return;
    }

    const updatedFavorites = [...favorites, newBook];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setNewBook({ title: "", author: "", year: "" });
    toggleModal();
  };

  const handleDeleteClick = (book) => {
    setBookToDelete(book);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedFavorites = favorites.filter((b) => b !== bookToDelete);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setBookToDelete(null);
    setShowDeleteModal(false);
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <section id="favorites" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mis Libros Favoritos</h2>

      {/* Botón para abrir modal */}
      <button
        onClick={toggleModal}
        className="px-5 py-2 bg-[#3C8C56] hover:bg-[#347a4b] text-white font-semibold rounded-lg shadow-md transition mb-6"
      >
        + Agregar Favorito
      </button>

      {/* Lista de favoritos */}
      <div className="flex flex-wrap gap-4">
        {favorites.map((book, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 w-60 bg-white shadow-md"
          >
            <h3 className="font-semibold text-lg">{book.title}</h3>
            <p>
              <span className="font-medium">Autor:</span> {book.author}
            </p>
            <p>
              <span className="font-medium">Año:</span> {book.year || "N/A"}
            </p>
            <button
              onClick={() => handleDeleteClick(book)}
              className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition text-sm"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative z-50">
            <h3 className="text-xl font-bold mb-4">Agregar Libro Favorito</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Título"
                value={newBook.title}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-black"
                required
              />
              <input
                type="text"
                name="author"
                placeholder="Autor"
                value={newBook.author}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-black"
                required
              />
              <input
                type="number"
                name="year"
                placeholder="Año"
                value={newBook.year}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-black"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="submit"
                  className="bg-[#3C8C56] hover:bg-[#347a4b] text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de confirmación de eliminación */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Confirmar eliminación</h3>
            <p>
              ¿Seguro que quiere eliminar el libro{" "}
              <span className="font-semibold">{bookToDelete?.title}</span>?
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
              >
                Eliminar
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
