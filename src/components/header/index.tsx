import { FaBars, FaHome } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import * as Styles from "./styles"
import { Button } from "../button"
import { Link } from "../link"

export function Header() {
  return (
    <Styles.Container>
      <div>
        <Link to = "/">
          <img
            src={Logo}
            alt="Logo de Filmz. Botão de play ao lado do texto 'Filmz'"
          />
        </Link>
          
        <Link to = "/">
          <FaHome />
          Home
        </Link>
        <Link to = "/wishlist">
          <FaBars />
          Minha lista
        </Link>
      </div>

      <form className="search-wrapper">
        <input
          type="text"
          placeholder="Pesquise um filme"
        />

        <Button style={{borderRadius : '0 4px 4px 0'}}>Pesquisar</Button>
      </form>
    </Styles.Container>
  )
}
