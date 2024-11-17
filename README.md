Disamping adalah potongan kode dari file Contoh.js, kalian diminta untuk menampilkan judul menggunakan document.title setiap kali variable message berubah.

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
function Contoh() {
 const [message, setMessage] = useState('Mount');

 useEffect(() => {
   return () => {
     setMessage('Unmount');
   };
 }, []);

 const handleClick = () => {
   setMessage('Updated');
 };
 return (
   <div>
     <p>Message: {message}</p>
     <button onClick={handleClick}>Click</button>
   </div>
 );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contoh />);
