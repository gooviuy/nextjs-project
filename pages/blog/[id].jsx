import Layout from "../../componentes/Layout";

export default function firstPost({ data }) {
  console.log(data);
  return (
    <Layout>
      <h1>
        {data.id} - {data.title}{" "}
      </h1>
    </Layout>
  );
}

//Creating all the files from 1 to 100
export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: id.toString() } }));
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
}
//Showing the data that comes from the diferent id
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
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
