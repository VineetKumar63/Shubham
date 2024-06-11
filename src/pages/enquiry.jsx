import React from "react";
import Form from "react-bootstrap/Form";
import "../enquiryForm.css";
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/esm/Row'
function Enquiry() {
  return (
    <div>
      <div className="enquiry-form">
        <div className="form-header">
          <div>
            <label htmlFor="enquiry-form">Enquiry Form:</label>
            <select id="enquiry-form">
              <option>Wedding</option>
            </select>
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <select id="status">
              <option>Enquiry</option>
            </select>
            <button>Save</button>
          </div>
        </div>
        <Form className="form-sections">
          <FormSection title="Client Details">
            <Form.Group className="mb-2" id="client-name">
              <Form.Label>Client's Name</Form.Label>
              <Form.Control type="text" placeholder="Fiana Harper" />
            </Form.Group>
            <Form.Group className="mb-2" id="client-email">
              <Form.Label>Client's Email Address</Form.Label>
              <Form.Control type="email" placeholder="example@example.com" />
            </Form.Group>
            <Form.Group className="mb-2" id="client-phone">
              <Form.Label>Client's Mobile Phone</Form.Label>
              <Form.Control placeholder="+000 111 222 333" type="mob" />
            </Form.Group>
          </FormSection>
          <FormSection title="Event Details">
          <Row>
            <Col>
            <Form.Label>Event</Form.Label>
            <Form.Select className="mb-2" id="event">
              <option value="1">Wedding </option>
              <option value="2">Wedding 2</option>
              <option value="3">Wedding 3</option>
            </Form.Select>
            </Col>
            <Form.Group as={Col} className="mb-2" id="colour-scheme">
              <Form.Label>Colour Scheme</Form.Label>
              <Form.Control placeholder="Green's & Whites"/>
            </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col}  className="mb-2" id="event-date">
              <Form.Label>Event Date</Form.Label>
                <Form.Control type="date" placeholder="2024-06-05"/>
            </Form.Group>
            <Form.Group as={Col} id="guest-numbers" className="mb-2">
              <Form.Label>Guest numbers approx.</Form.Label>
                <Form.Control placeholder="110"  />
            </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col}  className="mb-2" id="enquiry-date">
              <Form.Label>Enquiry Date</Form.Label>
                <Form.Control type="date" placeholder="2024-06-05"/>
            </Form.Group>
            <Form.Group as={Col} className="mb-2" id="budget">
              <Form.Label>Budget approx.</Form.Label>
                <Form.Control placeholder="2400"/> 
            </Form.Group>
          </Row>
                      
          </FormSection>
        </Form>
      </div>
      <div className="venue-sections">
      <Form>
        <FormSection title="Venue Details">
        <Row >
        <Col>
        <Form.Group as={Col} id="venue-a" className="mb-2">
            <Form.Label>Venue A</Form.Label>
            <Form.Control placeholder="Caswell House" type="text"/>
        </Form.Group>
        <Row>
        <Form.Group as={Col} className="mb-2" id="venue-a-phone">
            <Form.Label>Venue A Phone</Form.Label>
            <Form.Control type="tel" placeholder="01865 858638"/>
        </Form.Group>
        <Form.Group as={Col} id="venue-a-contact" className="mb-2">
            <Form.Label>Venue A Contact</Form.Label>
            <Form.Control type="tel" placeholder="Kirsten Jones"/>
        </Form.Group>
        </Row>
        </Col>
        <Col>
        <Form.Group as={Col} className="mb-2" id="venue-b">
            <Form.Label>Venue B</Form.Label>
            <Form.Control placeholder="Buckingham Palace" type="text"/>
        </Form.Group>
        <Row>
        <Form.Group as={Col} className="mb-2" id="venue-b-phone">
            <Form.Label>Venue B Phone</Form.Label>
            <Form.Control placeholder="OX10 7DX" type="tel"/>
        </Form.Group>
        <Form.Group as={Col} className="mb-2" id="venue-b-contact">
            <Form.Label>Venue B Contact</Form.Label>
            <Form.Control type="tel" placeholder="Rupert Maitland Titterton"
            />
        </Form.Group>
        </Row>
        </Col>
        </Row>
        </FormSection>
      </Form>
      </div>
      <div>
      <FormSection title="Planner Details">
      <Form>
<Row>
<Form.Group as={Col} className="mb-2" id="planner-name">
            <Form.Label>Planner Name</Form.Label>
            <Form.Control type="text" placeholder="Kirsten Jones" />
        </Form.Group>
        <Form.Group as={Col} className="mb-2" id="company-name">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Apollo Event Consultants" />
        </Form.Group>
        <Form.Group as={Col} className="mb-2" id="planner-phone">
            <Form.Label>Planner Phone</Form.Label>
            <Form.Control type="tel" placeholder="07785 926164" />
        </Form.Group>
        <Form.Group as={Col} className="mb-2" id="planner-email">
            <Form.Label>Planner Email</Form.Label>
            <Form.Control type="email" placeholder="joanna@joannacarterflowers.co.uk" />
        </Form.Group>
</Row>

      </Form>
        </FormSection>
      </div>
      <div className="form-sections">
        <FormSection title="Notes">
          <FormGroup
            label="Notes"
            id="notes"
            type="textarea"
            value="Test to see if notes save correctly"
          />
        </FormSection>
      </div>
    </div>
  );
}

function FormSection({ title, children }) {
  return (
    <div className="form-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function FormGroup({ label, id, type = "text", value = "", options = [] }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type === "select" ? (
        <select id={id} defaultValue={value}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} id={id} defaultValue={value} />
      )}
    </div>
  );
}

export default Enquiry;
