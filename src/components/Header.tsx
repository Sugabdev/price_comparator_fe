import { ThemeButton } from "../components/ThemeButton";

export function Header() {
    return (
        // <header className='flex flex-row items-center justify-between px-4 py-2 shadow-[0_4px_6px_lightgray] dark:bg-slate-800 dark:border-b-2 dark:border-b-slate-600 dark:shadow-none'>
        <header className='relative z-10 flex flex-row items-center justify-between px-4 bg-linear-to-r from-[#fb7104] from-5% via-[#f85b02] via-20% to-white dark:to-gray-800 shadow-[0_8px_16px_lightgray] dark:bg-gray-800 dark:shadow-gray-700'>
            <img
                src="/public/logo.jpg"
                alt="Logo de la página"
                className="max-h-12"
            />
            <ThemeButton />
        </header>
    )
}
