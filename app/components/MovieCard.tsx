import React from "react";
import Image from "next/image"

interface MoviePorps {
    title: string;
    overview: string;
    pathname: string;
}

const MovieCard = ({ title, overview, pathname }: MoviePorps) => {

    const imageUrl = pathname ? `https://image.tmdb.org/t/p/w500${pathname}` : "/no-image.png";

    return (
        <div className="bg-white rounded shadow p-4">
            <Image className="w-full h-64 rounded mb-4" src={imageUrl} alt="image_movie" />
            <h1 className="text-2x1 font-bold mb-2">{title}</h1>
            <p className="text-sm text-gray-500">{overview.substring(0, 150)}</p>
        </div>
    )

}
export default MovieCard;