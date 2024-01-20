
import './App.css'
import Button from './components/Button'
import ButtonBox from './components/ButtonBox'
import Screen from './components/Screen'
import Wrapper from './components/Wrapper'
import CalcProvider from './context/CalcContext'

const btnValues = [
  ["c", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]

function App() {


  return (
    <>
    <CalcProvider>
      <Wrapper>
        <Screen></Screen>
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            ></Button>
          ))}
        </ButtonBox>
      </Wrapper>
      </CalcProvider>
    </>
  )
}

export default App
