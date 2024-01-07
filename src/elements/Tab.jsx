import Card from "./Card.jsx";

function Tab() {
  let phoneData = [
    "android 14",
    "latest softwares",
    "security updates for 5 yrs",
  ];
  let laptopData = [
    "macOS",
    "lates-softwares",
    "fastest machine on planet",
    "out of your budget",
  ];
  return (
    <>
      <div className="tab">
        <Card
          item="Phone"
          description={phoneData.map((item, index) => (
            <li>{item}</li>
          ))}
        />
        <Card
          item="Laptop"
          description={laptopData.map((item, index) => (
            <li>{item}</li>
          ))}
        />
        <Card
          item="Phone"
          description={phoneData.map((item, index) => (
            <li>{item}</li>
          ))}
        />
        <Card
          item="Laptop"
          description={laptopData.map((item, index) => (
            <li>{item}</li>
          ))}
        />
        <Card
          item="Phone"
          description={phoneData.map((item, index) => (
            <li>{item}</li>
          ))}
        />
        <Card
          item="Laptop"
          description={laptopData.map((item, index) => (
            <li>{item}</li>
          ))}
        />
      </div>
    </>
  );
}

export default Tab;
