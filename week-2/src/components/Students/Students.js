import React from "react";
import data from "../../data/data.json";

const Students = (props) => {
  /**
   * students değişkenine filtrelenmiş ve map'lenmiş veriyi eşitliyorum.
   * Filtrelemeyi ise props yardımı ile gönderdiğim groupName'e göre yapıyorum.
   * Üyelerin isimlerinin düzenlenmesi için split, charAt, slice ve join method'larından yararlanıyorum.
   * Önce kelimelere bölüyor, her kelimeyi map'liyor ve bana döndürülen her kelime içinse baş harflerini büyük, gerisini küçük olacak şekilde render'lıyorum.
   */
  const students = data ? (
    data
      .filter((member) => member.group === props.groupName && !member.assistant)
      .map((member) => (
        <div key={member.id} className={props.className.third}>
          <ul>
            <li>
              <span>{member.id}</span>
            </li>
            <li>
              <span>
                {member.name
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toLocaleUpperCase() +
                      word.slice(1).toLocaleLowerCase()
                  )
                  .join(" ")}
              </span>
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
      {students}
    </div>
  );
};

export default Students;
