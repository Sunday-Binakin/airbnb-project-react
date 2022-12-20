import React from 'react'

const BoxComponent = (props) => {
    const [on, setOn] = React.useState(props.on)

    const togglestate = () => {
        setOn(prevState => !prevState)
    }
    const styles = {
        backgroundColor: props.on ? 'black' : 'red'
    }
    return (
        <div className="box" style={styles} onClick={togglestate}></div>
    )
}

export default BoxComponent   