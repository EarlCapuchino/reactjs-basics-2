import React from 'react'

export default function SpreadSyntax() {
    const obj = () => {
        const obj1 = {a:2}
        const obj2 = {b:3}
    
        const obj3 = {...obj1, x:2, obj2}
        obj1.a = 4
        obj2.b = 5
        console.log(obj3)
    }
  return (
    <div>SpreadSyntax {obj()}</div>
  )
}
