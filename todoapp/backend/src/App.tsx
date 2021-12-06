import React from 'react';

import './App.css';
import { Rotas } from './rotas';
import { HeaderLadoesquerdo} from './componentes/HeaderLadoesquerdo';
import { HeaderLadodireito } from './componentes/HeaderLadodireito';

function App() {
  return (
    <div className="container">
      <header>
        <HeaderLadoesquerdo />
        <HeaderLadodireito />
        
        
      </header>
      <main>
        <Rotas/>
      </main>
      <footer>
        Feito com ReactJs + JsonServer + 1
      </footer>
    </div>
  );
}

export default App;
