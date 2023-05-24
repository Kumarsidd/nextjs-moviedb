import React, { FC } from "react";
import MovieSearch from "./components/MovieSearch";

const App: FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <main className="container py-10 px-4 mx-auto flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-8">
                    Movie Database
                </h1>
                <MovieSearch />
            </main>
        </div>
    );
}

export default App;