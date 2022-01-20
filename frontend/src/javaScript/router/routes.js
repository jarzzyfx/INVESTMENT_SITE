import HomePage from "../veiws/homePageVies/HomePage.js";
import newsRelease from "../veiws/homePageVies/newsRelease.js";
import faq from "../veiws/homePageVies/faq.js";
import about from "../veiws/homePageVies/about.js";
import support from "../veiws/homePageVies/support.js";
import affiliates from "../veiws/homePageVies/affiliates.js";


const routes = [
    {
        path: '/',
        view_Engine: HomePage
    }
    ,
    {
        path: '/newsReleases',
        view_Engine: newsRelease
    }
    ,
    {
        path: '/faq',
        view_Engine: faq
    }
    ,
    {
        path: '/affiliates',
        view_Engine: affiliates
    }
    ,
    {
        path: '/about',
        view_Engine: about
    }
    ,
    {
        path: '/support',
        view_Engine: support
    }
]

export default routes