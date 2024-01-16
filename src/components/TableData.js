import React from 'react'
import { carts } from '../dummy/carts'

const TableData = () => {
  return (
    <div>
      <table className="table-auto border-2 border-gray-500">
        <thead className="border-black border-2">
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>

          {carts.map(({ title, quantity, price, id }) => {
            return <tr key={id}>
              <td>{title}</td>
              <td>{quantity}</td>
              <td>{price}</td>
            </tr>
          })}

        </tbody>
      </table>

    </div>
  )
}

export default TableData