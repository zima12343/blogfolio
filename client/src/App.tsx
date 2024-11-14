import './App.css'
import Button from './ui_components/Buttons/Button/Button'
import UserButton from './ui_components/Buttons/UserButton/UserButton'

function App() {

  return (
   <>
    <Button type={'primary'} isActive={true} title={'Кнопка 1'} onButtonClick={function (): void {
        throw new Error('Function not implemented.')
      } } ></Button>
      <Button type={'default'} isActive={false} title={'Кнопка 2'} onButtonClick={function (): void {
        throw new Error('Function not implemented.')
      } } ></Button>
       <Button type={'warning'} isActive={false} title={'Кнопка 2'} onButtonClick={function (): void {
        throw new Error('Function not implemented.')
      } } ></Button>

      <UserButton userName='Ivanov Petr'></UserButton>
   </>
  )
}

export default App
