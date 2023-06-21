import { Route, Routes } from 'react-router-dom'
import Countries from './Countries'
import Game from './Game'
import Header from './Header'
import SpecificCountry from './SpecificCountry'
import SpecificQuestion from './SpecificQuestion'
import CheckAnswer from './CheckAnswer'
import CompetitiveGame from './CompetitiveGame'

export default function Layout() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Countries/>} />
      <Route path='/trivia' element={<Game/>} />
      <Route path='/trivia/:questionId' element={<SpecificQuestion/>} />
      <Route path='/trivia/:questionId/:answerId' element={<CheckAnswer/>} />
      <Route path='/game' element={<CompetitiveGame/>} />
      <Route path='/search/:searchValue' element={<Countries/>} />
      <Route path='/country/:countryName' element={<SpecificCountry/>}/>
    </Routes>
    </>
  )
}
