import localFont from "next/font/local"
import './globals.css'
import NavBar from "./components/NavBar"

const gotham = localFont({
  src: [
    {
      path: "./fonts/Gotham-Black.otf",
      weight: "900",
      style: "normal"
    },
    {
      path: "./fonts/Gotham-Bold.ttf",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/Gotham-Bold-Italic.ttf",
      weight: "800",
      style: "italic"
    },
    {
      path: "./fonts/Gotham-Book.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Gotham-Book-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "./fonts/Gotham-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/Gotham-Light-Italic.ttf",
      weight: "300",
      style: "italic"
    },
  ]
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gotham.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
