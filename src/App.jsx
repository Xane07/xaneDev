import "./App.css";
import Tab from "./elements/Tab.jsx";
import Header from "./elements/header/header.jsx";
import Text from "./elements/introduction/Text.jsx";
import Me from "./elements/aboutMe/mesection.jsx"
import Footer from "./elements/footer/footer.jsx";
import Skills from "./elements/skills/skills.jsx";


import { Analytics } from "@vercel/analytics/react";



const api = "http://localhost:6969/tasks";

const apiFetch = async () => {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  return data;
};
apiFetch();

function App() {
  return (
    <>
      <Header />
      <Text />
      <Me />
      <Skills />
      <Footer />
      <Analytics />
    </>
  );
}
export default App;
