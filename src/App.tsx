import './App.css'
import { CustomerForm } from './components/CustomerForm'
import { InfoTab } from './components/InfoTab'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className='sm:h-[94%]'>
      <Navbar></Navbar>
      <div className='sm:flex sm:h-9/10'>
      <InfoTab></InfoTab>
      <CustomerForm></CustomerForm>
      </div>
    </div>
  )
}

export default App
