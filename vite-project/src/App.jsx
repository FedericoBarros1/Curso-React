import { Navbar } from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from './components/Itemlistcontainer/Itemlistcontainer.jsx'
import { ItemCount } from './components/Itemcount/Itemcount.jsx'
const App = () => {

  const itemListContainerProps = {
    greeting: "Bienvenido a nuestra tienda!",
    bgBlue: false
  }

  return (
    <>
      <Navbar/>
      <ItemListContainer 
        { ...itemListContainerProps}     

      />
      <ItemCount/>  
    </>
    )

}

export default App