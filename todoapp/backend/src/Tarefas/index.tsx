import { BotaoFlutuante } from '../componentes/BotaoFlutuante'
import estilos from './estilo.module.css'



export function Tarefas(){
    return (
    <div>
        <h2 className={estilos.topo}>Minhas Tarefas</h2>
        <ul>
            <li>Cortar a Grama</li>
            <li>Limpar a Piscina</li>
        </ul>
       
        <BotaoFlutuante/>

    </div>
  )
}