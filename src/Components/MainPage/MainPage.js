import React, { useState } from 'react';
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const [nome, setNome] = useState("") 
  const [idade, setIdade] = useState("")
  const [estadoCivil, setEstadoCivil] = useState("")
  const [email, setEmail] = useState ("")
  const [senha, setSenha] = useState("")

  const alterarNome = (event) => {
    setNome(event.target.value)
  }

  const alterarIdade = (event) => {
    setIdade(event.target.value)
  }

  const alterarEstadoCivil = (event) => {
    setEstadoCivil(event.target.value)
  }

  const limparInputs = (event) => {
    event.preventDefault()
      setNome("")
      setIdade("")
      setEstadoCivil("")
      setEmail("")
      setSenha("")
  };
  
  const alterarEmail = (event) => {
    setEmail(event.target.value)
  }

  const alterarSenha = (event) => {
    setSenha(event.target.value)
  }
  console.log(nome, idade, estadoCivil, email, senha)

   return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={alterarNome}/>
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={alterarIdade}/>
        </label>
        <label>
          Estado civil:
          <br/>
          <select value={estadoCivil} onChange={alterarEstadoCivil}>
            <option>Nenhum</option>
            <option>Solteiro(a)</option>
            <option>Casado(a)</option>
            <option>Viúvo(a)</option>
            <option>Divorciado(a)</option>
          </select>
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={alterarEmail}/>
        </label>
        <br/>
        <label>
          Senha:
          <Input value={senha} onChange={alterarSenha}/>
        </label>
        <button onClick={limparInputs}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
   }
export default MainPage
