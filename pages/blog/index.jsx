//index le da la referencia dentro de la carpeta para que estableza la ruta.
/* import Head from "next/head";
import Link from "next/link"; */
import Layout from "../../componentes/Layout";
//link optimisa la navegacion en la pagina, mas efectivo que pasar <a> directamente.

export default function index({ data }) {
  console.log(data);
  return (
    <div>
      <Layout>
        <title>This is my first try</title>
        <meta name="description" content="This is a try on nextjs" />
      </Layout>
      <div>
        {data.map(({ id, title, body, userId }) => (
          <>
            <h1 key={id}>
              {userId} - {title.toUpperCase()}
            </h1>
            <p>{body} </p>
          </>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
