import React, { useState } from 'react';


function Contador(){


   const [cont, setCont] = useState(1);
   const incremento = () => setCont( cont +1);
   const decremento = () => setCont( cont -1);


   return (
       <div>
           <div><h1>{cont}</h1></div>
           <button onClick={incremento}>+</button>
           <button onClick={decremento}>-</button>
       </div>


   );
}


export default Contador;