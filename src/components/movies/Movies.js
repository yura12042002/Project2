import films from '../../data/Film.json'
import './Movies.css'
import '../movies/MovieItem'

function Movies() {
  // prettier
    return (
    <div className='container1'>
        {films.data.movies.map(movie => {
        const {title, year, large_cover_image, genres, language, runtime, summary, rating} = movie
         return <MovieItem
           title={title}
           image={large_cover_image}
           year={year}
           genres={genres}
           language={language}
           runtime={runtime}
           summary={summary}
           rating={rating}
          />  })
        }

        {/* {films.data.movies.map(el =>( 
            <div className='item'>
                <img className='itemBackgroundPhoto' src={el.large_cover_image}></img>
                <div className='description'>  
                    <h2 className='itemTytle'>{el.title}</h2>
                    <div>{el.genres.map((el, index) =>(
                    <a>{(index === films.data.movies[index].genres.length - 1) || (index === 0)? el : `, ${el}`}</a>                     
                    ))}</div>
                    <a>{el.year}, {el.language}</a>
                    <p>runtime: {el.runtime}</p>
                    <p className='rating'>&#9733; {el.rating}</p>
                    <p className='descriptionTheMovie'>{el.summary}</p>
                    <div className='download'>
                    <a href={el.torrents[0].url}><img className='torrent' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/%CE%9CTorrent_2.2_icon.svg/1200px-%CE%9CTorrent_2.2_icon.svg.png'></img>
                        </a>
                    </div>
                </div>
            </div>
        ))}       */}
    </div>
    );
}
export default Movies;