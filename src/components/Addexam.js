import { useState } from 'react'

const AddExam = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [score, setScore] = useState('')
    const [diff, setDiff] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add an exam')
            return
        } else {
            alert('Successfully submitted')
        }

        onAdd({ text, score, diff, day, reminder })

        setText('')
        setScore('')
        setDiff('')
        setDay('')
        setReminder('')
    }
