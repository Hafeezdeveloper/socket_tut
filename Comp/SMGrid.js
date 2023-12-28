import React from 'react'

const SMGrid = (props) => {
    let { data , cols } = props

  return (
    <div>   
        {data && Array.isArray(data) && (
            <table>
                <thead>
                    <tr>
                        {cols.map( (x,i) =>{
                            return(
                                <th key={i}>{x.name}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map( (x,i) =>(
                        <tr key={i}>
                            {cols.map( (e,ind) =>{
                                return(
                                    <td key={ind}>{e.displayField ? e.displayField(x) : x[e.key] }</td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default SMGrid

