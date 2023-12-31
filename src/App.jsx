//import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
//import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

const App = () => {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Welcome to Go Market"}/>
    <ItemDetailContainer/>
    
    {/* <ItemCount/> */}
    {/* Lo vimos en clase pero no se necesita para la primera entrega.
        por eso se comenta */}

    </>
  )
}

export default App
