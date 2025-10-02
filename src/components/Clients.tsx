import React from "react";
import "./clients.css";

const items = [
  { name: "VetSoft", src: "/client1.png" },
  { name: "IG Solutions", src: "/client2.png" },
  { name: "H&D Bakery", src: "/client3.png" },
  { name: "eCloud", src: "/client4.png" },
];


const Clients: React.FC = () => {
  return (
    <section className="dd-clients" id="clientes" aria-labelledby="clients-title">
      <div className="dd-clients__container">
        <h2 id="clients-title" className="dd-clients__title">{"Nuestros Clientes"}</h2>

        <ul className="dd-clients__grid">
          {items.map((c) => {
            const img = (
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                width={140}
                height={140}
              />
            );

            return (
              <li key={c.name} className="dd-clients__item">
                {/*c.href ? (
                  <a className="dd-clients__link" href={c.href} target="_blank" rel="noreferrer">
                    {img}
                  </a>
                ) : (*/
                  img
                /*)*/}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
