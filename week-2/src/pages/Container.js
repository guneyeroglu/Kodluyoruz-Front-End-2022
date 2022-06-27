import React from "react";
import styles from "./container.module.scss";
import data from "../Data/data.json";
import Students from "../components/Students/Students";
import Assistants from "../components/Assistants/Assistants";

const Container = () => {
  /**
   * Grup isimlerini dinamik olarak çekmek için data'mdaki group isimlerini bir değişkene eşitliyorum.
   * Object.keys sayesinde artık grup isimlerine erişebilirim.
   * 2 components oluşturdum. -Assistants && -Students
   * Bu component'lara 2 adet değişken gönderiyorum. Props yardımı ile component içinde bu verilere ulaşabileceğim.
   * groupName ile grup adlarını yolluyorum, içeride filtreleme işlemi yapabilmek için.
   * className ile de bir obje gönderiyorum. Obje'min 3 elemanı var ve component'ların içindeki gerekli yerler için uygun olan class'ları temsil ediyorlar.
   */
  const groupNames = data.reduce((member, item) => {
    member[item.group] = "";
    return member;
  }, {});

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__title}>
          <span>Bursa React Bootcamp Group Maker v2.0</span>
        </div>
        <div className={styles.container__list}>
          <div className={styles.container__list__main}>
            {Object.keys(groupNames).map((groupName) => (
              <div
                key={groupName}
                className={styles.container__list__main__card}
              >
                <Assistants
                  groupName={groupName}
                  className={{
                    first: styles.container__list__main__card__item,
                    second: styles.container__list__main__card__item__header,
                    third: styles.container__list__main__card__item__body,
                  }}
                />
                <Students
                  groupName={groupName}
                  className={{
                    first: styles.container__list__main__card__item,
                    second: styles.container__list__main__card__item__header,
                    third: styles.container__list__main__card__item__body,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
