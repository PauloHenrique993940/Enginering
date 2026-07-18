
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Business from './components/Business/Business'
import Services from './components/Services/Services'
import TrustFooter from './components/TrustFooter/TrustFooter'
import CookieConsent from './components/CookieConsent/CookieConsent'

function App() {


  return (
    <>
      <Header/>
      <main>
        <Hero />
        <Section />
        <Business />
        <Services />
        <TrustFooter />
      </main>
      <CookieConsent />
    </>
  )
}

export default App
