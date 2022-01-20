

export default class {
    constructor(route){
        this.route = route;
       this._match_initial_route(this.route)
    }

   async _match_initial_route(route,path){
        let potentialRoute = route.map(route => {
            return {
            route: route,
            isMatch: window.location.pathname === route.path || path === route.path
        }
        })

        let match = potentialRoute.find(match => match.isMatch);

        // error handling
        if(!match){
            match = {
                route: route[0],
                isMatch: true
            }
        }
        console.log();
        
        let home_app = document.querySelector('.home_app');
        const veiw = new match.route.view_Engine()


    
        home_app.innerHTML = await veiw.get_HTML_View()
    }

    

}