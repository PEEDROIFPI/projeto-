import estilos from './estilo.module.css'
export function Novastarefa(){
    return (
        <div>
            <h2 className={estilos.capa}>Nova Tarefa</h2>
            <form action= "#" method="post">
                <input type="text" placeholder="Descrição"/>
                <input type="submit" value="Cadastar Nova tarefa" />
            </form>
        </div>
    )
}