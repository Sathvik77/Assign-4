import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [articles, setArticles] = useState([]);

    const getArticleData = async () => {
        try {
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=microsoft&from=2021-11-27&sortBy=popularity&apiKey=51b7cb604144489b8603d78b321af69d`
            )

            const data = await res.json();
            console.log(new Date(), "Article data:", data.articles.map(article => article.title));
            setArticles(data.articles.map(article => article.title));
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getArticleData();
        const interval = setInterval(() => {
            getArticleData();
        }, 5000);
        return () => clearInterval(interval);
    }, [])
    return (<div>
        <header>
            <div className="header">
                <h1>Assign 4</h1>
            </div>
        </header>
        <hr></hr>

        <div className="main-content">
            <div className="home-main">
                <div className="Article1">
                    <div className="margin1">
                        <Link className="link" to='/Article1'>
                            <h1>Article 1</h1>
                        </Link>
                        <p>Date: 27 November 2021</p>
                        <img className="images" src="assets/Article1.jpg"></img>
                        <p>Vistra Energy has expanded the world’s largest battery facility in California, a state that is boosting investments 
                        in renewable energy storage in a bid to decarbonize its power sector. Following the 100-megawatt expansion, the Moss Landing
                        lithium-ion system in Monterey County now has a total capacity of 400 megawatts/1,600 megawatt-hours. California is the U.S
                        state that generates the most solar energy. Last year, its 770 solar facilities generated 29,440 gigawatt-hours of energy or
                         15.4% of all the electricity produced there—a number that goes above 20% when small-scale solar generation is added</p>
                    </div>
                </div>
                <div className="Article2">
                    <div className="margin2">
                        <Link className="link" to='/Article2'>
                            <h1>Article 2</h1>
                        </Link>
                        <p>Date: 27 November 2021</p>
                        <img className="images" src="assets/Article2.png"></img>
                        <p>It seems like everyone hates the way Android 12 looks. OK, maybe not everyone but check out the comments on any article talking about Android 12's
                        look and feel and you'll see that a heck of a lot of people dislike the changes Google has made.That's bad news for Google, but it really isn't
                         for almost every Android phone owner. That's because what you have seen on Google phones, like the Pixel 6, isn't how Android 12 has to look. 
                         Or will look, because the software on a Pixel phone is just as custom as the software on a Galaxy phone.</p>
                    </div>
                </div>
                <div className="Article3">
                    <div className="margin3">
                        <Link className="link" to='/Article3'>
                            <h1>Article 3</h1>
                        </Link>
                        <p>Date: 27 November 2021</p>
                        <img className="images" src="assets/Article3.png"></img>
                        <p>The age of the electric car is upon us. Earlier this year, the US automobile giant General Motors announced that it aims
                         to stop selling petrol-powered and diesel models by 2035. Audi, based in Germany, plans to stop producing such vehicles by 2033.
                         Many other automotive multinationals have issued similar road maps. Suddenly, major carmakers’ foot-dragging on electrifying their
                        fleets is turning into a rush for the exit. The electrification of personal mobility is picking up speed in a way that even its most
                        ardent proponents might not have dreamt of just a few years ago. In many countries, government mandates will accelerate change. But
                        even without new policies or regulations, half of global passenger-vehicle sales in 2035 will be electric, according to the 
                        BloombergNEF (BNEF) consultancy in London.</p>
                    </div>
                </div>
            </div>
            <div className="home-nav">
                <nav class="nav" style={{ border: "none", marginTop: "30px", color: 'Black', backgroundColor: 'lightgray' }}>
                    <h2 style={{ color: "Black" }}>Headlines</h2>
                    <ul style={{ paddingInlineStart: "0" }}>
                        {articles.map(Player => <li style={{ listStyle: 'none', margin: '10px auto' }}>{Player}</li>)}
                    </ul>
                </nav>
            </div>
        </div>
        <hr></hr>

        <div className="footer">
            <footer>
                <p>Copyright &copy; HelloWorld.com</p>
            </footer>
        </div>
    </div>)

}

export default Home
