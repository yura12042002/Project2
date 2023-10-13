import "./work.css";

function Work({
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) {
  const tags = [role, level, ...languages, ...tools];
  return (
    <div className="containBlocks">
      <img className="containBlocksLogo" src={logo} alt="logo" />
      <div className="containBlocksInfo">
        <div className="containBlocksInfoHead">
          <p className="containBlocksInfoHeadCompany">{company}</p>
          {isNew && <div className="containBlocksInfoHeadNew">New!</div>}
          {featured && (
            <div className="containBlocksInfoHeadFeatured">FEACHERED</div>
          )}
        </div>
        <div className="containBlocksInfoPos">{position}</div>
        <div className="containBlocksInfoFooter">
          {postedAt} &#8226; {contract} &#8226; {location}
        </div>
      </div>
      <div className="containBlocksLast">
        {tags.map((el) => (
          <div key={el} className="containBlocksLastEvery">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Work;
