import './App.css'
import { CustomerForm } from './components/CustomerForm'
import { InfoTab } from './components/InfoTab'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className='h-screen'>
      <Navbar></Navbar>
      <div className='flex h-9/10'>
      <InfoTab></InfoTab>
      <CustomerForm></CustomerForm>
      </div>
    </div>
  )
}

export default App
