import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Warcraft')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit} aria-label='form'>
                <input type="text" placeholder='buscar gifs' value={inputValue} onChange={onInputChange} />
            </form>
        </>
    )
}
