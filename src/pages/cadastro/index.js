import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Table } from "reactstrap";
import { cpfMask } from "../../utils/Masks/Cpf";

export default function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const [clientes, setClientes] = useState([]);

  async function buscar() {
    await fetch("./clients.json", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setClientes(json.data);
      });
  }

  function limparCampos() {
    setNome("");
    setCpf("");
    setEmail("");
    setLat("");
    setLng("");
  }

  useEffect(() => {
    buscar();
  }, []);

  function addCliente(event) {

    setClientes([
      ...clientes,
      {
        name: nome,
        cpf: cpf,
        email: email,
        lat: lat,
        lng: lng,
      },
    ]);
    limparCampos();
    event.preventDefault();
  }
  return (
    <S.Container>
      <S.DivTotal>
      <S.FormCadastro onSubmit={addCliente} >
        <h3>Cadastro de clientes</h3>
        <S.FormInput>
          <span>Nome:</span>
          <S.Input
            placeholder="João"
            value={nome}
            onChange={(t) => setNome(t.target.value)}
          />
        </S.FormInput>
        <S.FormInput>
          <span>CPF:</span>
          <S.Input
            placeholder="111.222.333-44"
            value={cpf}
            onChange={(t) => setCpf(cpfMask(t.target.value))}
          />
        </S.FormInput>
        <S.FormInput>
          <span>E-mail:</span>
          <S.Input
            placeholder="me@contrata.com"
            value={email}
            onChange={(t) => setEmail(t.target.value)}
          />
        </S.FormInput>
        <S.FormInput>
          <span>Latitude:</span>
          <S.Input
            placeholder="-77777"
            value={lat}
            onChange={(t) => setLat(t.target.value)}
          />
        </S.FormInput>
        <S.FormInput>
          <span>Longitude:</span>
          <S.Input
            placeholder="55555"
            value={lng}
            onChange={(t) => setLng(t.target.value)}
          />
        </S.FormInput>
        <S.Button type="submit" value="submit">Cadastrar</S.Button>
      </S.FormCadastro>
      <S.TableView>
        <Table>
          <thead>
            <tr style={{color: '#EC6726'}}>
              <th>Nome</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((data) => (
              <tr key={data.name} style={{color: '#fff'}}>
                <td>{data.name}</td>
                <td>{data.cpf}</td>
                <td>{data.email}</td>
                <td>{data.lat}</td>
                <td>{data.lng}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </S.TableView>
      </S.DivTotal>
    </S.Container>
  );
}

// import React, { useState, useEffect } from "react";
// import * as S from "./styles";
// import { Table } from "reactstrap";

// export default function App() {
//   const [nome, setNome] = useState("");
//   const [cpf, setCpf] = useState("");
//   const [email, setEmail] = useState("");
//   const [lat, setLat] = useState("");
//   const [lng, setLng] = useState("");

//   const [cli1, setCli1] = useState([]);

//   const cpfMask = (value) => {
//     return value
//       .replace(/\D/g, "")
//       .replace(/(\d{3})(\d)/, "$1.$2")
//       .replace(/(\d{3})(\d)/, "$1.$2")
//       .replace(/(\d{3})(\d{1,2})/, "$1-$2")
//       .replace(/(-\d{2})\d+?$/, "$1");
//   };

//   async function buscar() {
//     await fetch("./clients.json", {
//       headers: {
//         accept: "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         setCli1(json.data);
//       });
//   }

//   function limparCampos() {
//     setNome("");
//     setCpf("");
//     setEmail("");
//     setLat("");
//     setLng("");
//   }

//   useEffect(() => {
//     buscar();
//   }, []);

//   function addCliente() {
//     setCli1([
//       ...cli1,
//       {
//         name: nome,
//         cpf: cpf,
//         email: email,
//         lat: lat,
//         lng: lng,
//       },
//     ]);
//     limparCampos();
//   }
//   return (
//     <S.Container>

//       <S.FormCadastro>
//       <h3>Cadastro de clientes</h3>
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
//             onChange={(t) => setCpf(cpfMask(t.target.value))}
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
//         <S.Button onClick={() => addCliente()}>Cadastrar</S.Button>
//       </S.FormCadastro>
//       <S.TableView>
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
//             {cli1.map((data) => (
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
//       </S.TableView>
//     </S.Container>
//   );
// }


// import React, { useState, useEffect } from "react";
// import * as S from "./styles";
// import { Table } from "reactstrap";
// import { cpfMask } from "../../utils/Masks/Cpf";

// export default function App() {
//   const [nome, setNome] = useState("");
//   const [cpf, setCpf] = useState("");
//   const [email, setEmail] = useState("");
//   const [lat, setLat] = useState("");
//   const [lng, setLng] = useState("");

//   const [clientes, setClientes] = useState([]);

//   async function buscar() {
//     await fetch("./clients.json", {
//       headers: {
//         accept: "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         setClientes(json.data);
//       });
//   }

//   function limparCampos() {
//     setNome("");
//     setCpf("");
//     setEmail("");
//     setLat("");
//     setLng("");
//   }

//   useEffect(() => {
//     buscar();
//   }, []);

//   function addCliente() {
//     setClientes([
//       ...clientes,
//       {
//         name: nome,
//         cpf: cpf,
//         email: email,
//         lat: lat,
//         lng: lng,
//       },
//     ]);
//     limparCampos();
//   }
//   return (
//     <S.Container>
//       <S.DivTotal>
//       <S.FormCadastro>
//         <h3>Cadastro de clientes</h3>
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
//             onChange={(t) => setCpf(cpfMask(t.target.value))}
//           />
//         </S.FormInput>
//         <S.FormInput>
//           <span>E-mail:</span>
//           <S.Input
//             placeholder="me@contrata.com"
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
//         <S.Button onClick={() => addCliente()}>Cadastrar</S.Button>
//       </S.FormCadastro>
//       <S.TableView>
//         <Table>
//           <thead>
//             <tr style={{color: '#EC6726'}}>
//               <th>Nome</th>
//               <th>CPF</th>
//               <th>E-mail</th>
//               <th>Latitude</th>
//               <th>Longitude</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clientes.map((data) => (
//               <tr key={data.name} style={{color: '#fff'}}>
//                 <td>{data.name}</td>
//                 <td>{data.cpf}</td>
//                 <td>{data.email}</td>
//                 <td>{data.lat}</td>
//                 <td>{data.lng}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </S.TableView>
//       </S.DivTotal>
//     </S.Container>
//   );
// }

// // import React, { useState, useEffect } from "react";
// // import * as S from "./styles";
// // import { Table } from "reactstrap";

// // export default function App() {
// //   const [nome, setNome] = useState("");
// //   const [cpf, setCpf] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [lat, setLat] = useState("");
// //   const [lng, setLng] = useState("");

// //   const [cli1, setCli1] = useState([]);

// //   const cpfMask = (value) => {
// //     return value
// //       .replace(/\D/g, "")
// //       .replace(/(\d{3})(\d)/, "$1.$2")
// //       .replace(/(\d{3})(\d)/, "$1.$2")
// //       .replace(/(\d{3})(\d{1,2})/, "$1-$2")
// //       .replace(/(-\d{2})\d+?$/, "$1");
// //   };

// //   async function buscar() {
// //     await fetch("./clients.json", {
// //       headers: {
// //         accept: "application/json",
// //       },
// //     })
// //       .then((response) => response.json())
// //       .then((json) => {
// //         setCli1(json.data);
// //       });
// //   }

// //   function limparCampos() {
// //     setNome("");
// //     setCpf("");
// //     setEmail("");
// //     setLat("");
// //     setLng("");
// //   }

// //   useEffect(() => {
// //     buscar();
// //   }, []);

// //   function addCliente() {
// //     setCli1([
// //       ...cli1,
// //       {
// //         name: nome,
// //         cpf: cpf,
// //         email: email,
// //         lat: lat,
// //         lng: lng,
// //       },
// //     ]);
// //     limparCampos();
// //   }
// //   return (
// //     <S.Container>

// //       <S.FormCadastro>
// //       <h3>Cadastro de clientes</h3>
// //         <S.FormInput>
// //           <span>Nome:</span>
// //           <S.Input
// //             placeholder="João"
// //             value={nome}
// //             onChange={(t) => setNome(t.target.value)}
// //           />
// //         </S.FormInput>
// //         <S.FormInput>
// //           <span>CPF:</span>
// //           <S.Input
// //             placeholder="111.222.333-44"
// //             value={cpf}
// //             onChange={(t) => setCpf(cpfMask(t.target.value))}
// //           />
// //         </S.FormInput>
// //         <S.FormInput>
// //           <span>E-mail:</span>
// //           <S.Input
// //             placeholder="celso@mecontratem.com"
// //             value={email}
// //             onChange={(t) => setEmail(t.target.value)}
// //           />
// //         </S.FormInput>
// //         <S.FormInput>
// //           <span>Latitude:</span>
// //           <S.Input
// //             placeholder="-77777"
// //             value={lat}
// //             onChange={(t) => setLat(t.target.value)}
// //           />
// //         </S.FormInput>
// //         <S.FormInput>
// //           <span>Longitude:</span>
// //           <S.Input
// //             placeholder="55555"
// //             value={lng}
// //             onChange={(t) => setLng(t.target.value)}
// //           />
// //         </S.FormInput>
// //         <S.Button onClick={() => addCliente()}>Cadastrar</S.Button>
// //       </S.FormCadastro>
// //       <S.TableView>
// //         <Table>
// //           <thead>
// //             <tr>
// //               <th>Nome</th>
// //               <th>CPF</th>
// //               <th>E-mail</th>
// //               <th>Latitude</th>
// //               <th>Longitude</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {cli1.map((data) => (
// //               <tr key={data.name}>
// //                 <td>{data.name}</td>
// //                 <td>{data.cpf}</td>
// //                 <td>{data.email}</td>
// //                 <td>{data.lat}</td>
// //                 <td>{data.lng}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </Table>
// //       </S.TableView>
// //     </S.Container>
// //   );
// // }
