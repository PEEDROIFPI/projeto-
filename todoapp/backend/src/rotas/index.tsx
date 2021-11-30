import { Route, Routes} from 'react-router-dom';
import { Novastarefa } from '../Novastarefa';
import { Tarefas } from '../Tarefas';



export function Rotas(){
    return (
    <Routes>
        <Route path='/Tarefas' element={<Tarefas/>}/>
        <Route path='/Novas-Tarefas' element={<Novastarefa/>}/>
    </Routes>
    )

}
