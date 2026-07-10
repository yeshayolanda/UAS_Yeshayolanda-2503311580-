function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">

      <img
        src={news.image}
        alt={news.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold text-lg mb-2">
          {news.title}
        </h2>

        <p className="text-gray-600 text-sm mb-3">
          {news.summary}
        </p>

        <a
          href={news.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Baca Selengkapnya
        </a>

      </div>

    </div>
  );
}

export default NewsCard;