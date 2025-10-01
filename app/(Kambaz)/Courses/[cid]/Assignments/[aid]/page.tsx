import { 
  FormLabel, 
  FormControl, 
  FormSelect, 
  FormCheck,
  Button 
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container-fluid">
      {/* Assignment Name */}
      <div className="mb-3">
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl 
          id="wd-name" 
          defaultValue="A1 - ENV + HTML" 
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <FormControl 
          as="textarea" 
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify."
        />
      </div>

      {/* Points */}
      <div className="row mb-3">
        <FormLabel column sm={2} htmlFor="wd-points" className="text-end">
          Points
        </FormLabel>
        <div className="col-sm-10">
          <FormControl 
            id="wd-points" 
            type="number"
            defaultValue={100} 
          />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-3">
        <FormLabel column sm={2} htmlFor="wd-group" className="text-end">
          Assignment Group
        </FormLabel>
        <div className="col-sm-10">
          <FormSelect id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </FormSelect>
        </div>
      </div>

      {/* Display Grade as */}
      <div className="row mb-3">
        <FormLabel column sm={2} htmlFor="wd-display-grade-as" className="text-end">
          Display Grade as
        </FormLabel>
        <div className="col-sm-10">
          <FormSelect id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
          </FormSelect>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-3">
        <FormLabel column sm={2} htmlFor="wd-submission-type" className="text-end">
          Submission Type
        </FormLabel>
        <div className="col-sm-10">
          <div className="border p-3 rounded">
            <FormSelect id="wd-submission-type" className="mb-3">
              <option value="Online">Online</option>
            </FormSelect>

            <div className="mb-3">
              <FormLabel className="fw-bold">Online Entry Options</FormLabel>
              <FormCheck 
                type="checkbox" 
                id="wd-text-entry"
                label="Text Entry"
              />
              <FormCheck 
                type="checkbox" 
                id="wd-website-url"
                label="Website URL"
                defaultChecked
              />
              <FormCheck 
                type="checkbox" 
                id="wd-media-recordings"
                label="Media Recordings"
              />
              <FormCheck 
                type="checkbox" 
                id="wd-student-annotation"
                label="Student Annotation"
              />
              <FormCheck 
                type="checkbox" 
                id="wd-file-upload"
                label="File Uploads"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Assign */}
      <div className="row mb-3">
        <FormLabel column sm={2} className="text-end">
          Assign
        </FormLabel>
        <div className="col-sm-10">
          <div className="border p-3 rounded">
            {/* Assign to */}
            <div className="mb-3">
              <FormLabel htmlFor="wd-assign-to" className="fw-bold">Assign to</FormLabel>
              <FormControl 
                id="wd-assign-to" 
                defaultValue="Everyone" 
              />
            </div>

            {/* Due */}
            <div className="mb-3">
              <FormLabel htmlFor="wd-due-date" className="fw-bold">Due</FormLabel>
              <FormControl 
                type="datetime-local" 
                id="wd-due-date" 
                defaultValue="2024-05-13T23:59" 
              />
            </div>

            {/* Available from and Until */}
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <FormLabel htmlFor="wd-available-from" className="fw-bold">Available from</FormLabel>
                  <FormControl 
                    type="datetime-local" 
                    id="wd-available-from" 
                    defaultValue="2024-05-06T00:00" 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <FormLabel htmlFor="wd-available-until" className="fw-bold">Until</FormLabel>
                  <FormControl 
                    type="datetime-local" 
                    id="wd-available-until" 
                    defaultValue="2024-05-20T23:59" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}