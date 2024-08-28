import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { documents } from "../../assets/data/documents";

import "./ProfileDocuments.css";

export const ProfileDocuments: React.FC = () => {
  return (
    <div className="profile-documents-container">
      <h3>Documents</h3>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Type</th>
            <th>Size</th>
            <th>Upload Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => {
            const Icon = document.icon;

            return (
              <tr key={document.id}>
                <td>
                  <Icon />
                  <p>{document.fileName}</p>
                </td>
                <td>{document.type}</td>
                <td>{document.size}</td>
                <td>{document.uploadDate}</td>
                <td>
                  <button>
                    <FaDownload />
                  </button>
                  <button>
                    <FaRegEdit />
                  </button>
                  <button>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
