import React from 'react';
function SearchInput({onSubmit}){
    const [input,setInput]=React.useState("");
    
    const handleChange=(e)=>{
        setInput(e.target.value);
    };

    console.log("input",input);
    return (
        <form>
            <input
            type="text"
            placeholder="github 검색"
            value={input}
            onChange={handleChange}
            />
        </form>
    );
}

export default SearchInput;