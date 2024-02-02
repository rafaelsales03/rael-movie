import { Route, Routes } from 'react-router-dom'

import Detail from '../containers/Detail/index.jsx'
import DetailSeries from '../containers/DetailSeries'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout.jsx'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/detailSeries/:idSeries" element={<DetailSeries />} />
      </Route>
    </Routes>
  )
}

export default Router
