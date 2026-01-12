import { useEffect, useState } from "react"

const phrases = [
    "console.log('Hello World')",
    "while(true) { learn() }",
    "git commit -m 'fix bugs'",
    "npm run build",
]
export const TypingText = () => {
    const [text, setText] = useState("")
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)


    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentPhrase.slice(0, charIndex + 1))
                setCharIndex(charIndex + 1)
                if (charIndex === currentPhrase.length) {
                    setTimeout(() => setIsDeleting(true), 1200)
                }
            } else {
                setText(currentPhrase.slice(0, charIndex - 1))
                setCharIndex(charIndex - 1)
                if (charIndex === 0) {
                    setIsDeleting(false)
                    setPhraseIndex((prev) => (prev + 1) % phrases.length)
                }
            }
        }, isDeleting ? 40 : 80)
        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, phraseIndex])

    return (
        <div className="my-5">
            <span className="text-white">{text}|</span>
        </div>
    )
}
