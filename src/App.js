import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstHeader from './home/FirstHeader'
import SecondHeader from './home/SecondHeader'
import ThirdHeader from './home/ThirdHeader'
import FamousNews from './components/famousNews'
import MostNews from './components/MostNews'
import axios from 'axios';

import TrendNews from './components/TrendNews'
import FireNews from './components/FireNews'
import More from './components/More'

export default function App() {

  const apiKey = '8e79fb87bdb947f2be52fecea9bfd8f2';
  const [data, setData] = useState([]);
  const [selectedLan, setSelectedLan] = useState("en")

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?language=${selectedLan}&sortBy=popularity&apiKey=${apiKey}`);
      setData(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedLan) {
      fetchData();
    }
  }, [selectedLan]);




  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&country=us&category=sport&apiKey=${apiKey}`);
        const jsonData = await response.json();
        setData3(jsonData.articles);
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
        setData2(jsonData.articles);
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
        setData4(jsonData.articles);
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
        setData5(jsonData.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <FirstHeader />
        <SecondHeader setSelectedLan={setSelectedLan} fetchData={fetchData} selectedLan={selectedLan} />
        <ThirdHeader />
        <Routes>
          <Route path="/" element={<FamousNews selectedLan={selectedLan}
            data3={data3}
            data2={data2}
            data4={data4}
            data5={data5}
            data={data} />} />
          <Route path="/firenews" element={<FireNews />} />
          <Route path="/mostviewednews" element={<MostNews />} />
          <Route path="/trendnews" element={<TrendNews />} />
          <Route
            path="/products/:publishedAt"
            element={<More
              data={data}
              data3={data3}
              data2={data2}
              data4={data4}
              data5={data5}

            />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
