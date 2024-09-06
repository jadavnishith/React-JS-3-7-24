// import React, { useState } from 'react'

// const initialValue = {
//     fname: '',
//     age: '',
//     email: '',
//     mobile: '',
// }

// function FormState() {
//     const [form, setForm] = useState(initialValue)
//     const [submittedData, setSubmittedData] = useState(null)

//     function handleFname(e) {
//         setForm({ ...form, fname: e.target.value })
//     }
//     function handleAge(e) {
//         setForm({ ...form, age: e.target.value })
//     }
//     function handleEmail(e) {
//         setForm({ ...form, email: e.target.value })
//     }
//     function handleMobile(e) {
//         setForm({ ...form, mobile: e.target.value })
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//         setSubmittedData(form)
//         console.log("Form Submitted", form)
//     }

//     return (
//         <>
//             <div className="form-container">
//                 <div className='form-card'>
//                 <h2 className='text-center'>Use State</h2>
//                     <h2 className="form-title">User Information Form</h2>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             value={form.fname}
//                             onInput={handleFname}
//                             placeholder='Enter Your Name'
//                             className='form-input'
//                         />
//                         <input
//                             type="number"
//                             value={form.age}
//                             onInput={handleAge}
//                             placeholder='Enter Your Age'
//                             className='form-input'
//                         />
//                         <input
//                             type="email"
//                             value={form.email}
//                             onInput={handleEmail}
//                             placeholder='Enter Your Email'
//                             className='form-input'
//                         />
//                         <input
//                             type="tel"
//                             value={form.mobile}
//                             onInput={handleMobile}
//                             placeholder='Enter Your Mobile Number'
//                             className='form-input'
//                         />
//                         <button type='submit' className='form-submit-btn'>Submit</button>
//                     </form>
//                 </div>

//                 {submittedData && (
//                     <div className='data-card'>
//                         <h2 className="data-title">User Data</h2>
//                         <p className="data-item"><span>Name:</span> {submittedData.fname || "N/A"}</p>
//                         <p className="data-item"><span>Age:</span> {submittedData.age || "N/A"}</p>
//                         <p className="data-item"><span>Email:</span> {submittedData.email || "N/A"}</p>
//                         <p className="data-item"><span>Mobile:</span> {submittedData.mobile || "N/A"}</p>
//                     </div>
//                 )}
//             </div>
//         </>
//     )
// }

// export default FormState

import React, { useState } from 'react'

const initialValue = {
    fname: '',
    age: '',
    email: '',
    mobile: '',
}

function FormState() {
    const [form, setForm] = useState(initialValue)
    const [submittedData, setSubmittedData] = useState(null)  // Initially null to hide data

    function handleFname(e) {
        setForm({ ...form, fname: e.target.value })
    }
    function handleAge(e) {
        setForm({ ...form, age: e.target.value })
    }
    function handleEmail(e) {
        setForm({ ...form, email: e.target.value })
    }
    function handleMobile(e) {
        setForm({ ...form, mobile: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSubmittedData(form)  // Show data only after submit
        console.log("Form Submitted", form)
    }

    return (
        <>
            <div className="form-container">
                <div className='form-card'>
                <h2 className='text-center'>Use State</h2>
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

                {submittedData ? (
                    <div className='data-card'>
                        <h2 className="data-title">User Data</h2>
                        <p className="data-item"><span>Name:</span> {submittedData.fname}</p>
                        <p className="data-item"><span>Age:</span> {submittedData.age}</p>
                        <p className="data-item"><span>Email:</span> {submittedData.email}</p>
                        <p className="data-item"><span>Mobile:</span> {submittedData.mobile}</p>
                    </div>
                ) : (
                    <div className='data-card'>
                        <h2 className="data-title">User Data</h2>
                        <p className="data-item"><span>Name:</span> N/A</p>
                        <p className="data-item"><span>Age:</span> N/A</p>
                        <p className="data-item"><span>Email:</span> N/A</p>
                        <p className="data-item"><span>Mobile:</span> N/A</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default FormState
