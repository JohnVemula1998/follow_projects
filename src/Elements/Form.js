import "./FormStyles.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea name="" id=""  rows="6" placeholder="Type Your message here" ></textarea>
            <label htmlFor="" className="btn" style={{textAlign:"center"}}>Submit</label>
        </form>

    </div>
  )
}

export default Form