import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className={`${inter.variable} font-sans`}>
                <Navbar
                    links={[
                        {
                            href: "/",
                            label: "Home",
                        },
                        {
                            href: "/",
                            label: "Components",
                        },
                    ]}
                />
                <main className="container-width">{children}</main>
                <Footer
                    links={[
                        {
                            href: "https://hectorsosa.me",
                            label: "Personal Website",
                        },
                        {
                            href: "https://hectorsosa.me/github",
                            label: "GitHub",
                        },
                    ]}
                />
            </body>
        </html>
    );
}
