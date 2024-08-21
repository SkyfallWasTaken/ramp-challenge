import { Suspense, useState, useEffect } from "react"

export default function App() {
  const [typed, setTyped] = useState("")
  
  useEffect(() => {
    const fetchWord = async () => {
      const url = "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636861"
      const response = await fetch(url)
      const word = await response.text()

      const interval = setInterval(() => {
        setTyped(typed => typed + word[typed.length])
        if (typed.length >= word.length) {
          clearTimeout(interval)
        }
      }, 500)
      return interval
    }

    return () => clearTimeout(fetchWord())
  }, [])
  
  return (
    <main>
      <p>{typed}</p>
    </main>
  )
}