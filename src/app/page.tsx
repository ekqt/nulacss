"use client";

import Button from "@/components/UI/Button";
import Link from "@/components/UI/Link";
import { useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(false);

    function handleClick() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return (
        <>
            {/* Just HTML */}
            <section>
                <h2>Write clean HTML</h2>
                <p>
                    Prototyping an idea takes time. Why worry about styling
                    everything? Design can come later,{" "}
                    <b>core functionality is key to a deliverable product</b>.
                    Using{" "}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        TailwindCSS
                    </a>
                    , this project provides you a template while you figure
                    things out.
                </p>
                <p>Before we had inline links, these are navigation links.</p>
                <aside>
                    <a
                        href="https://hectorsosa.me"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Read more about this
                    </a>
                    <a
                        href="https://github.com/ekqt/nula"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Go to GitHub
                    </a>
                </aside>
                <p>These are test buttons:</p>
                <footer>
                    <button onClick={() => alert("Hello 👋🏼")}>Submit</button>
                    <button>Save</button>
                    <button>Cancel</button>
                </footer>
            </section>
            {/* Custom Components */}
            <section>
                <h2>Integrate your Components</h2>
                <p>
                    Once you are ready to style. You just need to start creating
                    components and/or styles. Using{" "}
                    <Link
                        variant="external"
                        href="https://tailwindcss.com/docs/utility-first"
                        target="_blank"
                    >
                        TailwindCSS utility classes
                    </Link>{" "}
                    will overwrite the template styles.
                </p>
                <p>Before we had inline links, these are navigation links.</p>
                <aside>
                    <Link
                        variant="nav"
                        href="https://hectorsosa.me"
                        target="_blank"
                    >
                        Read more about this
                    </Link>
                    <Link
                        variant="nav"
                        href="https://github.com/ekqt/nula"
                        target="_blank"
                    >
                        Go to GitHub
                    </Link>
                </aside>
                <p>These are custom Button components:</p>
                <footer>
                    <Button onClick={handleClick} loading={loading} icon>
                        Submit
                    </Button>
                    <Button variant="secondary">Save</Button>
                    <Button variant="tertiary">Cancel</Button>
                </footer>
            </section>
        </>
    );
}
