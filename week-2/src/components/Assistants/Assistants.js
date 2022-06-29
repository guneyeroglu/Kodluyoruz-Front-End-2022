import React from "react";
import data from "../../data/data.json";
const Assistants = (props) => {
  /**
   * asisstants değişkenine filtrelenmiş ve map'lenmiş veriyi eşitliyorum.
   * Filtrelemeyi ise props yardımı ile gönderdiğim groupName'e göre yapıyorum.
   */

  const assistants = data ? (
    data
      .filter((member) => member.group === props.groupName && member.assistant)
      .map((member) => (
        <div key={member.id} className={props.className.third}>
          <ul>
            <li>
              <span>{member.id}</span>
            </li>
            <li>
              <span>{member.name}</span>
            </li>
            <li>
              <span>{member.assistant ? "Yes" : "-"}</span>
            </li>
            <li>
              <span>{member.group}</span>
            </li>
          </ul>
        </div>
      ))
  ) : (
    <div>
      <span>Veri Bulunamadı</span>
    </div>
  );
  return (
    <div className={props.className.first}>
      <div className={props.className.second}>
        <ul>
          <li>Id</li>
          <li>Full Name</li>
          <li>Assistant</li>
          <li>Group Name</li>
        </ul>
      </div>
      {assistants}
    </div>
  );
};

export default Assistants;
