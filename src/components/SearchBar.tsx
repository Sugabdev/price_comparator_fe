import { useRef } from "react"
import { useNavigate } from "react-router";

const URL = import.meta.env.VITE_SEARCHBAR_ENDPOINT

export function SearchBar() {

    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!inputRef.current) return

        try {
            await fetch(URL, {
                method: 'POST',
                headers: { "content-type": 'application/json' },
                body: JSON.stringify({ search: inputRef.current.value }),
            })
        } catch (error) {
            console.error(error)
        }

        sessionStorage.setItem('search', inputRef.current.value)

        navigate('/products')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-xs sm:w-md mx-auto shadow-xl"
        >
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    ref={inputRef}
                    type="search"
                    id="default-search"
                    placeholder="PC, Laptop, IPhone..."
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                    Buscar
                </button>
            </div>
        </form>
    )
}