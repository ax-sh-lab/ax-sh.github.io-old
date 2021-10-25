import logo from "../assets/logo.svg";
import "./App.scss";
import Layout from "./Layout/Layout";
// @ts-ignore
import data from "../assets/data.yml";

console.log(data);

function Stacks({ list }: { list: string[] }) {
  return (
    <ul>
      {list.map((item: string) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

function App() {
  return (
    <>
      <Layout>
        {data.name}
        <Stacks list={data.stacks} />
        <img src={logo} alt={"logo"} />
      </Layout>
    </>
  );
}

export default App;
