import React from "react";

import { ReactComponent as Pencil } from "../../assets/svg/Main/pencil.svg";
import { ReactComponent as Edit } from "../../assets/svg/Main/edit.svg";
import { ReactComponent as Circle } from "../../assets/svg/Main/circle.svg";
import { ReactComponent as Plus } from "../../assets/svg/Main/plus.svg";

const HomeItemCard = (props) => {
  const { styles } = props;
  const projectData = props.data;
  const { search, selected } = props.value;

  return (
    <div className={styles.body}>
      {projectData &&
        projectData
          .filter(
            (project) =>
              project.name.toLowerCase().includes(search.toLowerCase()) ||
              project.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
          )
          .filter(
            (project) =>
              project.status?.includes(selected) ||
              project.activity === selected
          )
          .map((project) => (
            <div className={styles.card} key={project.id}>
              <div className={styles.item}>
                <div className={styles.item__top}>
                  <div className={styles.title}>
                    <span>{project.name}</span>
                  </div>
                  <div className={styles.icons}>
                    <Pencil />
                    <Edit />
                  </div>
                  {project.activity ? (
                    <div className={styles.activity}>
                      <Circle fill="#00DB99" />
                      <span style={{ color: "#00DB99" }}>Active</span>
                    </div>
                  ) : (
                    <div className={styles.activity}>
                      <Circle fill="#FF285C" />
                      <span style={{ color: "#FF285C" }}>Inactive</span>
                    </div>
                  )}
                </div>
                <div className={styles.item__mid}>
                  <div className={styles.date}>
                    <span>Start Date</span>
                    <span>{project.startDate}</span>
                  </div>
                  {project.status ? (
                    <div className={styles.status}>
                      <div className={styles.status__title}>
                        <span>Status</span>
                      </div>
                      {project.status === "On Hold" ? (
                        <div className={styles.status__body}>
                          <Circle fill={"#F0BB00"} />
                          <span style={{ color: "#F0BB00" }}>
                            {project.status}
                          </span>
                        </div>
                      ) : (
                        <div className={styles.status__body}>
                          <Circle fill={"#00DB99"} />
                          <span style={{ color: "#00DB99" }}>
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className={styles.buttons}>
                    <button>
                      <span>14</span>
                      <span>Tasks</span>
                    </button>
                    <button>
                      <span>{project.members.length}</span>
                      <span>Users</span>
                    </button>
                  </div>
                </div>
                <div className={styles.item__bottom}>
                  <div className={styles.members}>
                    <span>Members</span>
                    <div className={styles.members__images}>
                      {project.members.map((member) => (
                        <img
                          src={member.src}
                          alt={member.alt}
                          key={`${project.id}-${member.alt}`}
                        />
                      ))}
                      <div className={styles.members__svg}>
                        <Plus />
                      </div>
                    </div>
                  </div>
                  <div className={styles.item__progress}>
                    <div className={styles.progress__title}>
                      <span>Progress</span>
                    </div>
                    <div className={styles.progress__percent}>
                      <span>{project.progress}%</span>
                    </div>
                    <div className={styles.progress__bar}>
                      <div
                        className={styles.progress__color}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default HomeItemCard;
