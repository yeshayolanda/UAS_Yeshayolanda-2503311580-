import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import NewsCard from "./components/NewsCard";

function App() {
  const [news, setNews] = useState([]);
  const [filterNews, setFilterNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakenews.squirro.com/news/sport")
      .then((res) => {
        setNews(res.data);
        setFilterNews(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (keyword) => {
    const result = news.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );

    setFilterNews(result);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />

      <div className="container mx-auto p-5 flex-1">

        <SearchBar onSearch={handleSearch} />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">

          {filterNews.map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;