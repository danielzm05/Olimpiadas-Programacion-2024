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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aut odio deleniti molestiae, id sed doloribus non repellendus qui
            repellat perspiciatis tempora nobis minus dignissimos. Ad dolorum quaerat blanditiis id!
          </p>
        </article>
      </section>
    </main>
  );
}
