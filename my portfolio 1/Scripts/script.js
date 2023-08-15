const barBtn = document.querySelector('#bar-btn')
const cancelBtn = document.querySelector('#cancel-btn')
const mobileBar = document.querySelector('#mobile-bar')
const list = document.querySelectorAll('#mobile-bar ul li')

barBtn.addEventListener('click', () => {
    mobileBar.classList.add('appear')
})
cancelBtn.addEventListener('click', () => {
    mobileBar.classList.remove('appear')
})
list.forEach(li => {
    li.addEventListener('click', () => {
        mobileBar.classList.remove('appear')
    })
})

//------------------------------------------------------

const submitBtn = document.querySelector('#submit-btn')
const inputName = document.querySelector('#input-name')
const inputSubject = document.querySelector('#input-subject')
const inputEmail = document.querySelector('#input-email')
const inputMsg = document.querySelector('#input-msg')

submitBtn.addEventListener('click', () => {
    if (inputName.value == "" || inputSubject.value == "" || inputEmail.value == "" || inputMsg.value == "") {
        alert('plz fill all inputs !!!')
        return
    }

    sendMail()

    inputName.value = ""
    inputSubject.value = ""
    inputEmail.value = ""
    inputMsg.value = ""
        
})

//-----------------------------------------------------

function sendMail() {
    (function(){
        emailjs.init("PKtSS2DuZxfZk9n6c");

    })();

    var params = {
        sendername : document.querySelector("#input-name").value,
        subject : document.querySelector("#input-subject").value,
        from : document.querySelector("#input-email").value,
        msg : document.querySelector("#input-msg").value
    }

    var serviceID = "service_gl5cw35"
    var templateID = "template_rdo3nbd"

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("Email Sent Successfull!!")
    }).catch();
}
