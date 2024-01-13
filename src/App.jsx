import "./App.css";
import Tab from "./elements/Tab.jsx";
import Header from "./elements/header/header.jsx";
import Text from './elements/introduction/Text.jsx'
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <>
      <Header />
      <Text />
      <div style={{height : "800px"}}></div>
      <Analytics />
    </>
  );
}
export default App;
