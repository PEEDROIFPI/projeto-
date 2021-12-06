import estilos from './estilos.module.css'

export function HeaderLadodireito(){
    return (
        <div className={estilos.headerladodireito}>
            <div className={estilos.bloco}>
                <p>10</p>
                <span>ABERTAS</span>
            </div>
            <div className={estilos.bloco}>
                <p>12</p>
                <span>FEITAS</span>

            </div>

        </div>
    
    )
}