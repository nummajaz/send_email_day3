function sendData() {

    let name = document.getElementById('input-name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;


    console.log(name);
    if (name == '') {
        return alert('Name input fields must be not empty');
    } else if (email == '') {
        return alert('Email input fields must be not empty');
    } else if (phoneNumber == '') {
        return alert('Phone input fields must be not empty');
    } else if (subject == '') {
        return alert('Subject input fields must be not empty');
    } else if (message == '') {
        return alert('Message input fields must be not empty');
    }



    let emailReceiver = 'nummajaz@gmail.com'

    const a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}, ${phoneNumber}`;
    a.click();

    let dataObject = {
        name: name,
        email: email,
        phoneNumber,
        subject,
        message
    };
    console.log(dataObject);

}