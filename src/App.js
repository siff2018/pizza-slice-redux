
import { useDispatch, useSelector } from 'react-redux';
import { addTopping } from './pizzaSlice';
import './App.css';

function App() {

  const pizza = useSelector( state => state.pizza);
  const dispatch = useDispatch(); 

  return (
    <div className="App">
      <header className="App-header">
     
    <h1>Pizza</h1>

    {pizza.toppings.map(topping => (
      <div key={topping}> {topping}
      </div>
    ))}

    <button onClick={() => dispatch(addTopping('pepperoni'))}>Add pepperoni</button>

      </header>
    </div>
  );
}

export default App;
