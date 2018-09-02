import React from "react";

export default props => [
    <h1 key='key1'>Bom dia {props.nome}</h1>,
    <h2 key='key2'>Ate Breve</h2>
]

// export default props => {
//   return (
//     <React.Fragment>
//       <h1>Bom dia {props.nome}</h1>
//       <h2>Ate Breve</h2>
//     </React.Fragment>
//   );
// };
