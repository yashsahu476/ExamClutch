import { useState } from 'react'

const calculateDays = (exams, days) => {
    days = parseInt(days)
    var dict = {};
    exams.map((exam) => (
        dict[exam.text] = parseInt(exam.diff) + parseInt(exam.score)
    ))
    var total = 0;
    for (var key in dict) {
        total = total + dict[key]
    }

    var retVal = {}
    for (var temp in dict) {
        retVal[temp] = Math.round(dict[temp] / total * days)
    }
    return retVal

}

const PrintResult = (results) => {
    var out = results.results;
    return (
        <>
        <h2 align='center'>Recommended Study Plan</h2><br />
        {
            Object.keys(out).map((key,index) => (
                <div className='exam' key={index}>
                    <h3>{key}</h3>
                    <p>recommend studying for {out[key]} days</p>
                </div>
            ))
        }
        </>
    )
}
