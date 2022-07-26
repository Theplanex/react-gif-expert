import { useState }from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [ inputValue, setInputValue ]  = useState('')

  const OnInputChange = ({ target }) => {
    setInputValue(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const clearInputValue = inputValue.trim();
    if( clearInputValue <= 1) return;
    onNewCategory(clearInputValue);
    setInputValue('');

  }
return (
      <form onSubmit={onSubmit}>
      <input 
      type="text"
      placeholder='Buscar gifs'
      value={inputValue}
      onChange={OnInputChange}
      />
    </form>
  )
}
