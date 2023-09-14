import Link from "next/link"

const Navbar = () => {

    return (
        <nav className="px-6 py-4 flex items-center">
            <div className="logo">
                <h1 className="text-3xl text-white font-bold">IntelliDocs</h1>
            </div>
            <Link href="#">Home</Link>
        </nav>
    )
}

export default Navbar