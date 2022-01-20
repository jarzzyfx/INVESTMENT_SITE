const signup_login_form = () => {
 
    document.addEventListener("DOMContentLoaded", () => {


        const loginForm = document.querySelector('#login');
        const CreateAccountForm = document.querySelector('#create_account');



        function setFormMessage(formElement, type, message) {

        const messageElement = formElement.querySelector('.form__messg');

        messageElement.textContent = message;
        messageElement.classList.remove("form__messg--success", "form__messg--err");
        messageElement.classList.add(`form__messg--${type}`)

    }
        


        function setInputError(inputElement, message) {
            inputElement.classList.add('form__input--error');
            inputElement.parentElement.querySelector('.form__input-error-messg').textContent = message
        }

        function  clearInputError(inputElement) {
             inputElement.classList.remove('form__input--error');
             inputElement.parentElement.querySelector('.form__input-error-messg').textContent = ""
        }
 

        document.querySelector('#linkCreateAccount').addEventListener('click', (e)=>{
            e.preventDefault()
            loginForm.classList.add('form--hidden');
            CreateAccountForm.classList.remove('form--hidden');
        })

        document.querySelector('#linkLogin').addEventListener('click', (e)=>{
            e.preventDefault()
            loginForm.classList.remove('form--hidden');
            CreateAccountForm.classList.add('form--hidden');
        })

        loginForm.addEventListener('submit', e => {
            e.preventDefault();

            // perform ajax login

            setFormMessage(loginForm, "err", "invalid username / password combination")
        })

        document.querySelectorAll('.form__input').forEach(element => {
            element.addEventListener('blur', e => {
                if(e.target.id === "signupUserName" && e.target.value.length > 0 && e.target.value.length < 10) {
                    setInputError(element, "Username must be at least 10 characters in length")
                }
            })
            element.addEventListener('input', e => {
                clearInputError(element)
            })
            
        })

    })

    
}



signup_login_form()