import './App.css';
import Map from '@components/Map/Map';
import { useEffect } from 'react';

function App() {
  // console.log(import.meta.env.VITE_API_KEY);

  return (
    <div className="container bg-slate-100 m-auto min-h-screen title">
      <h1>서초구 맛집 지도</h1>
      <button className="btn">버튼</button>
      <Map />
    </div>
  );
}

export default App;
