
import React from 'react'
import Cadastro from './pages/cadastro'

export default function App() {
  return (
    <div >
      <Cadastro/>
    </div>
  )
}

// import React, { useState } from "react";
// import * as S from "./styles";
// import { Button, Table } from "reactstrap";
// import clientes from "./clientes";

// export default function App() {
//   const [nome, setNome] = useState("");
//   const [cpf, setCpf] = useState("");
//   const [email, setEmail] = useState("");
//   const [lat, setLat] = useState("");
//   const [lng, setLng] = useState("");

//   const [cli, setCli] = useState([]);

//   function addCliente(){
//     setCli([...cli,{
//       name: nome,
//       cpf: cpf,
//       email: email,
//       lat: lat,
//       lng: lng
//     }]
//     )

//     console.log(clientes);
//   }
//   return (
//     <S.Container>
//       <h1>Cadastro de clientes</h1>

//       <S.FormCadastro>
//         <S.FormInput>
//           <span>Nome:</span>
//           <S.Input
//             placeholder="João"
//             value={nome}
//             onChange={(t) => setNome(t.target.value)}
//           />
//         </S.FormInput>
//         <S.FormInput>
//           <span>CPF:</span>
//           <S.Input
//             placeholder="111.222.333-44"
//             value={cpf}
//             onChange={(t) => setCpf(t.target.value)}
//           />
//         </S.FormInput>
//         <S.FormInput>
//           <span>E-mail:</span>
//           <S.Input
//             placeholder="celso@mecontratem.com"
//             value={email}
//             onChange={(t) => setEmail(t.target.value)}
//           />
//         </S.FormInput>
//         <S.FormInput>
//           <span>Latitude:</span>
//           <S.Input
//             placeholder="-77777"
//             value={lat}
//             onChange={(t) => setLat(t.target.value)}
//           />
//         </S.FormInput>
//         <S.FormInput>
//           <span>Longitude:</span>
//           <S.Input
//             placeholder="55555"
//             value={lng}
//             onChange={(t) => setLng(t.target.value)}
//           />
//         </S.FormInput>
//         <S.Button onClick={() => addCliente()}>
//           Cadastrar
//         </S.Button>
//       </S.FormCadastro>
//       <div>
//         <Table>
//           <thead>
//             <tr>
//               <th>Nome</th>
//               <th>CPF</th>
//               <th>E-mail</th>
//               <th>Latitude</th>
//               <th>Longitude</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cli.map((data) => (
//               <tr key={data.name}>
//                 <td>{data.name}</td>
//                 <td>{data.cpf}</td>
//                 <td>{data.email}</td>
//                 <td>{data.lat}</td>
//                 <td>{data.lng}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </S.Container>
//   );
// }
