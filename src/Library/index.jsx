import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    control: base => ({
      ...base,
      maxWidth:"200px",
      minWidth:"200px",
    })
  };

const CustomSelect = () =>{
    return(
        <Select
         options={options}
         defaultValue={options[0]}
         theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25:'beige',
              primary50:'beige',
              primary: 'red',
            },
          })}
          styles={customStyles}
        />
    )
}

export default CustomSelect