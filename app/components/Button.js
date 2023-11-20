// Components
import Link from "next/link"

export default function Button({ text, className }) {
    return (
        <Link href="#book-call" className={className}>{text}</Link>
    )
}