import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.ibb.co/gTGn241/hootum-black-no-bg.png" className="h-8" alt="Hootum Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hootum</span>
                </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="navlist">
                        <li><Link href="/dashboard"        className="navlink">Dashboard</Link></li>
                        <li><Link href="/server"           className="navlink">Server</Link></li>
                        <li><Link href="/client"           className="navlink">Client</Link></li>
                        <li><Link href="/api/auth/signin"  className="navlink">Sign In</Link></li>
                        <li><Link href="/api/auth/signout" className="navlink">Sign Out</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
