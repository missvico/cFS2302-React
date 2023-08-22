import Form from './components/Form'
import Alert from './components/Alert'

import {useState} from 'react'
import axios from 'axios'

function SendComments(){
    const [userData, setUserData] = useState({email:"", mobile:"", comments:"", occupation:"sofwareDev", updates: false })
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [dataMissing, setDataMissing] = useState(false)

    const handleChange= function(event){
        setSuccess(false)
        setError(false)
        setDataMissing(false)
        const property = event.target.id
        const value = property === "updates"? event.target.checked : event.target.value
        setUserData({...userData, [property]: value})

    }

    const handleSubmit = function(event){
        event.preventDefault()
        if(!(userData.email && userData.mobile && userData.comments)){
            setDataMissing(true)
            return
        }
        axios({
            method: 'POST',
            data: userData,
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(
            response => {
                setSuccess(true)
                setUserData({email:"", mobile:"", comments:"", occupation:"sofwareDev", updates: false })
            }
        ).catch(
            error => setError(true)
        )
    }
    return(
        <section>
            <h1>Send us a message!</h1>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} userData={userData}/>
            {dataMissing && <Alert type="warning" message="Por favor completa todos los campos antes de continuar"/>}
            {success && <Alert type="success" message="We have received your message successfully"/>}
            {error && <Alert type="danger" message="We have encountered an error, please try again later"/>}

        </section>
    )
}

export default SendComments;

