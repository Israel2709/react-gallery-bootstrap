import React, { useState } from 'react'
import "./style.css"

function DynamicLabelInput(){
    const [ hasContent, setHasContent ] = useState( false )
    const [ isFocused, setIsFocused ] = useState( false )
    const [ hasError, setHasError ] = useState( false )
    const [ inputValue, setInputValue ] = useState( "" )

    const validateInput = () => {
        console.log(inputValue)
        if( inputValue === "with error"){
            console.log("with error")
            setHasError( true )
        }
    }

    const handleFocus = () => {
        setIsFocused( true )
    }

    const handleBlur =  event  => {
        let value = event.target.value
        setInputValue( value )
        setIsFocused( false )
        validateInput()
    }

    const handleChange = event => {
        let value = event.target.value
        setInputValue( value )
    }

    return(
        <div className={`custom-form-group ${isFocused ? 'has-focus': ''} ${hasError ? 'has-error':''} ${inputValue !=="" ? "has-content":""}`}>
            <label>The Label</label>
            <input 
                type="text" 
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                onChange={ handleChange }
            ></input>
            {
                hasError ? <p className="text-danger">Error Message</p> : null
            }
        </div>
    )
}

export default DynamicLabelInput