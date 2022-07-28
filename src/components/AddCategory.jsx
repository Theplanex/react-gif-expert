import { useState }from 'react'
import {PropTypes} from 'prop-types'
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
      <form onSubmit={onSubmit} aria-label="form">
      <input 
      type="text"
      placeholder='Buscar gifs'
      value={inputValue}
      onChange={OnInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,

}
