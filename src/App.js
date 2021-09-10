import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import AddExam from './components/AddExam'
import AddPlan from './components/AddPlan'

const App = () => {
  const [showAddExam, setShowAddExam] = useState(false)
  const [exams, setExams] = useState([])

  useEffect(() => {
    const getExams = async() => {
      const examsFromServer = await fetchExams()
      setExams(examsFromServer)
    }

    getExams()
  }, [])

  // Fetch Exams
  const fetchExams = async() => {
    const res = await fetch('http://localhost:5000/exams')
    const data = await res.json()

    return data
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddExam(!showAddExam)} 
        showAdd={showAddExam} />
        <AddPlan exams={exams} />
      </div>
    </Router>
  );
}

export default App;