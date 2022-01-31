import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('')
  const alt = altura / 100;

  function calcular(){
    const lbl = document.querySelector("#resultado");
    const imc = peso / (alt * alt);
    
    if(imc < 18.5){
      setResultado("🆘 Seu IMC: "+ imc.toFixed(1) + " 🆘 Você está abaixo do peso!");
    }else if(imc >= 18.5 && imc < 24.9){
      setResultado("✅ Seu IMC: "+ imc.toFixed(1) + " ✅ Você está com o peso ideal!");
    }else if(imc >= 24.9 && imc < 30){
      setResultado("🆘 Seu IMC: "+ imc.toFixed(1) + " 🆘 Você está acima do peso!");
    }else if(imc >= 30){
      setResultado("🆘 Seu IMC: "+ imc.toFixed(1) + " 🆘 Cuidado, você está obeso!");
    }else{
      setResultado("ERROR: Você deve digitar algum valor válido para peso e altura");
    }

    lbl.classList.remove("disabled");
  }

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular o seu IMC</span>
      <input type="number" value={ peso } onChange={ (e) => setPeso(e.target.value) } placeholder='Digite seu peso em Kg... Ex: 90'/>
      <input type="number" value={ altura } onChange={ (e) => setAltura(e.target.value) } placeholder='Digite sua altura em cm... Ex: 175'/>
      <button onClick={calcular}>Calcular</button>
      <label id='resultado' className='disabled'>{ resultado }</label>
      <p>Desenvolvido por Wesley Jacques ♥</p>
    </div>
  );
}

export default App;
