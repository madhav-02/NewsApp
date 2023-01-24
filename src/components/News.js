import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
    // articles = [
    //     {
    //       "source": { "id": null, "name": "NDTV News" },
    //       "author": null,
    //       "title": "\"Was Told Saudi Crown Prince Was On Board\": Elon Musk In Tesla Tweet Trial - NDTV",
    //       "description": "Elon Musk on Monday told jurors that his 2018 tweet about taking Tesla private at $420 a share was no joke and that Saudi Arabia's sovereign wealth fund was serious about helping him do it.",
    //       "url": "https://www.ndtv.com/world-news/buying-tesla-at-420-a-share-was-no-joke-elon-musk-over-2018-tweet-trial-3718546",
    //       "urlToImage": "https://c.ndtvimg.com/2022-12/i5bcj6mo_elon-musk-650_625x300_13_December_22.jpg",
    //       "publishedAt": "2023-01-24T05:06:00Z",
    //       "content": "Elon Musk's testimony is set to conclude on Tuesday.\r\nSan Francisco: Elon Musk on Monday told jurors that his 2018 tweet about taking Tesla private at $420 a share was no joke and that Saudi Arabia's… [+3384 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Joe Sutton, Theresa Waldrop",
    //       "title": "At least 7 dead, 1 injured and suspect in custody after shootings in Half Moon Bay, California, official says - CNN",
    //       "description": "At least seven people were killed and one person critically injured in shootings in two separate locations in a small coastal community in central California, becoming the state's second mass shooting in three days, officials said.",
    //       "url": "https://www.cnn.com/2023/01/23/us/half-moon-bay-california-shooting-incident/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230123193602-01-half-moon-bay-shooting-012323.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2023-01-24T04:24:00Z",
    //       "content": "At least seven people were killed and one person critically injured in shootings in two separate locations in a small coastal community in central California, becoming the states second mass shooting… [+2030 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Eric Levenson, Holly Yan, Stella Chan",
    //       "title": "Investigators find rifle and hundreds of rounds of ammo at home of Monterey Park mass shooter - CNN",
    //       "description": "Investigators looking through the home of the 72-year-old gunman who carried out a mass shooting in Monterey Park, California, on Saturday night found a .308 caliber rifle, hundreds of rounds of loose ammo and items that led them to believe he was building ho…",
    //       "url": "https://www.cnn.com/2023/01/23/us/monterey-park-california-mass-shooting-monday/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230122103632-17-monterey-park-shooting-012223.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2023-01-24T04:17:00Z",
    //       "content": "Investigators looking through the home of the 72-year-old gunman who carried out a mass shooting in Monterey Park, California, on Saturday night found a .308 caliber rifle, hundreds of rounds of loos… [+9660 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "NDTV News" },
    //       "author": null,
    //       "title": "What US Said On BBC Documentary On PM Modi, 2002 Riots - NDTV",
    //       "description": "\"I'm not familiar with the documentary you're referring to, however, I am very familiar with the shared values that enact the United States and India as two thriving and vibrant democracies,\" US State Department spokesperson Ned Price said on Monday,",
    //       "url": "https://www.ndtv.com/india-news/us-reply-to-query-on-bbc-documentary-critical-of-pm-modi-3718611",
    //       "urlToImage": "https://c.ndtvimg.com/2023-01/ap1bgm1o_pm-modi-ndtv-650_650x400_23_January_23.jpg",
    //       "publishedAt": "2023-01-24T04:14:00Z",
    //       "content": "BBC aired a two-part series attacking PM Modi's tenure as Gujarat CM during the Gujarat riots of 2002.\r\nWashington: \"I'm not familiar with the documentary you're referring to, however, I am very fami… [+4690 chars]"
    //     },
    //     {
    //       "source": { "id": "independent", "name": "Independent" },
    //       "author": "John Bowden",
    //       "title": "Trump in mob photo scandal as judge weighs release of grand jury report – live - The Independent",
    //       "description": "All the latest developments from Trumpworld",
    //       "url": "https://www.independent.co.uk/news/world/americas/us-politics/trump-eulogy-checks-diamond-and-silk-cause-of-death-b2267268.html",
    //       "urlToImage": "https://static.independent.co.uk/2023/01/20/17/SEI138942467.jpg?quality=75&width=1200&auto=webp",
    //       "publishedAt": "2023-01-24T03:00:54Z",
    //       "content": "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nA judge in Georgia is set to hear arguments on Tuesday o… [+9897 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "The A.V. Club" },
    //       "author": "Lauren Chval",
    //       "title": "The Bachelor recap: Season 27, Episode 1 - The A.V. Club",
    //       "description": "Zach Shallcross is just out here looking for his best friend",
    //       "url": "https://www.avclub.com/the-bachelor-review-season-27-episode-1-premiere-1850016106",
    //       "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ef0f75e78412b9412506766eff8c6df6.jpg",
    //       "publishedAt": "2023-01-24T03:00:00Z",
    //       "content": "The premiere of a new season of The Bachelortwo hours of being waterboarded by workout montages and wannabe influencers professing their love for a man they havent even met yetis always a little bit … [+7941 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Jennifer Elias",
    //       "title": "Google CEO defends job cuts in animated town hall as employees demand clarity on process - CNBC",
    //       "description": "Google executives held a town hall meeting with staffers on Monday after the company announced its largest layoff in history.",
    //       "url": "https://www.cnbc.com/2023/01/23/google-ceo-defends-layoff-process-in-heated-town-hall-monday.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107010033-1666730059061-sundar2.jpg?v=1674528819&w=1920&h=1080",
    //       "publishedAt": "2023-01-24T02:53:00Z",
    //       "content": "Sundar Pichai, CEO, Alphabet\r\nDays after Google announced the largest round of layoffs in the company's 25-year history, executives defended the job cuts and took questions from a concerned workforce… [+7428 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Andi Babineau, Kara Devlin",
    //       "title": "Des Moines shooting leaves 2 students dead, founder of education program in serious condition, police say - CNN",
    //       "description": "A shooting at an educational program for at-risk youth in Des Moines, Iowa, left two students dead and the program's founder seriously injured, authorities said",
    //       "url": "https://www.cnn.com/2023/01/23/us/des-moines-shooting/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230123140816-05-des-moines-iowa-shooting-0123.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2023-01-24T02:44:00Z",
    //       "content": "A shooting at an educational program for at-risk youth in Des Moines, Iowa, left two students dead and the programs founder seriously injured, authorities said\r\nAt 12:53 p.m. Monday, Police and fire … [+2730 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "YouTube" },
    //       "author": null,
    //       "title": "Kylie Jenner Reveals Correct Pronunciation for Son's Name - Entertainment Tonight",
    //       "description": "Love is in the 'Aire'! Kylie Jenner shares the name of her and Travis Scott's baby boy, followed by addressing fan speculation of how to pronounce the little...",
    //       "url": "https://www.youtube.com/watch?v=RcDcVPLa65g",
    //       "urlToImage": "https://i.ytimg.com/vi/RcDcVPLa65g/maxresdefault.jpg",
    //       "publishedAt": "2023-01-24T02:30:19Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": "fox-news", "name": "Fox News" },
    //       "author": "Aaron Kliegman",
    //       "title": "California Democrats consider wealth tax — including for people who moved out of state - Fox News",
    //       "description": "California Democrats introduced legislation that would impose a new tax on wealthy residents — even if they've already moved out of the state.",
    //       "url": "https://www.foxnews.com/politics/california-democrats-consider-wealth-tax-people-moved-out-state",
    //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/newsom-thuymb-.jpg",
    //       "publishedAt": "2023-01-24T01:09:00Z",
    //       "content": "California lawmakers are pushing legislation that would impose a new tax on the state's wealthiest residents even if they've already moved to another part of the country.\r\nAssemblyman Alex Lee, a pro… [+7414 chars]"
    //     },
    //     {
    //       "source": { "id": "google-news", "name": "Google News" },
    //       "author": null,
    //       "title": "Earth’s inner core may have ‘paused’ its rotation and reversed, new study suggests - The Hill",
    //       "description": null,
    //       "url": "https://news.google.com/__i/rss/rd/articles/CBMihwFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL25leHN0YXJfbWVkaWFfd2lyZS8zODI3MjQ0LWVhcnRocy1pbm5lci1jb3JlLW1heS1oYXZlLXBhdXNlZC1pdHMtcm90YXRpb24tYW5kLXJldmVyc2VkLW5ldy1zdHVkeS1zdWdnZXN0cy_SAYsBaHR0cHM6Ly90aGVoaWxsLmNvbS9ob21lbmV3cy9uZXhzdGFyX21lZGlhX3dpcmUvMzgyNzI0NC1lYXJ0aHMtaW5uZXItY29yZS1tYXktaGF2ZS1wYXVzZWQtaXRzLXJvdGF0aW9uLWFuZC1yZXZlcnNlZC1uZXctc3R1ZHktc3VnZ2VzdHMvYW1wLw?oc=5",
    //       "urlToImage": null,
    //       "publishedAt": "2023-01-24T01:07:00Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": null, "name": "The Athletic" },
    //       "author": "Jovan Buha",
    //       "title": "Rui Hachimura traded to Lakers: How this move helps Los Angeles now and later - The Athletic",
    //       "description": "The Lakers didn't have to give up much for a needed potential wing upgrade. And they're not done on the trade market, either.",
    //       "url": "https://theathletic.com/4118653/2023/01/23/rui-hachimura-trade-la-lakers/",
    //       "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/01/23180629/GettyImages-1386584298-1024x683.jpg",
    //       "publishedAt": "2023-01-24T00:37:02Z",
    //       "content": "In finalizing a trade for Rui Hachimura, the Los Angeles Lakers are making a long-awaited upgrade on the wing both for this season and potentially the future.\r\nAfter months of deliberation over findi… [+7932 chars]"
    //     },
    //     {
    //       "source": { "id": "bloomberg", "name": "Bloomberg" },
    //       "author": "Peter Martin, Jenny Leonard",
    //       "title": "US Confronts China With Evidence of Companies Aiding Putin's War - Bloomberg",
    //       "description": "The Biden administration has confronted China’s government with evidence that suggests some Chinese state-owned companies may be providing assistance for Russia’s war effort in Ukraine, as it tries to ascertain if Beijing is aware of those activities, accordi…",
    //       "url": "https://www.bloomberg.com/news/articles/2023-01-24/us-confronts-china-with-evidence-of-companies-aiding-putin-s-war",
    //       "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4diOF65ik7c/v0/1200x831.jpg",
    //       "publishedAt": "2023-01-24T00:31:00Z",
    //       "content": "The Biden administration has confronted China’s government with evidence that suggests some Chinese state-owned companies may be providing assistance for Russia’s war effort in Ukraine, as it tries t… [+414 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Jihye Lee",
    //       "title": "Asia-Pacific markets rise as most of the region observes Lunar New Year holidays - CNBC",
    //       "description": "Markets in the Asia-Pacific trade higher as most of the region observed Lunar New Year holidays.",
    //       "url": "https://www.cnbc.com/2023/01/24/asia-pacific-after-new-year.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107182721-1674517631977-gettyimages-1246436806-20230122_sa_06510_022.jpeg?v=1674518746&w=1920&h=1080",
    //       "publishedAt": "2023-01-24T00:25:00Z",
    //       "content": "An earnings recession is imminent this year, according to Morgan Stanley equity strategist Michael Wilson. \r\n\"Our view has not changed as we expect the path of earnings in the US to disappoint both c… [+1033 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Jesse Pound",
    //       "title": "Stock futures are little changed as Wall Street looks to build on back-to-back gains - CNBC",
    //       "description": "The recent gains have come despite an underwhelming start to earnings season and more signs that the U.S. economy is slowing.",
    //       "url": "https://www.cnbc.com/2023/01/23/stock-market-news-live-updates-futures-open-to-close.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107179488-1673970350509-gettyimages-1457105148-032a4182_6a1edf4a-c6c2-4d5f-8cc8-3f434e55a8a4.jpeg?v=1674515071&w=1920&h=1080",
    //       "publishedAt": "2023-01-24T00:04:00Z",
    //       "content": "Stocks rose on Monday, but aren't quite high enough to be considered a true market rally, according to Cameron Dawson of NewEdge Wealth.\r\n\"We have to get through the most critical level of 4,100,\" Da… [+976 chars]"
    //     },
    //     {
    //       "source": { "id": "abc-news", "name": "ABC News" },
    //       "author": "Tom Soufi Burridge",
    //       "title": "Ukraine expects to get 100 Leopard 2 tanks from 12 countries, once Germany approves: Senior Ukrainian official - ABC News",
    //       "description": "Germany has to OK the export license if countries want to give Ukraine tanks.",
    //       "url": "https://abcnews.go.com/International/ukraine-expects-100-leopard-2-tanks-12-countries/story?id=96620510",
    //       "urlToImage": "https://s.abcnews.com/images/International/leopaerd-tanks-file-02-ap-jef-230123_1674516688401_hpMain_16x9_992.jpg",
    //       "publishedAt": "2023-01-23T23:55:40Z",
    //       "content": "Twelve countries have agreed to supply Ukraine with around 100 Leopard 2 tanks if the German government gives its consent, according to a senior Ukrainian official who spoke exclusively to ABC News.\r… [+2803 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CBS Sports" },
    //       "author": "",
    //       "title": "2023 Baseball Hall of Fame announcement: Date, time, TV channel, watch online, storylines, prediction - CBS Sports",
    //       "description": "We'll learn the rest of the 2023 Baseball Hall of Fame class on Tuesday evening",
    //       "url": "https://www.cbssports.com/mlb/news/2023-baseball-hall-of-fame-announcement-date-time-tv-channel-how-to-watch-online-storylines-prediction/",
    //       "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/22/ce0d696e-3cd4-4c72-9c28-8a9dd32df837/thumbnail/1200x675/cc5d30de3331af80296ba76c99b12199/scott-rolen-usatsi.png",
    //       "publishedAt": "2023-01-23T23:39:00Z",
    //       "content": "The results of the BBWAA vote for the 2022 Baseball Hall of Fame class will be revealed Tuesday night. Much of the intrigue in this vote will revolve around the chance Scott Rolen makes it, the gains… [+9326 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Sandee LaMotte",
    //       "title": "One type of physical activity protects the brain more than others, study finds - CNN",
    //       "description": "Replacing sitting, sleeping or gentle movement with less than 10 minutes of moderate to vigorous physical activity can protect your brain, a new study says.",
    //       "url": "https://www.cnn.com/2023/01/23/health/physical-activity-type-cognition-wellness/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230120132055-bike-riding-stock.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2023-01-23T23:30:00Z",
    //       "content": "Editors Note: Seek advice from a health care provider before starting a workout program.\r\nWhat if you could look at all the things you do daily walking from room to room, preparing a presentation at … [+4098 chars]"
    //     },
    //     {
    //       "source": { "id": "cbs-news", "name": "CBS News" },
    //       "author": null,
    //       "title": "Rep. Katherine Clark's daughter out on bail after allegedly assaulting Boston Police officer - CBS Boston",
    //       "description": "The daughter of Rep. Katherine Clark was released on $500 cash bail Monday and ordered to stay away from Boston Common after she was charged with assaulting a Boston Police officer.",
    //       "url": "https://www.cbsnews.com/boston/news/katherine-clark-daughter-arrest-boston-police-riley-dowell/",
    //       "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/01/23/11bfeff3-173a-4871-87f2-642b02bd0252/thumbnail/1200x630/9b636524ff287c8d806a3b44d32f83b0/clark-daughter-arrest-frame-161.jpg",
    //       "publishedAt": "2023-01-23T23:27:00Z",
    //       "content": "BOSTON  - The daughter of Massachusetts Rep. Katherine Clark was released on $500 cash bail Monday and ordered to stay away from Boston Common after she was charged with assaulting a Boston Police of… [+2499 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "BBC News" },
    //       "author": "https://www.facebook.com/bbcnews",
    //       "title": "Erdogan tells Sweden not to expect Nato bid support - BBC",
    //       "description": "The Turkish president's warning comes after protests in Sweden, including a Quran burning.",
    //       "url": "https://www.bbc.com/news/world-europe-64380066",
    //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13C66/production/_128389908_05637302e64d4962055a8312a4591e524adf554e.jpg",
    //       "publishedAt": "2023-01-23T22:49:48Z",
    //       "content": "Sweden should not expect Turkey to back its Nato membership bid, Turkish president Tayyip Erdogan said on Monday, days after a copy of the Quran was burned in a Stockholm protest.\r\nSweden applied to … [+2795 chars]"
    //     }
    //   ]
    constructor(){
        super()
        this.state = {
            articles : [],
            loading: false,
            pageNo:1               // The current Page number
           
            
        } 
    }

    async componentDidMount(){       // This is where using externall endpoints or API's has to be done. This is a lifecycle method - VVVVVImppppppp
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7de8c4f112184e27a19304e8609055da&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults
        })
    }
    handleNextClick = async () => {
        let next = false
        if((this.state.pageNo+1) > Math.ceil(this.state.totalResults/this.props.pageSize)){
            next=true
        }
        else
            next = false
       
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7de8c4f112184e27a19304e8609055da&page=${this.state.pageNo+1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles : parsedData.articles,
                pageNo : this.state.pageNo + 1,
                disableNextButton: next
            })

    }

    handlePrevClick = async () => {
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7de8c4f112184e27a19304e8609055da&page=${this.state.pageNo - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            pageNo : this.state.pageNo - 1,
            disableNextButton:false
        })
    }
 
  render() {
    return (
        <div className="container my-5" >
            <h2>Top Headlines</h2>
            <div className="row">
                {this.state.articles.map( (element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <Newsitem imageUrl={element.urlToImage} title={element.title? element.title.slice(0,55): ""} description={element.description ? element.description.slice(0,40) : ""} newsUrl={element.url}></Newsitem>
                </div> 
                })};
            </div>

            <div className="container">
                <button type="button" disabled={this.state.pageNo<=1} className="btn btn-dark my-3" onClick={this.handlePrevClick}>&laquo; Prev</button>
                <button type="button" disabled={(this.state.pageNo+1) > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark mx-5" onClick={this.handleNextClick}>Next &raquo;</button>
            </div>
        </div>
    )
  }
}
