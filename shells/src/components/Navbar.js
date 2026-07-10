function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">
          Portal Berita Olahraga
        </h1>

        <ul className="flex gap-6">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Berita</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;