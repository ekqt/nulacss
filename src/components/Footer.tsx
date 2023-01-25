import Link from "./UI/Link";

type FooterProps = {
    links?: Array<{
        href: string;
        label: string;
    }>;
};

export default function Footer({ links }: FooterProps) {
    return (
        <footer className="mt-6 border-t border-stone-500 pb-16">
            <div className="container-width w-full flex h-full flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <div aria-label="Copyright" className="text-lg font-semibold">
                    © 2022 Hector Sosa
                </div>
                <ul className="flex flex-col gap-3 font-light lg:flex-row lg:gap-6">
                    {links?.map(({ href, label }, index) => (
                        <Link
                            key={index}
                            variant="external"
                            href={href}
                            target="_blank"
                        >
                            {label}
                        </Link>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
