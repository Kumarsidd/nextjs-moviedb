"use client"
import { ChangeEvent, FormEvent, useState } from "react";

interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchProps) => {
    const [query, setQuery] = useState('');

    const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(query)
    }

    return (
        <form onChange={handleSubmit} className="flex items-center w-auto max-w-3x1">
            <input type="text" value={query} className="border rounded-1 border-gray-300 py-2 px-4 w-full focus:outline-none focus:border-blue-500" onChange={handleEdit} />
            <button type="submit" className="bg-red-600 text-white py-2 px-6 rounded-r hover:bg-blue-500 focus:outline-none ">
                Search
            </button>
        </form>
    )
}

export default SearchBar;