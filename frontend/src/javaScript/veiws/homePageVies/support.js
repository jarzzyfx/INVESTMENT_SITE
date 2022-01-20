import HomeAbstractView from "./HomeAbstractView.js";

export default class extends HomeAbstractView {
    constructor(){
        super()
        this.set_page_title('User Support')
        this.get_HTML_View()
    } 

    async get_HTML_View(){
        return `
            <section id="/support" class="user_support">
<h2>do you have any complaints, questions or suggestions ? </h2>

<div class="support_content_wrapper">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis a ipsa laudantium distinctio assumenda animi, mollitia tempora quaerat doloremque deleniti odio aut adipisci repellendus voluptates iusto! Nam eligendi exercitationem laborum, iste minima tempora voluptatum, necessitatibus molestias odio aliquam voluptates optio iure. Eum quidem ratione omnis nisi quis, amet commodi veritatis quae debitis quibusdam dolorem labore incidunt laudantium? Aperiam recusandae ullam sit vitae consequatur? Beatae, voluptatibus mollitia! Exercitationem distinctio sunt odio, commodi eum blanditiis aliquid hic saepe. Iusto, laborum optio obcaecati perspiciatis aut error et quibusdam corporis a aliquam laboriosam, reprehenderit, doloremque corrupti alias unde! Qui repellendus saepe suscipit repellat reprehenderit.</p>
        <button class="btn support_email">
       <span>send us an email</span>
       <a href="/">CryptoFinance@gmail.com</a>
   </button>
</div>  

<h2> or </h2>

<form action="" class=" support_form">

    <h2>GET IN TOUCH WITH US</h2>

     

    <label for="usfirstname">
        First Name
        <input type="text" id="usfirstname" class="usfirstname" placeholder="John">
    </label>

    <label for="uslastname">
        Last Name
        <input type="text" id="uslastname" class="uslastname" placeholder="Doe">
    </label>

    <label for="usnumber">
        Phone Number
        <input type="text" id="usnumber" class="usnumber" placeholder="08012345">
    </label>

    <label for="usemail">
        Email
        <input type="email" id="usemail" class="usemail" placeholder="example@gmail.com">
    </label>

    <label for="usmesg">
        Message
        <textarea name="usmesg" id="usmesg" class="usmesg" cols="30" rows="10" placeholder="Message here"></textarea>
    </label>

    <button class="btn support_submit">Submit</button>


</form>
    </section>
        `
    }

}    