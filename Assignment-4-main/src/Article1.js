import React from 'react'

const Article1 = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <h1>Article 1</h1>
                </div>
            </header>
            <hr></hr>
            <div className="Article">
                    <div className="margin1-blog1">
                        <p>Date: 27 November 2021</p>
                        <img className="images" src="assets/Article1.jpg"></img>
                        <p>Vistra Energy has expanded the world’s largest battery facility in California, a state that is boosting investments 
                        in renewable energy storage in a bid to decarbonize its power sector. Following the 100-megawatt expansion, the Moss Landing
                        lithium-ion system in Monterey County now has a total capacity of 400 megawatts/1,600 megawatt-hours. California is the U.S
                        state that generates the most solar energy. Last year, its 770 solar facilities generated 29,440 gigawatt-hours of energy or
                         15.4% of all the electricity produced there—a number that goes above 20% when small-scale solar generation is added</p>
                    </div>
                </div>
                <hr></hr>
                <div className="footer">
                    <footer>
                        <p>Copyright &copy; HelloWorld.com</p>
                    </footer>
                </div>
        </div>
    )
}

export default Article1
