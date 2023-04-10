import React from "react";
import Wrapper from "../wrappers/landing";
// { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <section id="hero">
          <div className="hero container">
            <div>
              <h1 className="mt">
                Faça já o seu <span></span>
              </h1>
              <h1>
                Orçamento <span></span>
              </h1>
              <h1>
                <span></span>
              </h1>
              <a
                type="button"
                href="/servicos/novo"
                className="cta"
                id="ensurelogin"
              >
                Simular / Solicitar Serviço
              </a>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="services container">
            <div className="service-top">
              <h1 className="section-title">
                Ser<span>v</span>iços
              </h1>
              <p>Para Cada Situação Há Uma Solução</p>
            </div>
            <div className="service-bottom">
              <div className="service-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/services.png"
                    alt=""
                  />
                </div>
                <h2>Desempenagem / Assistência</h2>
                <p>Boost de bateria</p>
                <p>Troca de um pneu pelo suplente</p>
                <p>Abertura de Portas</p>
                <p>Troca de Combustível</p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/services.png"
                    alt=""
                  />
                </div>
                <h2>Reboque de Ligeiro e motas</h2>
                <p>Transporte de ligeiros até 3500Kg de carga bruta</p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/services.png"
                    alt=""
                  />
                </div>
                <h2>Reboque de Furgon</h2>
                <p>Veículos furgons de rodado simples</p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/services.png"
                    alt=""
                  />
                </div>
                <h2>Reboque de Pesado</h2>
                <p>Disponível para Autocaravanas Veículos de Chassi Longo</p>
                <p>Furgões de Rodado Duplo</p>
                <p>Jeeps/Pickups grandes</p>
                <p>Veículos com o peso total entre 3.500 kg á 24.000 kg</p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/services.png"
                    alt=""
                  />
                </div>
                <h2>Transporte Nacional e Internacional</h2>
                <p>Transporte acima de 100 km</p>
                <p>Nacional e Internacional</p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/services.png"
                    alt=""
                  />
                </div>
                <h2>Troca de Bateria ou Pneu</h2>
                <p>Troca de baterias ou pneus da nossa loja no local</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">
                <span>Tow - </span>Informações de Contacto
              </h1>
            </div>
            <div className="contact-items">
              <div className="contact-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/phone.png"
                    alt=""
                  />
                </div>
                <div className="contact-info">
                  <h1>Phone</h1>
                  <h2>964301555</h2>
                  <h2>217271133</h2>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/new-post.png"
                    alt=""
                  />
                </div>
                <div className="contact-info">
                  <h1>Email</h1>
                  <h2>geral@tow.pt</h2>
                  <h2>tow@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </Wrapper>
  );
};

export default Landing;
