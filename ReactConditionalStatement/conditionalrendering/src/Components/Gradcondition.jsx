import React from 'react'
import Grad from './Grad'

let userMark = null;
if(userMark === null){
    userMark = +prompt("Enter Your Marks Between( 0 - 100 )")

}

function Gradcondition() {

      const user = userMark;

    if (user >= 90 && user <= 100) {
        return <Grad userValue={user} userGrade={'A 😎'}></Grad>
    } else if (user >=70 && user <= 89){
        return <Grad userValue={user} userGrade={'B 😁'}></Grad>
    } else if (user >=50 && user <= 69){
        return <Grad userValue={user} userGrade={'C 😊'}></Grad>
    } else if (user > 35 && user <= 49){
        return <Grad userValue={user} userGrade={'D 😕'}></Grad>
    } else if (user >= 0 && user <= 35){
        return <Grad userValue={user} userGrade={"oop's You'r Fail 😭"}></Grad>
    } else {
        return alert('Invalid Marks Please Enter Your Marks in Integer Value e.g(1,23,45)')
    }
//   return (
//     <>
      
//     </>
//   )
}

export default Gradcondition
