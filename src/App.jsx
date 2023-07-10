import { useDisclosure } from '@chakra-ui/react'
import { HeaderComponent } from './components/header'
import { BodyComponent } from './components/Body'
import './App.css'


function App() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <HeaderComponent />
      <BodyComponent isOpen={isOpen} onToggle={onToggle} />
    </>
  )
}

export default App
