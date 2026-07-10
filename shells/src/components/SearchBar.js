function SearchBar({ onSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Cari berita..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;