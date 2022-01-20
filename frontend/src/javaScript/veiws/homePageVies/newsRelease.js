import HomeAbstractView from "./HomeAbstractView.js";

export default class extends HomeAbstractView {
    constructor(){
        super()
        this.set_page_title('News Releases')
        this.get_HTML_View()
    }

    async get_HTML_View(){
        return `
        <section id="/newsRelease" class="news_feed">
        <div class="news_feed_header">

            <div class="news_titles">
                <h1>GET THE LATEST CRYPTO CURRENCY NEWS UPDATES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, corrupti.</p>
                <button class="btn know_more">know more</button>
            </div>

            <div class="quick_feeds">
                <span>
                    <h3>The prices of bitcoin keeps soaring by a 4%</h3>
                    <h5>by Aurthor lemion</h5>
                </span>
                <span>
                    <h3>The prices of bitcoin keeps soaring by a 4%</h3>
                    <h5>by Aurthor lemion</h5>
                </span>
                <span>
                    <h3>The prices of bitcoin keeps soaring by a 4%</h3>
                    <h5>by Aurthor lemion</h5>
                </span>
                <span>
                    <h3>The prices of bitcoin keeps soaring by a 4%</h3>
                    <h5>by Aurthor lemion</h5>
                </span>
                <span>
                    <h3>The prices of bitcoin keeps soaring by a 4%</h3>
                    <h5>by Aurthor lemion</h5>
                </span>
            </div>


        </div>
        <div class="news_feed_posts">
            <div class="feed">
                <div class="feed_img">
                    <img src="./images/eyestetix-studio-OS5AHKdNHPE-unsplash.jpg" alt="logo">
                </div>
                <h3>Elon musk's tweet enables doge to rise by 12% in january</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt accusamus error, deleniti incidunt illum nostrum ea praesentium ducimus aliquid!</p>

                <button class="btn read_more">read more</button>
            </div>
            <div class="feed">
                <div class="feed_img">
                    <img src="./images/kanchanara-rfUl0Lfyays-unsplash.jpg.crdownload" alt="">
                </div>
                <h3>Elon musk's tweet enables doge to rise by 12% in january</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt accusamus error, deleniti incidunt illum nostrum ea praesentium ducimus aliquid!</p>

                <button class="btn read_more">read more</button>
            </div>
            <div class="feed">
                <div class="feed_img">
                    <img src="./images/zoltan-tasi-uNXmhzcQjxg-unsplash.jpg" alt="">
                </div>
                <h3>Elon musk's tweet enables doge to rise by 12% in january</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt accusamus error, deleniti incidunt illum nostrum ea praesentium ducimus aliquid!</p>

                <button class="btn read_more">read more</button>
            </div>
            <div class="feed">
                <div class="feed_img">
                    <img src="./images/tezos-va8f_vOiukY-unsplash.jpg" alt="">
                </div>
                <h3>Elon musk's tweet enables doge to rise by 12% in january</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt accusamus error, deleniti incidunt illum nostrum ea praesentium ducimus aliquid!</p>

                <button class="btn read_more">read more</button>
            </div>
        </div>
    </section>


    <section class="news_post">

        <div class="top_stories">

            <h2>TOP STORIES</h2>

            <div class="top_story">
                <img src="./images/tesla-fans-schweiz-2swaWy4Xhb0-unsplash.jpg" alt="">
                <h3>Best sold coins for 2021 last year</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore blanditiis dolorum voluptas odit fugit. Officiis laudantium facilis laborum repellat. Eveniet ut quibusdam quo pariatur delectus?</p>

                <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
            </div>

            <div class="top_story">
                <img src="./images/bermix-studio-aX1hN4uNd-I-unsplash.jpg" alt="">
                <h3>Best sold coins for 2021 last year</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore blanditiis dolorum voluptas odit fugit. Officiis laudantium facilis laborum repellat. Eveniet ut quibusdam quo pariatur delectus?</p>

                <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
            </div>

            <div class="top_story">
                <img src="./images/robb-miller-oEGDKf4ZtNg-unsplash.jpg" alt="">
                <h3>Best sold coins for 2021 last year</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore blanditiis dolorum voluptas odit fugit. Officiis laudantium facilis laborum repellat. Eveniet ut quibusdam quo pariatur delectus?</p>

                <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
            </div>

        </div>


        <div class="latest_stories">

            <h2>LATEST STORIES</h2>

            
            <div class="latest_story">
                <div class="ls_timestamp">
                    just in 
                </div>
                <div class="ls_desc">
                    <h2>Here is how to track your stimulus if paid in crypto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem sunt at veniam quo odit optio ratione, similique autem dolor?</p>
                    <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
                </div>
            </div>


            <div class="latest_story">
                <div class="ls_timestamp">
                    just in 
                </div>
                <div class="ls_desc">
                    <h2>Here is how to track your stimulus if paid in crypto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem sunt at veniam quo odit optio ratione, similique autem dolor?</p>
                    <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
                </div>
            </div>


            <div class="latest_story">
                <div class="ls_timestamp">
                    just in 
                </div>
                <div class="ls_desc">
                    <h2>Here is how to track your stimulus if paid in crypto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem sunt at veniam quo odit optio ratione, similique autem dolor?</p>
                    <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
                </div>
            </div>


            <div class="latest_story">
                <div class="ls_timestamp">
                    just in 
                </div>
                <div class="ls_desc">
                    <h2>Here is how to track your stimulus if paid in crypto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem sunt at veniam quo odit optio ratione, similique autem dolor?</p>
                    <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
                </div>
            </div>


            <div class="latest_story">
                <div class="ls_timestamp">
                    just in 
                </div>
                <div class="ls_desc">
                    <h2>Here is how to track your stimulus if paid in crypto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem sunt at veniam quo odit optio ratione, similique autem dolor?</p>
                    <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
                </div>
            </div>


            <div class="latest_story">
                <div class="ls_timestamp">
                    just in 
                </div>
                <div class="ls_desc">
                    <h2>Here is how to track your stimulus if paid in crypto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem sunt at veniam quo odit optio ratione, similique autem dolor?</p>
                    <a href="#">read more <i class="fas fa-angle-double-right"></i></a>
                </div>
            </div>


        </div>

    </section>
        `
    }
}

