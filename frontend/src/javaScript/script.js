import Router from "./router/router.js";
import routes from "./router/routes.js";


const router = new Router(routes);

 let links = document.querySelectorAll('.nav_link');
      

 

const navigateTo = (url) => {
    history.pushState(null, null, url)
    router._match_initial_route(routes, url)
}

links.forEach(link=>{
    link.addEventListener('click', e =>{
        e.preventDefault();
        navigateTo(e.target.href)
    })
})
