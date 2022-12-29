import React, { useState } from 'react'

const Home = () => {

  const [money,setMoney]=useState(100);
  const [amount,setAmount]=useState(0);
  const [show,setShow]=useState(false);
  const [amount2,setAmount2]=useState(0);
  const addMoney=(amount)=>{
    setMoney(money+amount);
  };
  const removeMoney=(amount)=>{
    if(money-amount<0)
    {
      alert('not enough money')
    }
    else
    setMoney(money-amount);
  };
  return (
    <div className='cont'>
      <h1 style={{color:'white'}}>Welcome to Bank </h1>
          <button className='btn2' onClick={()=>setShow(!show)}>Request Balance</button>
        <h3 style={{color:'white'}}>{show && 'Your Account Balance is '+ money}</h3>
        
      <div>
        
      <input type='number' onChange={(e)=>{setAmount(e.target.value)}}/>
        <button className='btn2' onClick={()=>removeMoney(amount)}>Withdraw Money</button>
        </div>
        <div>
        <input type='number' onChange={(e)=>{setAmount2(e.target.value)}}/>
        <button className='btn2'  onClick={()=>addMoney(+amount2)}>Deposit Money</button>
        </div>
    
        
        
    </div>
  )
}

export default Home;