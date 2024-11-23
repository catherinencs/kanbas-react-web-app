import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { setAssignments, addAssignment, deleteAssignment } from "./reducer"; 
import * as assignmentsClient from "./client"; 
import * as coursesClient from "../client";
import { BsGripVertical, BsSearch, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControls from "./AssignmentControls";
import AssignmentItem from "./AssignmentItem";

export default function AssignmentsList() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments) || [];
  const [assignmentTitle, setAssignmentTitle] = useState("");

  const fetchAssignments = async () => {
    if (!cid) return;
    const fetchedAssignments = await coursesClient.findAssignmentsForCourse(cid);
    dispatch(setAssignments(fetchedAssignments));
  };

  const addAssignmentForCourse = async () => {
    if (!cid || !assignmentTitle) return;
    const newAssignment = {
      title: assignmentTitle,
      description: "Default description",
      points: 100,
      dueDate: new Date().toISOString(),
      availableDate: new Date().toISOString(),
      availableUntil: new Date().toISOString(),
      course: cid,
    };
    const createdAssignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(createdAssignment));
    setAssignmentTitle(""); // Clear the input field
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div id="assignments-section" className="p-4">
      <AssignmentControls
        courseId={cid}
        assignmentTitle={assignmentTitle}
        setAssignmentTitle={setAssignmentTitle}
        addAssignmentForCourse={addAssignmentForCourse}
      />
      <ul id="modules-list" className="list-group rounded-0">
        <li className="module-item list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center mb-3 bg-secondary p-3">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <h3 id="module-title" className="mb-0">Week 1</h3>
            </div>
            <div className="d-flex align-items-center">
              <div className="bg-light rounded-pill px-3 py-1 me-2 text-muted">40% of Total</div>
              <BsPlus className="me-3" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul id="assignment-list" className="list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <AssignmentItem
                  assignment={assignment}
                  key={assignment._id}
                  removeAssignment={removeAssignment}
                />
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}