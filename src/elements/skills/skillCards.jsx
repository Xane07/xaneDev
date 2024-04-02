function SkillCards(props) {
  return (
    <>
      <div className="thisCard shadow-2xl">
        <div className="frmwork"><h4>{props.whichEnd}</h4></div>
        <div className="skillSpans">
          <p className="skillPoints">{props.skillName}</p>
          </div>
      </div>
    </>
  );
}

export default SkillCards;
