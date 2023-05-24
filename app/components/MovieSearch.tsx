"use client"

import React, { FC, useState } from "react";
import { searchMovie } from "../services/movie.services";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const MovieSearch: FC = () => {
    const [movies, setMovies] = useState([]);

    const handleSearch = async (query: string) => {
        const results = await searchMovie(query);
        setMovies(results);
    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {movies.map((movie: any) => {
                    return (
                        <MovieCard key={movie.id} title={movie.title} overview={movie.overview} pathname={movie.poster_path} />
                    )
                })}
            </div>
        </>
    )
}

export default MovieSearch;