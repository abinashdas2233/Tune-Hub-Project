import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminnavbar from './Adminnavbar';
import './Aviewsongs.css'

function Aviewsongs() {
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await axios.get("http://localhost:8080/map-viewsong"); // Assuming this is the correct endpoint URL
        setSongsList(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    }

    fetchSongs();
  }, []);

  return (
    <div>
      <Adminnavbar />
      <div className="co">
        <h1>Songs List</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {songsList.map((song, index) => (
              <tr key={index}>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>
                  <audio controls>
                    <source src={song.link} type="audio/mpeg" />
                  </audio>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Aviewsongs;
