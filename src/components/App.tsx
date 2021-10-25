
import logo from '../assets/logo.svg'
import './App.scss'
import Layout from "./Layout/Layout";
// @ts-ignore
import data from '../assets/data.yml'



function App() {

  return (
    <>
      <Layout>
          {data.name}
          <img src={logo} alt={'logo'}/>
      </Layout>
    </>
  )
}

export default App
