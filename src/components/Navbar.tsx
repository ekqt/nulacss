import Link from "./UI/Link";

export default function Navbar() {
    return (
        <nav className="border-b border-stone-500 pt-16">
            <header className="container-width grid gap-3">
                <h2 className="text-3xl w-fit font-bold md:text-5xl">
                    nula
                    <span className="text-sm">.CSS</span>
                </h2>
                <ul className="flex items-center justify-end gap-3">
                    <Link href="/">Home</Link>
                    <Link href="/">Components</Link>
                </ul>
            </header>
        </nav>
    );
}
