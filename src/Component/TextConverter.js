import React, { useState } from 'react'

const TextConverter = () => {

    const [charCount, setCharCount] = useState();
    const [wordCount, setWordCount] = useState('');
    const [text, setText] = useState('');

    const changeHandler = (e) => {
        e.preventDefault();
        setCharCount(text.length + 1);
        setText(e.target.value);
        setWordCount(text.split(" ").length);
    }

    const uppercaseHandler = () => {
        let upper = text.toUpperCase();
        setText(upper);
    }

    const lowercaseHandler = () => {
        let lower = text.toLowerCase();
        setText(lower);
    }

    const clear = () => {
        setText('');
        setCharCount('');
        setWordCount('');
    }

    return (
        <>
            <div className="container vh-100 py-5">
            <div className='h2 text-info'>Write to convert a character upper/lower</div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="text" name='text' style={{ height: "100px" }} onChange={changeHandler} value={text}>
                    </textarea>
                    <label htmlFor="text">write here</label>
                </div>
                <div className='text-center'>
                    <button className='btn btn-secondary m-2' onClick={uppercaseHandler}>Upper Case</button>
                <button className='btn btn-warning m-2' onClick={lowercaseHandler}>Lower Case</button>
                <button className='btn btn-danger m-2' onClick={clear}>Clear</button>
                </div>
                
                <div>
                    <h2>Preview~ {text}</h2>
                    <h2>Count~ {charCount}</h2>
                    <h2>word~ {wordCount}</h2>
                </div>
            </div>

        </>
    )
}

export default TextConverter