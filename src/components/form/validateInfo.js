export default function validateInfo(values) {
    let errors = {}
    let isValid = true 
    let pattern = new RegExp(/^[0-9\b]+$/)

    if (!values.name.trim()) {
        errors.name = 'Name required'
    } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.name = 'Enter a valid name'
    }

    if (!values.number) {
        errors.number = 'Number required'
    } else if (!pattern.test(values.number.trim())) {
        isValid = false
        errors.number = 'Enter numbers only'
    } else if (!values.numer.length != 10) {
        isValid = false
        errors.number = 'Enter a valid number'
    }

    if (!values.question) {
        errors.question = 'Question is required'
    } else if (values.question.length > 50) {
        errors.question = 'Max characters exceeded'
    }
    
    return errors
}