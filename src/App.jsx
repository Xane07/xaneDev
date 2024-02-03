import "./App.css";
import Tab from "./elements/Tab.jsx";
import Header from "./elements/header/header.jsx";
import Text from "./elements/introduction/Text.jsx";
import Me from "./elements/aboutMe/mesection.jsx"
import Footer from "./elements/footer/footer.jsx";


import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <Text />
      <Me />
      <div style={{ height: "800px" }} id="skills"></div>
      <Footer />
      <Analytics />
    </>
  );
}
export default App;
