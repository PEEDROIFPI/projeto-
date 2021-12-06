import { Link } from 'react-router-dom'
import estilo from './estilo.module.css'

export function BotaoFlutuante(){
    return(
        <div className={estilo.botao}>
            <Link to="/Novas-tarefas">+</Link>
        </div>
    )
}