import { SearchBar } from '../components/SearchBar'

export function Home () {
  return (
    <section
      className='flex flex-col items-center justify-center gap-8 dark:bg-gray-800 dark:text-white'
    >
      <h1 className='text-semibold text-4xl text-center'>Comparador de precios</h1>
      <SearchBar />
    </section>
  )
}
