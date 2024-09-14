import "../styles/Table.css";
export function Table({ title, children }) {
  return (
    <section className="table">
      <header>
        <h2>{title}</h2>
      </header>
      <table className="table-content">{children}</table>
    </section>
  );
}
