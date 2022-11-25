import "../../styles/globals.css"

import Header from "../components/header"
import Footer from "../components/footer"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="w-screen h-full">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
