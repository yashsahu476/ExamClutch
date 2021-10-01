import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import AddExam from './components/AddExam'
import AddPlan from './components/AddPlan'
import Footer from './components/Footer'

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

  // Add Exam
  const addExam = async (exam) => {
    const res = await fetch('http://localhost:5000/exams', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(exam),
    })

    const data = await res.json()
    
    setExams([...exams, data])
  }

  // return (
  //   <Router>
  //     <div className="container">
  //       <Header onAdd={() => setShowAddExam(!showAddExam)} 
  //       showAdd={showAddExam} />
  //       <AddPlan exams={exams} />
  //     </div>
  //   </Router>
  // );

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddExam(!showAddExam)} 
        showAdd={showAddExam} />
        {showAddExam && <AddExam onAdd={addExam} />}
        
        <AddPlan exams={exams} />
        {<Route path='/about' component={About} />}
        {<Footer /> }
      </div>
    </Router>
  );
}

export default App;
