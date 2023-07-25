import { useEffect } from "react";
import { Movie } from "../../components";
import { Pagination, FixedOverlayLoader } from "../../components";
import { GlobalContext } from "../../context";
import "./movies.css";

const Movies = () => {
	const { movies, isLoading } = GlobalContext();

	if (isLoading) {
		return <FixedOverlayLoader />;
	}

	return (
		<section className="movies-cont pady-30x">
			<div className="max-fw mg-center md-padx-1x md-pady-2x grid movies">
				{movies.map((movie) => {
					return <Movie key={movie.id} {...movie} type={"add"} />;
				})}
			</div>
			<Pagination />
		</section>
	);
};

export default Movies;
