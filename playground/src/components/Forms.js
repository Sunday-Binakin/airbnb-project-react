import React from 'react'

const Forms = () => {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor:""
    })
    console.log(formData)
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                // [e.target.name]: e.target.value
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <form action="">
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <br />
            <br />
            <input
                type="email "
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <br />
            <br />
            <textarea
                value={formData.comments}
                name="comments"
                placeholder='comments'
                onChange={handleChange}
                cols="20"
                rows="3" />
            <br />
            <br />
            <input
                type="checkbox"
                name="isFriendly"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly </label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onchange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onchange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-Time</label>
                <br />
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onchange={handleChange}
                />
                <label htmlFor="full-time">Full Time</label>
                <br />

            </fieldset>
            <br />
            <br />
            <label htmlFor="favColor">what is your favorite Color</label>
            <br />
            <select 
                name="favColor"
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
              >
                <option value="">--chose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violent">Violenet</option>
            </select>
        </form>
    )
}

export default Forms