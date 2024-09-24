export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2>Course Status</h2>

            {/* Unpublish and Publish buttons */}
            <div className="wd-status-buttons">
                <button className="wd-status-button">Unpublish</button>
                <button className="wd-status-button">Publish</button>
            </div>

            {/* Other course action buttons */}
            <div><button className="wd-action-button">Import Existing Content</button></div>
            <div><button className="wd-action-button">Import from Commons</button></div>
            <div><button className="wd-action-button">Choose Home Page</button></div>
            <div><button className="wd-action-button">View Course Stream</button></div>
            <div><button className="wd-action-button">New Announcement</button></div>
            <div><button className="wd-action-button">New Analytics</button></div>
            <div><button className="wd-action-button">View Course Notifications</button></div>

        </div>
    );
}
