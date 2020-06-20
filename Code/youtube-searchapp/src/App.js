import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar.js';
import VideoPlayer from './components/VideoPlayer.js';
import VideoList from './components/VideoList.js';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const apiKey = "YOUR API KEY";

  let getSelectedVideo = (videoId) => {
    setSelectedVideo(videoId);
  }

  let updateSearchResults = (searchResults) => {
    setResults(searchResults);
  }

  return (
    <div className="App">
      <Navbar />
      <SearchBar apiKey = {apiKey} updateSearchResults = {updateSearchResults}/>
      <div className = "search-results">
      <VideoPlayer selectedVideo = {selectedVideo}/>
      <VideoList results = {results} getSelectedVideo = {getSelectedVideo}/>
      </div>
    </div>
  );
}

export default App;
