const userName = document.getElementById('username');
const email = document.getElementById('email');
const tel = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userNameValue = userName.value;
    const emailValue = email.value;
    const phoneValue = tel.value;
    // console.log(userNameValue, emailValue, phoneValue)
    const formData = {
        userName : userNameValue,
        userEmail : emailValue,
        telephone: phoneValue
    }
    // console.log('Form submitted', formData);
    const jsonFormData = JSON.stringify(formData);
    // console.log(jsonFormData)
    const encodeData = btoa(jsonFormData);
    sessionStorage.setItem('formData', encodeData);
    const getData = sessionStorage.getItem('formData');
    const decodeData = atob(getData);
    console.log("Form Data", decodeData)
})

