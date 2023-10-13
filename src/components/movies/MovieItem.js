

function MovieItem ({image}) {
    return (
        <div>
             <div className='item'>
                <img className='itemBackgroundPhoto' src={image}></img>
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
        </div>
    )
}

export default MovieItem