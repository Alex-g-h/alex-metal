import './App.css'
import AchievementsPart from './app/components/achievementsPart'
import ActionsPart from './app/components/actionsPart'
import CompanyPart from './app/components/companyPart'
import ContactsPart from './app/components/contactsPart'
import FooterPart from './app/components/footerPart'
import FormPart from './app/components/formPart'
import InfoPart from './app/components/infoPart'
import MapPart from './app/components/mapPart'
import PartnersPart from './app/components/partnersPart'
import ProductsPart from './app/components/productsPart'

function App() {
  return (
    <div className="App">
      <CompanyPart /> {/* // [+] */}
      <ActionsPart /> {/* // [+] */}
      <InfoPart /> {/* // [-/+] */}
      {/* <AchievementsPart />  */} {/* // [--] */}
      <ProductsPart /> {/* // [+] */}
      {/* <PartnersPart /> */} {/* // [--] */}
      {/* <FormPart /> // old comment*/}
      <ContactsPart /> {/* // [+] */}
      <FooterPart />
    </div>
  )
}

export default App
