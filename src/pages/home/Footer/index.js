import './Footer.css';
import icon from '../../../assets/favicon.png'

const Footer = () => {
    return ( 
        <section className='footer'>
            <div className='bar-white'></div>
            <div className='footer-info'>
                <div className='icon'>
                    <img src={icon} alt='icon'/>
                </div>
                <div className='options-footer'>
                    <div className='Address'>
                        <h3>Address</h3>
                        <p>José Severino Martins 394, CEP: 88745-000 - Capivari de baixo</p>
                    </div>
                    <div className='Content'>
                        <h3>Content responsibility</h3>
                        <p>João Vitor Gomes Nunes</p>
                    </div>
                </div>
                <div className='info-page'>
                    <p>© 2022 João Vitor Gomes Nunes</p>
                </div>
            </div>
        </section>
    )
}

export default Footer