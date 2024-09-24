export default function Assignments() {
    return (
      <div id="wd-assignments">
        {/* Search Bar and Buttons */}
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
  
        {/* Assignments Title */}
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
  
        {/* Assignment List */}
        <ul id="wd-assignment-list">
          {/* Assignment 1 */}
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <div className="wd-assignment-details">
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |
              <strong> Due</strong> May 13 at 11:59pm | 100 pts
            </div>
          </li>
  
          {/* Assignment 2 */}
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/5678/Assignments/456">
              A2 - CSS + BOOTSTRAP
            </a>
            <div className="wd-assignment-details">
              Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |
              <strong> Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </li>
  
          {/* Assignment 3 */}
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/9101/Assignments/789">
              A3 - JAVASCRIPT + REACT
            </a>
            <div className="wd-assignment-details">
              Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |
              <strong> Due</strong> May 27 at 11:59pm | 100 pts
            </div>
          </li>
        </ul>
      </div>
    );
  }
  