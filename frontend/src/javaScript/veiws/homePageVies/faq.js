import HomeAbstractView from "./HomeAbstractView.js";

export default class extends HomeAbstractView {
    constructor(){
        super()
        this.set_page_title('Crypto Finance')
        this.get_HTML_View()
    }
     async get_HTML_View(){
         return `
         <section id="/faq" class="faq">
        <div class="faq_container">
            <div class="accordion">
                <div class="accordion_item" id="question1">
                    <a class="accordion_link" href="#question1">
                        what is crypto currency ?

                        <i class="fas fa-plus"></i>
                        <i class="fas fa-minus"></i>
                    </a>
                    <div class="accordion_answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi neque eum, sint distinctio quae aliquid asperiores dolore id tenetur totam nam, minus adipisci odio ut saepe accusamus consequuntur quidem.
                    </div>
                </div>
                <div class="accordion_item" id="question2">
                    <a class="accordion_link" href="#question2">
                        How do i  purchase crypto currencies ?

                        <i class="fas fa-plus"></i>
                        <i class="fas fa-minus"></i>
                    </a>
                    <div class="accordion_answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi neque eum, sint distinctio quae aliquid asperiores dolore id tenetur totam nam, minus adipisci odio ut saepe accusamus consequuntur quidem.
                    </div>
                </div>
                <div class="accordion_item" id="question3">
                    <a class="accordion_link" href="#question3">
                        Does crypto finance accept any other crypto apart from the ones shown ?

                        <i class="fas fa-plus"></i>
                        <i class="fas fa-minus"></i>
                    </a>
                    <div class="accordion_answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi neque eum, sint distinctio quae aliquid asperiores dolore id tenetur totam nam, minus adipisci odio ut saepe accusamus consequuntur quidem.
                    </div>
                </div>
                <div class="accordion_item" id="question4">
                    <a class="accordion_link" href="#question4">
                        How do i withdraw my capital ?

                        <i class="fas fa-plus"></i>
                        <i class="fas fa-minus"></i>
                    </a>
                    <div class="accordion_answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi neque eum, sint distinctio quae aliquid asperiores dolore id tenetur totam nam, minus adipisci odio ut saepe accusamus consequuntur quidem.
                    </div>
                </div>
            </div>
        </div>
    </section>
         `
     }
}