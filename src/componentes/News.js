import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = React.memo((props) => {
    console.log("ready")
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const toTitleCase = (word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }

        useEffect(() => {
        updateNews();
       document.title = `${toTitleCase(props.category)} | Top Headlines`;
       
    }, []);

    console.log(props.category)


    const updateNews = async ()=> {
        props.setProgress(0);
        const respone = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${props.category}&lang=en&page=1&page_size=15`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fbb2ea18dbmsh78e40cf6bb77620p1f3b5djsn040bc7202c51',
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
            }
        })
        //let data = await fetch(url);
       
        props.setProgress(30);
        let parsedDate = await respone.json();
        console.log(parsedDate)
        props.setProgress(70);
       setArticles(parsedDate.articles)
       // setTotalResults(parsedDate.totalResults)
        setLoading(false)
        props.setProgress(100);
        setPage(page+1)
       
    }

   



    const fetchMoreData = async () => {
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        const respone = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${props.category}&lang=en&page=${page}&page_size=15`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fbb2ea18dbmsh78e40cf6bb77620p1f3b5djsn040bc7202c51',
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
            }
        })

        //let data = await fetch(url);
        let parsedDate = await respone.json();
        setPage(page+1)
        setArticles(articles.concat(parsedDate.articles))
        setTotalResults(parsedDate.totalResults)
        setLoading(false)
    };


        return (
            <>
                <div className="mb-5">
                    <div className='container'>
                        <h2 className='main-head'> {toTitleCase(props.category)} Top Headlines</h2>
                    </div>
                    {console.log(articles)}
                    {loading && <Spiner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spiner />}
                        >
                        <div className= 'container'>
                            <div className="row">
                                {articles.map((element) => {
                                    return <div className="col-md-4 mt-4" key={element.link}>
                                        <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.summary ? element.summary.slice(0, 130) : ""} imageUrl={element.media} newsurl={element.link} date={element.published_date} author={element.author} source={element.authors} />
                                    </div>
                                })}
                            </div>
                            </div>
                    </InfiniteScroll>  
                </div>
            </>
        )
});

News.defaultProps = {
    country: 'us',
    pageSize: 18,
    category: "entertainment",
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News