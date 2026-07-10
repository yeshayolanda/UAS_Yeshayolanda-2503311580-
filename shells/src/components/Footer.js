function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="container mx-auto px-6 py-6 text-center">
        <h2 className="text-lg font-semibold">
          Portal Berita Olahraga
        </h2>

        <p className="text-gray-300 mt-2">
          Menampilkan berita olahraga dari API FakeNews.
        </p>

        <hr className="my-4 border-gray-600" />

        <p className="text-sm text-gray-400">
          © 2025 UAS ReactJS | Fauzi Firmansyah | 2503310968
        </p>
      </div>
    </footer>
  );
}

export default Footer;