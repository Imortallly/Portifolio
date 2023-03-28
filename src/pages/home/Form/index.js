import './Form.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser'


const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email

        }
        emailjs.send("service_3uxzvy6", "template_c60c2ha", templateParams, "DqJ_4FJ0YqCW0XjtF")
        .then((response) => {
            alert("Your email is sucessfully")
            setName('')
            setEmail('')
            setMessage('')

        }, (response) => {
            alert("Erro: ", response.status)
        })
    }

    return (
        <section className='form-body'>
            <div className='form-info'>
                <div className='form-info-ajuste'>
                    <h1 id='contact'>CONTACT</h1>
                    <br/>
                    <br/>   
                    <h2 id='problem-text'>Got a problem to solve?</h2>
                    <br/>    
                    <br/>
                    <p id='parag'>Get your space suit ready and tell me your ideas to develop your dream application.</p>
                    <br/>
                    <br/>
                    <a className='mailto' href="mailto:gomesjvgn@gmail.com">✉ gomesjvgn@gmail.com</a>
                </div>
            </div>
            <form className="form" onSubmit={sendEmail}>
                <h2>NAME</h2>
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <h2>EMAIL</h2>
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <h2>MESSAGE</h2>
                <textarea
                    className="textarea"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    maxLength={256}
                />

                <input className="button" type="submit" value="Hit me up ✉" />
                
            </form>
        </section>
    )
}

export default Form