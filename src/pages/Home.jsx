import "../styles/Home.css";

export function Home() {
  return (
    <main className="home-page">
      <section className="home-section">
        <h1>BIENVENIDO</h1>
      </section>

      <section className="home-section">
        <h2>PRODUCTOS PRINCIPALES</h2>
        <div className="cards-container">
          <article className="card">
            <img src="https://allmusic-arg.netlify.app/assets/img/mic1.jpg" alt="microfono" />
            <section>
              <h3>Tipo de Producto</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis omnis, debitis id sint error unde numquam nostrum odit sunt
                dolore labore iure a obcaecati provident placeat deserunt odio ullam.
              </p>
            </section>
          </article>
          <article className="card">
            <img src="https://allmusic-arg.netlify.app/assets/img/mic1.jpg" alt="microfono" />
            <section>
              <h3>Tipo de Producto</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis omnis, debitis id sint error unde numquam nostrum odit sunt
                dolore labore iure a obcaecati provident placeat deserunt odio ullam.
              </p>
            </section>
          </article>
          <article className="card">
            <img src="https://allmusic-arg.netlify.app/assets/img/mic1.jpg" alt="microfono" />
            <section>
              <h3>Tipo de Producto</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis omnis, debitis id sint error unde numquam nostrum odit sunt
                dolore labore iure a obcaecati provident placeat deserunt odio ullam.
              </p>
            </section>
          </article>
        </div>
      </section>

      <section className="home-section">
        <h2>¿Quiénes Somos?</h2>
        <article>
          <p>
            Somos una compañía líder en la venta de equipamientos deportivos. Desde el 2012, trabajamos incansablemente para que nuestros clientes
            puedan encontrar de manera rápida y eficiente, artículos de primer nivel.
            <br /> <br /> Nuestro objetivo es satisfacer las necesidades de los deportistas aficionados, como los de alto rendimiento. Proporcionado
            productos de la mejor calidad, con
            <b> alta resistencia y durabilidad</b>.
          </p>
        </article>
      </section>
    </main>
  );
}
