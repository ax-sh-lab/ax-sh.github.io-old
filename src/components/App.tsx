import logo from "../assets/logo.svg";
import "./App.scss";
import Layout from "./Layout/Layout";
// @ts-ignore
import data from "../assets/data.yml";
import StackIcon from "./StackIcon/StackIcon";

console.log(data);

function Stacks({ list }: { list: string[] }) {
  return (
    <ol>
      {list.map((item: string) => {
        return (
          <li>
            <div className={"stack"}>
              <StackIcon name={item} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function StacksAndTools({ list }: { list: any }) {
  const groups = Object.entries(list);
  return (
    <>
      {groups.map(([key, value]) => {
        return (
          <div>
            <h1>{key}</h1>
            <Stacks list={value} />
          </div>
        );
      })}
    </>
  );
}

function App() {
  return (
    <>
      <Layout>
        {data.name}
        <StacksAndTools list={data.stacks} />
        {/*<Stacks />*/}
        <img src={logo} alt={"logo"} />
      </Layout>
    </>
  );
}

export default App;
