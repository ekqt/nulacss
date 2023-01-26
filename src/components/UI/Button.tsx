import cx from "@/utils/cx";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    Partial<
        | {
              variant: "primary";
              icon: boolean;
              loading: boolean;
          }
        | {
              variant: "secondary" | "tertiary";
              icon: never;
              loading: boolean;
          }
    >;

export default function Button({
    children,
    variant = "primary",
    icon,
    loading = false,
    disabled = false,
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={disabled}
            {...props}
            className={`relative inline-flex w-full items-center justify-center gap-2 overflow-hidden border-stone-800 py-2 px-5 text-lg font-light ring-offset-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 active:scale-95 dark:border-stone-50 dark:ring-offset-black sm:w-fit
            ${cx(
                variant === "primary" &&
                    "rounded-full border bg-stone-800 text-stone-50 dark:bg-stone-50 dark:text-stone-800",
                variant === "secondary" &&
                    "rounded-full border bg-transparent text-stone-800 disabled:bg-stone-50/20 dark:text-stone-50",
                variant === "tertiary" &&
                    "rounded-none border-b bg-transparent text-stone-800 disabled:bg-stone-50/10 dark:text-stone-50",
                disabled &&
                    "hover:scale-100 active:scale-100 disabled:opacity-70"
            )}`}
        >
            {/* Loading spinner */}
            <svg
                aria-hidden
                className={`absolute h-5 w-5 transition-opacity
                    ${loading ? "opacity-1 animate-spin " : "opacity-0"}
                `}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            {/* Button label */}
            <span
                className={`transition-transform ${cx(
                    loading && "-translate-y-12 "
                )}`}
            >
                {children}
            </span>
            {/* Right side icon */}
            {variant === "primary" && icon && (
                <svg
                    aria-hidden
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`h-6 w-6 transition-transform ${cx(
                        loading && "-translate-y-12 "
                    )}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                </svg>
            )}
        </button>
    );
}
