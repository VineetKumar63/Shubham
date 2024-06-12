import React from "react";
import Form from "react-bootstrap/Form";
import "../Styles/enquiryForm.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
function Enquiry() {
  return (
    <div className="enquiry-page">
      <div className="enquiry-nav card">
        <Row>
          <Col>
            <label htmlFor="enquiry-form">Enquiry Form:</label>
            <select id="enquiry-form" className="mx-2">
              <option>Wedding</option>
            </select>
          </Col>
          <Col>
            <label htmlFor="status">Status: </label>
            <select id="status" className="mx-2">
              <option>Enquiry</option>
            </select>
            <button>Save</button>
          </Col>
        </Row>
      </div>
      <div className="client-details">
        <Form className="form-sections">
          <FormSection title="Client Details">
            <Form.Group className="mb-3" id="client-name">
              <SubHeading title="Client's Name" />
              <Form.Control type="text" placeholder="Fiona Harper" />
            </Form.Group>
            <Form.Group className="mb-3" id="client-email">
              <SubHeading title="Client's Email Address" />
              <Form.Control type="email" placeholder="example@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" id="client-phone">
              <SubHeading title="Client's Mobile Phone" />
              <Form.Control placeholder="+000 111 222 333" type="mob" />
            </Form.Group>
          </FormSection>
          <FormSection title="Event Details">
            <Row>
              <Col>
                <SubHeading title="Event" />
                <Form.Select className="mb-3" id="event">
                  <option value="1">Wedding </option>
                  <option value="2">Wedding 2</option>
                  <option value="3">Wedding 3</option>
                </Form.Select>
              </Col>
              <Form.Group as={Col} className="mb-3" id="colour-scheme">
                <SubHeading title="Colour Scheme" />
                <Form.Control placeholder="Green's & Whites" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" id="event-date">
                <SubHeading title="Event Date" />
                <Form.Control type="date" placeholder="2024-06-05" />
              </Form.Group>
              <Form.Group as={Col} id="guest-numbers" className="mb-3">
                <SubHeading title="Guest numbers approx." />
                <Form.Control placeholder="110" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" id="enquiry-date">
                <SubHeading title="Enquiry Date" />
                <Form.Control type="date" placeholder="2024-06-05" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" id="budget">
                <SubHeading title="Budget approx." />
                <Form.Control placeholder="2400" />
              </Form.Group>
            </Row>
          </FormSection>
        </Form>
      </div>
      <div className="venue-sections">
        <Form>
          <FormSection title="Venue Details">
            <Row>
              <Col>
                <Form.Group as={Col} id="venue-a" className="mb-2">
                  <SubHeading title="Venue A" />
                  <Form.Control placeholder="Caswell House" type="text" />
                </Form.Group>
                <Row>
                  <Form.Group as={Col} className="mb-2" id="venue-a-phone">
                    <SubHeading title="Venue A Phone" />
                    <Form.Control type="tel" placeholder="01865 858638" />
                  </Form.Group>
                  <Form.Group as={Col} id="venue-a-contact" className="mb-2">
                    <SubHeading title="Venue A" />
                    <Form.Control type="tel" placeholder="Kirsten Jones" />
                  </Form.Group>
                </Row>
              </Col>
              <Col>
                <Form.Group as={Col} className="mb-2" id="venue-b">
                  <SubHeading title="Venue B" />
                  <Form.Control placeholder="Buckingham Palace" type="text" />
                </Form.Group>
                <Row>
                  <Form.Group as={Col} className="mb-2" id="venue-b-phone">
                    <SubHeading title="Venue B Phone" />
                    <Form.Control placeholder="OX10 7DX" type="tel" />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-2" id="venue-b-contact">
                    <SubHeading title="Venue B Contact" />
                    <Form.Control
                      type="tel"
                      placeholder="Rupert Maitland Titterton"
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
                <SubHeading title="Planner Name" />
                <Form.Control type="text" placeholder="Kirsten Jones" />
              </Form.Group>
              <Form.Group as={Col} className="mb-2" id="company-name">
                <SubHeading title="Company Name" />
                <Form.Control
                  type="text"
                  placeholder="Apollo Event Consultants"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-2" id="planner-phone">
                <SubHeading title="Planner Phone" />
                <Form.Control type="tel" placeholder="07785 926164" />
              </Form.Group>
              <Form.Group as={Col} className="mb-2" id="planner-email">
                <SubHeading title="Planner Email" />
                <Form.Control
                  type="email"
                  placeholder="joanna@joannacarterflowers.co.uk"
                />
              </Form.Group>
            </Row>
          </Form>
        </FormSection>
      </div>
      <div className="form-sections">
        <FormSection title="Notes">
          <Form.Control 
            placeholder="Test to see if notes save correctly"
            id="notes"
          />
        </FormSection>
      </div>
    </div>
  );
}

function FormSection({ title, children }) {
  return (
    <div className="form-section">
      <h5>{title}</h5>
      <hr className="mb-2" />
      {children}
    </div>
  );
}

const SubHeading = ({ title }) => {
  return (
    <>
      <label className="subHeading">{title}</label>
    </>
  );
};
export default Enquiry;
