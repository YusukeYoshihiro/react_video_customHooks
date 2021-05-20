import React, {useState} from 'react';
import styled from 'styled-components';
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'

// styles
const SearchCtn = styled.div`
  display: flex;
  input{
    width:350px;
    outline: none;
    border-radius:3px;
    padding: 5px;
    @media screen and (min-width: 768px){
      width:450px;
    }
    @media screen and (min-width: 1024px){
      width:700px;
    }
  }
`
const Label = styled.label`
  border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
	-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;  /* 2 */
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;            /* 3 */
`

const SearchIcon = styled(SearchAlt)`
  color: #000;
  width: 30px;
  margin-right:10px;
`

// SearchBar Component by Custom Hooks
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  
  const onInputChange = (e) =>{
    setTerm(e.target.value);
  };

  // Children onFormSubmit
  const onSubmit = e =>{
    e.preventDefault();
    // To props Parent(App.js)'s onFormSubmit
    onFormSubmit(term)
  }
  
  return (
    <div >
      <form onSubmit={onSubmit} >
        <SearchCtn >
          <Label>Search Bar</Label>
          <input 
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder="Search Video"
          />
          <SearchIcon/>
        </SearchCtn>
      </form>
    </div>
  )
}
export default SearchBar
