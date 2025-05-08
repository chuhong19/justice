import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    fetch('http://localhost:15050/api/ping')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error'));
  }, []);

  return (
    <div>
      <h1>Frontend React (TS)</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
