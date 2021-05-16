import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        number: null,
        question: ''
    })

    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = event => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        setErrors(validate(values))
        setSubmitted(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitted) {
            callback()
        }
    }, [errors])

    return { handleChange, handleSubmit, values, errors }
}

export default useForm