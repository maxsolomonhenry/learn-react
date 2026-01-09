import { useState} from 'react';
import './App.css';

function Button( {count, setCount, children, className} ) {
  function handleClick() {
    setCount(count + 1);
  }
  if (count >= 5){
    return <p className="text-xl">🙃</p>
  }
  return <button onClick={handleClick} className={className}> {children}{count} </button>
}

export default function App() {
  const [count, setCount] = useState(0);
  const flipped = count >= 5;
  
  return (
    <div className="relative w-screen group">
      <div className="absolute inset-0 bg-linear-to-t from-violet-950 to-violet-700 transition-opacity duration-500" />
      <div className={`absolute inset-0 bg-linear-to-b from-violet-950 to-blue-600 transition-opacity duration-500 opacity-0 group-hover:opacity-100`} />
      
      <div className="relative flex flex-col items-center justify-center h-screen">
        <p className="text-white text-center">Hey this is a thing I made.</p>
        <Button count={count} setCount={setCount} className="text-white text-center"/>
      </div>
    </div>
  )
}