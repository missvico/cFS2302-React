
import Button from './components/Button'
import Number from'./components/Number'
import {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0)


    const handleAdd = function(event){
        setCount(count+1)
    }

    const handleSubs = function(event){
        setCount(count-1)
    }
    return(
        <section>
            <h1>Contador</h1>
            <Button handleClick={handleSubs} symbol={"-"}/>
            <Number count={count}/>
            <Button  handleClick={handleAdd} symbol={"+"}/>
        </section>
    )
};

export default Counter;