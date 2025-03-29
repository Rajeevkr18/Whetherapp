import React from "react";
import "../styles/styles.css";

const HistoryList = ({ history, onSelect, onDelete }) => {
  return (
    <div className="history-list">
      <h3>🔍 Recent Searches</h3>
      {history.length === 0 ? (
        <p className="history-empty">No recent searches yet.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index} className="history-item">
              <span onClick={() => onSelect(item)}>{item}</span>
              {/* <button className="delete-btn" onClick={() => onDelete(item)}>❌</button> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryList;




