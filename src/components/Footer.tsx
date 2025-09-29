import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function Footer() {

    const themeContext = useContext(ThemeContext)
    const { theme } = themeContext!

    return (
        <footer className="w-full flex justify-between items-center py-4 sm:py-2 px-8 bg-orange-800 dark:border-t-1 dark:border-gray-600 dark:bg-gray-800 text-white">
            <p className="text-center">© 2025. All Rights Reserved.</p>
            {
                theme === 'light' ? (
                    <div className="flex gap-4 justify-center items-center">
                        <img
                            src="/public/github-white.svg"
                            alt="Github logo"
                            className="size-8 hover:scale-110"
                        />
                        <img
                            src="/public/linkedin-white.svg"
                            alt="Linkedin logo"
                            className="size-8 hover:scale-110"
                        />
                    </div>
                ) : (
                    <div className="flex gap-4 justify-center items-center">
                        <a href="https://github.com/Sugabdev">
                            <img
                                src="/public/github-white.svg"
                                alt="Github logo"
                                className="size-8 hover:scale-110"

                            />
                        </a>
                        <a href="www.linkedin.com/in/sugabdev">
                            <img
                                src="/public/linkedin-white.svg"
                                alt="Linkedin logo"
                                className="size-8 hover:scale-110"
                            />
                        </a>
                    </div>
                )
            }

        </footer>
    )
}