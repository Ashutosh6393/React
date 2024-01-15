import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import './App.css'

function App() {

  return (
    <>
      <Navigation />
      <div id="main">
        <Header />
        <Form />
      </div>
    </>
  )
}

export default App
