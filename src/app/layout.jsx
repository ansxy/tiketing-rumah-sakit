"use client"
import "../../styles/globals.css"
import Header from "../components/header"
import Footer from "../components/footer"
import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <SessionProvider>
                <body className="overflow-x-hidden">
                    <Header />
                    <main className="w-screen h-full">{children}</main>
                    <Footer />
                </body>
            </SessionProvider>
        </html>
    )
}
