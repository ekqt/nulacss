import Anchor from "./UI/Anchor";

type NavbarProps = {
    links?: Array<{
        href: string;
        label: string;
    }>;
};

export default function Navbar({ links }: NavbarProps) {
    return (
        <nav
            aria-label="Main Navigation"
            className="border-b border-stone-500 pt-16"
        >
            <div className="container-width grid gap-3">
                <h2 className="text-3xl w-fit font-bold md:text-5xl">
                    nula
                    <span className="text-sm">.CSS</span>
                </h2>
                <div className="flex items-center justify-end gap-3">
                    {links?.map(({ href, label }, index) => (
                        <Anchor key={index} href={href}>
                            {label}
                        </Anchor>
                    ))}
                </div>
            </div>
        </nav>
    );
}
