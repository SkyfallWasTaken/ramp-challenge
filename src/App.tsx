import { Suspense, useState, useEffect } from "react"

export default function App() {
  const [word, setWord] = useState<string | null>(null)
  useEffect(() => {
    const fetchWord = async () => {
      const url = "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636861"
      const response = await fetch(url)
      setWord(await response.text())
    }

    fetchWord()
  }, [])
  
  return (
    <main>
      <p>{word}</p>
    </main>
  )
}