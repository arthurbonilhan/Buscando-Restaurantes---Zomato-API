import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

import Results from './components/Resultados/Results'
import Search from './pages/Search'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Search}/>
            <Route path="/resultados/:id/:cidade"  component={Results}/>
        </BrowserRouter>
    )
}

export default Routes;