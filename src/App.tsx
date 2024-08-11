import { Suspense, useState, useEffect } from "react"

export default function App() {
  const [typed, setTyped] = useState("")
  
  useEffect(() => {
    const fetchWord = async () => {
      const url = "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636861"
      const response = await fetch(url)
      const word = await response.text()
    }

    fetchWord()
  }, [])

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < word.length) {
        setTyped(prevText => prevText + word.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 500);

    return () => {
      clearInterval(typingInterval);
    };
  }, [word]);
  
  return (
    <main>
      <p>{typed}</p>
    </main>
  )
}