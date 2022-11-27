"use client"
import "../../styles/globals.css"
import Header from "../components/header"
import Footer from "../components/footer"
import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <SessionProvider>
                <body className="w-screen h-screen overflow-x-hidden">
                    <Header />
                    {children}
                    <Footer />
                </body>
            </SessionProvider>
        </html>
    )
}
