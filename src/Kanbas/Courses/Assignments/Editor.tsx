export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={5}>
                    The assignment is available online. Submit a link to the landing page of your web application.
                </textarea>
            </div>

            <div className="row mb-3">
                <div className="col-md-3">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    <input id="wd-points" value={100} className="form-control" />
                </div>

                <div className="col-md-3">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    <select id="wd-group" className="form-control">
                        <option value="assignments">ASSIGNMENTS</option>
                        <option value="quizzes">QUIZZES</option>
                        <option value="projects">PROJECTS</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    <select id="wd-display-grade-as" className="form-control">
                        <option value="percentage">Percentage</option>
                        <option value="points">Points</option>
                        <option value="letter-grade">Letter Grade</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    <select id="wd-submission-type" className="form-control">
                        <option value="online">Online</option>
                        <option value="on-paper">On Paper</option>
                        <option value="external-tool">External Tool</option>
                    </select>
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Online Entry Options</label><br />
                <div className="form-check">
                    <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="wd-website-url" className="form-check-input" />
                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                    <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                    <input id="wd-assign-to" value="Everyone" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                    <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="wd-available-from" className="form-label">Available from</label>
                    <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-3 offset-md-6">
                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                    <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                </div>
            </div>

            <hr />

            {/* Buttons */}
            <div style={{ textAlign: 'right' }}>
    <button className="btn btn-light me-2">Cancel</button>
    <button className="btn btn-danger">Save</button>
</div>

        </div>
    );
}
