import React from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { IoAttachOutline } from "react-icons/io5";

import team1 from "../../assets/images/history-1.jpg";
import team2 from "../../assets/images/history-2.jpg";
import team3 from "../../assets/images/history-3.jpg";
import team4 from "../../assets/images/history-4.jpg";
import team5 from "../../assets/images/history-5.jpg";
import team6 from "../../assets/images/history-6.jpg";

import "./KanbanTaskBoard.css";
import { kanbanBoardTasks } from "../../assets/data/kanban-board-tasks";

export const KanbanTaskBoard: React.FC = () => {
  return (
    <div className="kanban-task-board-container">
      <h2>Kanban Board</h2>
      <div className="kanban-task-board-header">
        <div className="kanban-task-board-header-left">
          <button className="kanban-create-board-button">+ Create Board</button>
          <input type="text" placeholder="Search for projects, tasks..." />
        </div>
        <div className="kanban-team-container">
          <img src={team1} alt="team" />
          <img src={team2} alt="team" />
          <img src={team3} alt="team" />
          <img src={team4} alt="team" />
          <img src={team5} alt="team" />
          <img src={team6} alt="team" />
        </div>
      </div>
      <div className="kanban-task-board-content">
        {kanbanBoardTasks.map((board) => (
          <ul key={board.id} className="kanban-board-list">
            <li className="kanban-board-list-header">
              <h1>{board.type}</h1>
              <p className={`${board.type}`}>{board.taskNo}</p>
            </li>
            <ul className="kanban-task-list">
              {board.tasks.map((task) => (
                <li key={task.id}>
                  <h3>{task.title}</h3>
                  {task?.description && <p>{task.description}</p>}
                  {task?.attachedFiles &&
                    task.attachedFiles?.map((file: any, index: number) => (
                      <img
                        key={index}
                        className="task-attachment-file"
                        src={file}
                        alt="file"
                      />
                    ))}
                  <div className="kanban-task-tag-and-team">
                    <div>
                      {task.tags.map((tag, index) => (
                        <div className="task-tag-container" key={index}>
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div>
                      {task.users.map((user, index) => (
                        <img
                          className="task-team-member"
                          key={index}
                          src={user}
                          alt="team"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="kanban-task-info">
                    <h5>{task.version}</h5>
                    <ul className="kanban-task-detail">
                      <li>
                        <MdRemoveRedEye />
                        <span>{task.see}</span>
                      </li>
                      <li>
                        <FaCommentDots />
                        <span>{task.comment}</span>
                      </li>
                      <li>
                        <IoAttachOutline />
                        <span>{task.attachment}</span>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </ul>
        ))}
      </div>
    </div>
  );
};
