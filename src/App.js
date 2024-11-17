import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
function Contoh() {
 const [message, setMessage] = useState('Mount');

 useEffect(() => {
   return () => {
     setMessage('Unmount');
     document.title = `Total Klik ${message}`;
   };
 }, []);

 const handleClick = () => {
   setMessage('Updated');
   document.title = 'Terupdate';
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

export default Contoh