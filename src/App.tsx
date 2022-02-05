import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import unsplash from './components/unsplash';
import ImageList from './components/ImageList';
import Add from './components/AddImg';
import Delete from './components/DeleteImg';

function App() {
  let [images, setImages] = useState([]);
  const onSearchSubmit = async (text:string) => {
    const response = await unsplash.get('search/photos', {
      params: { query: text },
    });
    setImages(response.data.results);
  }
  return (
    <div style={{ marginTop: '10px' }}>
      <SearchBar runOnSubmit={onSearchSubmit} />
      <p className="text-3xl font-bold underline">Found:{images.length}</p>
      <Add />
      <Delete />
      <ImageList images={images} />
    </div>
  );
}

export default App;
