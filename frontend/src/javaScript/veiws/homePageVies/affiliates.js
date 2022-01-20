import HomeAbstractView from "./HomeAbstractView.js";

export default class extends HomeAbstractView {
    constructor(){
        super()
        this.set_page_title('Affiliates')
        this.get_HTML_View()
    }
     async get_HTML_View(){
         return `
           
<section id="affiliate">
<h2>Crypto finance affiliate program</h2>

<p>here at crypto finance we also have an affiliate program that enables our users to refer another member to join us a
    crypto finance and on top of the they are eligible to get free commisions on each referal that they successfully
    make. for more information, check below</p>

<div class="referal_info">
    <div class="referal_ill">
        <img src="./images/users-svgrepo-com.svg" alt="">

        <div class="div_ill">
            <div>4%</div>
            <div>1% </div>
        </div>

    </div>


    <span class="referal_desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus quasi animi officia architecto,
        repudiandae pariatur aperiam necessitatibus quibusdam impedit voluptas! Placeat expedita iusto quam harum ullam
        aliquid vero quod. Recusandae possimus dicta cupiditate, ex porro molestiae sed minima quas debitis dolores?
        Inventore eum fuga numquam, blanditiis veritatis, suscipit, et consequatur magnam nulla impedit voluptates totam
        vitae non iste nisi autem voluptate velit eaque aspernatur! Iste cumque nihil, amet recusandae facilis laborum
        illum vero architecto aliquid fugit consequuntur voluptatum, molestias nesciunt ipsa blanditiis quidem
        distinctio inventore excepturi, et ad quae voluptate hic porro. Aliquam eum numquam cupiditate praesentium
        facere eveniet!
    </span>

</div>

<div class="more_ref_info">

    <div class="ref_info_left">
        <div class="ref_img">
            <img src="./images/megaphone-svgrepo-com.svg" alt="">
        </div>

        <div class="ref_info_des">
            <h3>help to promote crypto finance</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolore sit minus necessitatibus? Fugiat quisquam dolor consequatur ea labore ab eveniet excepturi eligendi debitis aliquam quidem iure saepe sapiente recusandae, nam animi odio, nihil consequuntur molestiae non! Repudiandae, dolorum vitae.</span>
        </div>
    </div>

    <div class="ref_info_right">
        <div class="ref_img">
            <img src="./images/money-svgrepo-com.svg" alt="">
        </div>

        <div class="ref_info_des">
            <h3>get affiliates and earn more</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolore sit minus necessitatibus? Fugiat quisquam
                dolor consequatur ea labore ab eveniet excepturi eligendi debitis aliquam quidem iure saepe sapiente recusandae,
                nam animi odio, nihil consequuntur molestiae non! Repudiandae, dolorum vitae.</span>
        </div>
    </div>

</div>
</section>

         `
     }
}