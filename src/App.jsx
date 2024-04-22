import './App.css'
import Counter from './Counter'
import ModifiedCounter from './ModifiedCounter'
import SpreadSyntax from './SpreadSyntax'
import SubjectList from './SubjectList'
import Ternary from './Ternary'
import TempConverter from './TempConverter'

const subjectList = 
[ {"code": "CMSC12", "desc": "Introduction to Computer Science"},
  {"code": "MATH27","desc": "Calculus II"},
  {"code": "STAT101","desc": "Introduction to Statistics"}
]

function App() {
  return (
    <>
    {/* <Counter val = {10} /> */}
    {/* <SpreadSyntax/> */}
    {/* <SubjectList list = {subjectList}/> */}
    {/* <Ternary/> */}
    <TempConverter/>
    </>
  )
}

export default App
