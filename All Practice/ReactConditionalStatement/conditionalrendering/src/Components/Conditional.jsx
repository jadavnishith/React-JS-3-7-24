import React from 'react'
import Drive from './Drive';

function Conditional() {

    const user = 10;
    if (user > 18) {
        return <Drive age={user} allow="can"/>
    } else {
        return <Drive age={user} allow="can't" />
    }
//   return (
//     <>
      
//     </>
//   )
}

export default Conditional
