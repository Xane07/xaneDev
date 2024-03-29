function SkillCards(props) {
  return (
    <>
      <div className="thisCard shadow-2xl">
        <code>{props.whichEnd}</code>
        <div className="skillSpans">
          <p className="skillPoints">{props.skillName}</p>
          <p className="skillPoints">{props.skillName}</p>
          <p className="skillPoints">{props.skillName}</p>
          <p className="skillPoints"></p>
          </div>
      </div>
    </>
  );
}

export default SkillCards;
