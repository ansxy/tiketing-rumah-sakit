import Link from "next/link"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"

export default function Footer() {
    const path = usePathname()
    const { sessionData: session, status } = useSession()

    return (
        <footer
            className={
                session === undefined &&
                (path === "/signin" || path === "/signup")
                    ? "hidden"
                    : "w-full bg-healtick-green text-white flex justify-center p-6 font-xs"
            }
        >
            Made by Xploratech Copyright@2022
        </footer>
    )
}
