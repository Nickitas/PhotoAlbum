import { useState, Suspense, lazy } from 'react'
import Banner from './components/banner/Banner'
import PhotoList from './components/photo_list/PhotoList'
const ModalWindow = lazy(() => import('./components/modal_window/ModalWindow'))

const App = () => {

  const [id, setId] = useState('')

  return (
    <main className="App">
      <Suspense fallback={<div className='loading-animation'></div>}>
        <Banner/>
        <PhotoList setId={setId} />
        {id!=''&&<ModalWindow id={id} setId={setId} />}
      </Suspense>
    </main>
  )
}

export default App