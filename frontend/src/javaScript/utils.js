const toggle_button = document.querySelector('.toggle_dark_mode');
const toggle_button_sun = document.querySelector('.fa-sun');
const toggle_button_moon = document.querySelector('.fa-moon');


const loader = document.querySelector('.pre_loader')

let etherum = document.querySelector('.etherum').lastElementChild;
    let bitcoin = document.querySelector('.bitcoin').lastElementChild;
    let litcoin = document.querySelector('.doge').lastElementChild;

    

const active_link = () =>{
    const navLinks = document.querySelectorAll('.nav_link');

    navLinks.forEach(link => {
        link.addEventListener('click', e =>{
            navLinks.forEach(link => link.classList.remove('active'))
            e.target.classList.add('active')
        })
    })
}



const init_theme_selector = ()=>{

    const themeStyleSheet = document.querySelector('#style_theme');
    const current_Theme = localStorage.getItem("theme") || "default";

    const activate_theme = (themeName) => {
        themeStyleSheet.setAttribute('href', `./css/themes/${themeName}.css`)
        
    }


     toggle_button_moon.addEventListener('click',()=>{
    toggle_button.classList.add('dark')
    activate_theme(toggle_button_moon.id)
    localStorage.setItem("theme", toggle_button_moon.id)
});
toggle_button_sun.addEventListener('click',()=>{
    toggle_button.classList.remove('dark')
    activate_theme(toggle_button_sun.id)
    localStorage.setItem("theme", toggle_button_sun.id)
}) ;  

activate_theme(current_Theme)
if (current_Theme === "dark") {
    toggle_button.classList.add('dark')
}else{
    toggle_button.classList.remove('dark')
}
}


const crypto_price_render = () => {

   





//     let ethws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
// let btcws = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');
// let ltcews = new WebSocket('wss://stream.binance.com:9443/ws/ltceur@trade');
    
// const get_etherum = () => {
//         let lastPrice = null

// ethws.onmessage = (event) => {
//     let ethObject = JSON.parse(event.data);
//     let price = parseFloat(ethObject.p).toFixed(2);

//     etherum.textContent = parseFloat(ethObject.p).toFixed(2);
//         etherum.style.color = !lastPrice || lastPrice === price ? "var(--primary-bg-cl)" :price > lastPrice ?"lightgreen" : "crimson";

//         lastPrice = price
//     }
// }

// const get_btc = () => {
//         let lastPrice = null

// btcws.onmessage = (event) => {
//     let btcObject = JSON.parse(event.data);
//     let price = parseFloat(btcObject.p).toFixed(2);

//     bitcoin.textContent = parseFloat(btcObject.p).toFixed(2);
//         bitcoin.style.color = !lastPrice || lastPrice === price ? "var(--primary-bg-cl)" :price > lastPrice ?"lightgreen" : "crimson";

//         lastPrice = price
//     }
// }

// const get_doge = () => {
//         let lastPrice = null

// ltcews.onmessage = (event) => {
//     let ltcObject = JSON.parse(event.data);
//     let price = parseFloat(ltcObject.p).toFixed(2);

//     litcoin.textContent = parseFloat(ltcObject.p).toFixed(2);
     
//         litcoin.style.color = !lastPrice || lastPrice === price ? "var(--primary-bg-cl)" :price > lastPrice ?"lightgreen" : "crimson";

//         lastPrice = price
//     }
// }




// get_etherum()
// get_btc()
// get_doge()


    
}


const online_Detector = ()=> {
    const wrapper = document.querySelector('.connect_wrapper'),
    toast = wrapper.querySelector('.connect_toast'),
    wifi_Icon =  wrapper.querySelector('.connect_icon'),
    title = wrapper.querySelector('span'),
    subtitle = wrapper.querySelector('p'),
    close_btn = wrapper.querySelector('.connect_close_icon');

    close_btn.addEventListener('click', ()=>{
        wrapper.classList.add('hide')
    })
        
    const offline = () => {
        wrapper.classList.remove('hide')
        toast.classList.add('offline')
        title.textContent = "You are currently offline";
        subtitle.textContent = "Ooops!! Your internet is disconnected";
        wifi_Icon.innerHTML  = `<i class="uil uil-wifi-slash"></i>`
    };
    

    const online = ()=>{
        title.textContent = "You currently online";
        subtitle.textContent = "Your connected to the internet";
        wifi_Icon.innerHTML  = `<i class="uil uil-wifi"></i>`  
        toast.classList.remove('offline')    
        setTimeout(()=>{
            wrapper.classList.add('hide')
        },5000);
    }

    window.addEventListener('load', ()=>{
        const ajax = ()=>{
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://jsonplaceholder.typicode.com/posts",true);
            xhr.onload = ()=>{
                if(xhr.status == 200 && xhr.status < 300){
                    online()

                }else{
                    offline();
                }
            };
            xhr.onerror = ()=>{
                offline();
            };
            xhr.send();
        }

        setInterval(()=>{
            ajax()
        },100)
    })
}


const pre_loader = (item) => {
    window.addEventListener('load', ()=>  item.classList.add('hidden'))
}

const responsive_nav = () => {

    const handbugger = document.querySelector('.handbugger');
    const right_nav = document.querySelector('.nav_right');

    document.querySelectorAll('.nav_link').forEach(link => {
        link.addEventListener('click', e => {
            handbugger.classList.remove('active');
        right_nav.classList.remove('active');
        })
    })

    handbugger.addEventListener('click', () => {
        handbugger.classList.toggle('active');
        right_nav.classList.toggle('active');
    })
}



responsive_nav()
pre_loader(loader)
online_Detector()
crypto_price_render()
active_link()
init_theme_selector()

 let baseURL = "https://api.coinranking.com/v2/coins/";
    let proxyURL = "https://cors-anywhere.herokuapp.com/";
    let api_key = "coinranking13aed65c23371dd0fc6d7270f037e8a0a86c6948cb75c34c"


    fetch(`${proxyURL} ${baseURL}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json',
            'x-access-token': `${api_key}`,
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response=>{
        if(response.ok){
            response.json().then(json => {
                console.log(json);
            })
        };
    }).catch(error => {
        console.log(error);
    })