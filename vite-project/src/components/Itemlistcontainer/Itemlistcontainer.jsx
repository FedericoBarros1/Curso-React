
import styles from './Itemlistcontainer.module.css'

export const ItemListContainer = ( {greeting } ) => {
    
    const defaultTitle = "Bienvenidos a nuestra pagina!"

    return (
        <main>
            <h1> { greeting ? greeting : defaultTitle } </h1>
            <div className = {styles.background}>
                <p> Aqui podras encontrar las mejores golosinas! </p>
                <p> Estate atento a nuestras proximas ofertas </p>
            </div>
        </main>
    )
}