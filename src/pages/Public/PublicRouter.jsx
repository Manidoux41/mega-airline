import { Route, Routes } from "react-router-dom"
import { Layout, Home, Compagnie, Direction, Fleet, Subscribe } from '../../pages/Public'

const PublicRouter = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            
            <Route index element={<Home />} />
            
            <Route path='/home' element={<Home />} />
            <Route path='/compagnie' element={<Compagnie/>} />
            <Route path='/direction' element={<Direction     />} />
            <Route path='/fleet' element={<Fleet />} />
            <Route path='/inscription' element={<Subscribe />} />

        </Route>
    </Routes>
  )
}

export default PublicRouter