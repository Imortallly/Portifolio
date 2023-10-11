import './Form.css';
import { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'


const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(false)
    const [alertError, setAlertError] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            setAlertError(true)
            setAlert(false)
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email

        }
        emailjs.send("service_3uxzvy6", "template_c60c2ha", templateParams, "DqJ_4FJ0YqCW0XjtF")
        .then((response) => {
            setAlert(true)
            setAlertError(false)
            setTimeout(() => {
                setAlert(false);
              }, 3000)
            setName('')
            setEmail('')
            setMessage('')

        }, (response) => {
            alert("Erro: ", response.status)
        })
    }

    return (
        <section id='form-body' className='form-body'>
            <div className='form-info'>
                <div className='form-info-ajuste'>
                    <br/>  
                    <h2 id='problem-text'>Got a problem to solve?</h2>
                    <br/>    
                    <p id='parag'>Get your space suit ready and tell me your ideas to develop your dream application.</p>
                    <br/>
                    <a className='mailto' href="mailto:joaovitor.jvgn2002@gmail.com">✉  joaovitor.jvgn2002@gmail.com</a>
                </div>
            </div>
            <form className="form" onSubmit={sendEmail}>
                <h2>NAME</h2>
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <h2>EMAIL</h2>
                <input
                    className="input"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <h2>MESSAGE</h2>
                <textarea
                    className="textarea"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    maxLength={256}
                />
                {alert && (
                    <p className='messageSend'>Your email has been sent successfully! Wait for my return soon.</p>
                )}

                {alertError && (
                    <p className='message-send-blank'>Blank mandatory fields:</p>
                )}
                <input className="button" type="submit" value="Hit me up ✉" />
                
            </form>
        </section>
    )
}

export default Form