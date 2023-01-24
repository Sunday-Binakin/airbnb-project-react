import React from 'react'

const Form = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        joinedNewsLetter: true
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked :  value
        }))
console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div className='form--container' onSubmit={handleSubmit}>
            <form action="">
                <input type="email"
                    placeholder='Email Address'
                    className='form--input'
                    name='email' 
                        value={formData.email}
                    />
                <input type="password"
                    placeholder='Password'
                    className='form--input'
                    name='password'
                    value={formData.password}
                     />

                <input type="password"
                    placeholder='Confirm Password'
                    className='form--input'
                    name='confirmPassword' 
                        value={formData.confirmPassword}
                    />
                <div className='form--marketing'>
                    <input type="checkbox"
                        name="joinedNewsLetter"
                        id="okayToEmail"
                        onChange={handleChange}
                        checked={FormData.joinedNewsLetter} />
                    <label htmlFor="okayTpEmail">I want to join the newsletter</label>

                </div>
                <button type="submit" className='form--submit'>Sign up</button>
            </form>
        </div>
    )
}

export default Form