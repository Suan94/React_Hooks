import React, { useState } from 'react';





export const Test = () => {


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    




    return (


        <div>
        <h1>Contador: {count}</h1>
        
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        
            <form>
            <label>
                Valor inicial:
                <input 
                type="number"
                value={count}
                onChange={e => setCount(Number(e.target.value))} 
                />
            </label>
            
            <input type="submit" value="Guardar" />
            </form>
        </div>


    );
};



  




