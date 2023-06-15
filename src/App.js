import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstHeader from './home/FirstHeader'
import SecondHeader from './home/SecondHeader'
import FamousNews from './components/famousNews'
import MostNews from './components/MostNews'
import axios from 'axios';
import emailjs from 'emailjs-com';
import TrendNews from './components/TrendNews'
import FireNews from './components/FireNews'
import More from './components/More'
import Footer from './home/Footer'
import ScrollToTopButton from './components/ScrollToTop'
import Aloqa from './components/aloqa'
import Adv from './components/Adv'
import VideoNews from './components/VideoNews'
import ShowMore from './components/ShowMore'
import SendToEmail from './components/SendToEmail'
import FamousNews2 from './components/FamousNews2'
import WorldNews2 from './components/WorldNews2'
import Bussnuis from './components/Bussnuis'
import Entertainment from './components/Entertainment'
import Sport from './components/Sport'
import Technologies from './components/Technologies'
import Workers from './home/Workers'
import About from './components/About'
import Search from './home/Search'
export default function App() {

  const apiKey = '290ffa15d6ed4f4682b1213e2dbd5004';
  const [data, setData] = useState([]);
  const [selectedLan, setSelectedLan] = useState("en")
  const [country, setCountry] = useState('')



  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          country: country,
          language: selectedLan,
          apiKey: apiKey,
        },
      });
      setData(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectedLan, country]);

  useEffect(() => {
    if (selectedLan) {
      fetchData();
    }
  }, [selectedLan]);
 



  const [business, setBusiness] = useState([]);
  const [sport, setSport] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [entertainment, setEntertainment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&country=us&category=sport&apiKey=${apiKey}`);
        const jsonData = await response.json();
        setSport(jsonData.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`);
        const jsonData = await response.json();
        setTechnology(jsonData.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
        const jsonData = await response.json();
        setBusiness(jsonData.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`);
        const jsonData = await response.json();
        setEntertainment(jsonData.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("")
  const filteredProducts = []
  .concat(data, business, sport, technology, entertainment)
  .filter((item) =>
    item.title && typeof item.title === 'string' &&
    item.title.toLowerCase().includes(searchTerm.toLowerCase())

  );


  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  emailjs.init('QpAtdmkr2KtmM3_WP');
  return (
    <>
      <BrowserRouter>
        <FirstHeader />
        <SecondHeader data={data}  handleSearch={handleSearch} searchTerm={searchTerm} setSelectedLan={setSelectedLan} country={country} setCountry={setCountry} fetchData={fetchData} selectedLan={selectedLan} />

        <ScrollToTopButton />
        <Routes>

          <Route path="/" element={<FamousNews selectedLan={selectedLan}
            business={business}
            entertainment={entertainment}
            technology={technology}
            sport={sport}
            data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/texnologiya" element={<Technologies technology={technology} />} />
          <Route path="/jamiyat" element={<Entertainment entertainment={entertainment} />} />
          <Route path="/sport" element={<Sport sport={sport} />} />
          <Route path="/iqtisodiyot" element={<Bussnuis business={business} />} />
          <Route path="/firenews" element={<FireNews data={data} />} />
          <Route path="/famousnews" element={<FamousNews2 data={data} />} />
          <Route path="/mostviewednews" element={<MostNews data={data} />} />
          <Route path="/trendnews" element={<TrendNews data={data} />} />
          <Route path="/contacts" element={<Aloqa />} />
          <Route path="/adv" element={<Adv />} />
          <Route path="/worldnews" element={<WorldNews2 data={data} />} />
          <Route path="/firenewsteam" element={<Workers />} />
          <Route path="/search" element={<Search filteredProducts={filteredProducts} />} />

          <Route
            path="/products/:publishedAt"
            element={<More
              data={data}
              business={business}
              entertainment={entertainment}
              technology={technology}
              sport={sport}

            />}
          />
        </Routes>
        <VideoNews data={data} />
        <ShowMore data={data} />
        <SendToEmail />
        <Footer />
      </BrowserRouter>
    </>
  )
}
