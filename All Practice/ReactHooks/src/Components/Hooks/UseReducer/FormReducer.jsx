import React, { useReducer, useState } from 'react'


const initialValue = {
    fname: '',
    age: '',
    email: '',
    mobile: '',
}

// Reducer Function
function reducerFunction(previousState, nextState) {
    return { ...previousState, ...nextState }
}

function FormReducer() {
    const [form, setForm] = useReducer(reducerFunction, initialValue)
    const [submittedData, setSubmittedData] = useState(initialValue);

    function handleFname(e) {
        setForm({ fname: e.target.value })
    }
    function handleAge(e) {
        setForm({ age: e.target.value })
    }
    function handleEmail(e) {
        setForm({ email: e.target.value })
    }
    function handleMobile(e) {
        setForm({ mobile: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (form.fname === '' && form.age === '' && form.email === '' && form.mobile === '') {
            console.log("please enter your details");
        } else {
            console.log("Form Submitted", form);
            setSubmittedData(form); // Set the submitted data after form submission
        }
    }

    return (
        <>
            <div className="form-container">
                <div className='form-card'>
                  <h2 className='text-center'>Use Reducer</h2>
                    <h2 className="form-title">User Information Form</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={form.fname}
                            onInput={handleFname}
                            placeholder='Enter Your Name'
                            className='form-input'
                        />
                        <input
                            type="number"
                            value={form.age}
                            onInput={handleAge}
                            placeholder='Enter Your Age'
                            className='form-input'
                        />
                        <input
                            type="email"
                            value={form.email}
                            onInput={handleEmail}
                            placeholder='Enter Your Email'
                            className='form-input'
                        />
                        <input
                            type="tel"
                            value={form.mobile}
                            onInput={handleMobile}
                            placeholder='Enter Your Mobile Number'
                            className='form-input'
                        />
                        <button type='submit' className='form-submit-btn'>Submit</button>
                    </form>
                </div>

                <div className='data-card'>
                    <h2 className="data-title">User Data</h2>
                    <p className="data-item"><span>Name:</span> {submittedData.fname || "N/A"}</p>
                    <p className="data-item"><span>Age:</span> {submittedData.age || "N/A"}</p>
                    <p className="data-item"><span>Email:</span> {submittedData.email || "N/A"}</p>
                    <p className="data-item"><span>Mobile:</span> {submittedData.mobile || "N/A"}</p>
                </div>
            </div>
        </>
    )
}

export default FormReducer;


// The useReducer Hook is similar to the useState Hook. 
// It allows for custom state logic. If you find yourself 
// keeping track of multiple pieces of state that rely on 
// complex logic, useReducer may be useful.