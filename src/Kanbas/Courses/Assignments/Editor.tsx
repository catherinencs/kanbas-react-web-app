export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                {/* Points */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                {/* Assignment Group */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="assignments">ASSIGNMENTS</option>
                            <option value="quizzes">QUIZZES</option>
                            <option value="projects">PROJECTS</option>
                        </select>
                    </td>
                </tr>

                {/* Display Grade As */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                            <option value="points">Points</option>
                            <option value="letter-grade">Letter Grade</option>
                        </select>
                    </td>
                </tr>

                {/* Submission Type */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="online">Online</option>
                            <option value="on-paper">On Paper</option>
                            <option value="external-tool">External Tool</option>
                        </select>
                    </td>
                </tr>

                {/* Online Entry Options */}
                <tr>
                    <td align="right" valign="top">

                    </td>
                    <td>
                        <label>
                            <label htmlFor="wd-online-entry-options">Online Entry Options
                            </label><br />
                            <input type="checkbox" id="wd-text-entry" /> Text Entry
                        </label><br />
                        <label>
                            <input type="checkbox" id="wd-website-url" /> Website URL
                        </label><br />
                        <label>
                            <input type="checkbox" id="wd-media-recordings" /> Media Recordings
                        </label><br />
                        <label>
                            <input type="checkbox" id="wd-student-annotation" /> Student Annotation
                        </label><br />
                        <label>
                            <input type="checkbox" id="wd-file-upload" /> File Uploads
                        </label>
                    </td>
                </tr>

                {/* Assign To */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>

                {/* Due Date */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>

                {/* Available From and Until */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input type="date" id="wd-available-from" value="2024-05-06" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input type="date" id="wd-available-until" value="2024-05-20" />
                    </td>
                </tr>
            </table>
            <hr />
            
            {/* Button container */}
            <div style={{ textAlign: 'right' }}>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    );
}
