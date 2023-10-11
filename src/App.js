import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './pages/home/Header/index';
import Typewriter from "typewriter-effect";
import HashLoader from "react-spinners/HashLoader";
import Aboutme from "./pages/home/Aboutme/index";
import Form from './pages/home/Form/index';
import Footer from './pages/home/Footer/index';



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 800) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <div className="App">
      {
        loading ?
          <HashLoader
            color={"#c2cbe5"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <section className="screen">
            <Header acao={ativaCor}/>
              <div className='apresentacao'>
                <Typewriter className="typewriter"
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(80)
                      .typeString('Olá, meu nome é Gomes!')
                      .pauseFor(2000)
                      .changeDeleteSpeed(10)
                      .deleteAll()
                      .typeString('Hello! My name is Gomes!')
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </div>
              
            <Aboutme />
            <Form />
            <Footer />
          </section>
      }   
    </div>
  );
}

export default App;
