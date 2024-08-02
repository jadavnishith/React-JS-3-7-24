// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function GridComplexExample() {
//   return (
//   <>
//     <h1 className='text-center mt-4'>Contact Us</h1>
//     <Form className='bg-dark bg-gradient py-3 px-3 text-white border border border-info-subtle border-2 rounded-5'>
//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" controlId="formGridAddress1">
//         <Form.Label>Address</Form.Label>
//         <Form.Control placeholder="1234 Main St" />
//       </Form.Group>

//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridCity">
//           <Form.Label>City</Form.Label>
//           <Form.Control />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridState">
//           <Form.Label className='font-weight-bold'>State</Form.Label>
//           <Form.Select defaultValue="Choose...">
//             <option>Choose...</option>
//             <option>Gujrat</option>
//             <option>Madhayapradesh</option>
//             <option>Maharastra</option>
//             <option>Goa</option>
//           </Form.Select>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Pincode</Form.Label>
//           <Form.Control />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" id="formGridCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Button variant="primary" type="submit" className='btn btn-info'>
//         Submit
//       </Button>
//     </Form>
//     </>
//   );
// }

// export default GridComplexExample;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <div className=" my-4 container">
     <h1 className='text-center mt-4'>Contact Us</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='bg-black bg-gradient py-3 px-3 text-white border border border-info-subtle border-2 rounded-5'>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Pincode</Form.Label>
          <Form.Control type="text" placeholder="Pincode" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Pincode.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" className='btn btn-info'>Submit form</Button>
    </Form>
    </div>
    </>
  );
}

export default FormExample;