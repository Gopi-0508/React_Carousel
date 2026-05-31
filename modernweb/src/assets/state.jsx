import React, {useState} from 'react';
function EgState() {
    const [count, setCount] = useState(0);
    return(
        <>
        <h1>{count}</h1>
        <input type="button" value="Click me!" onClick={() => setCount(count + 1)} />
        </>
    );
}
export default EgState;