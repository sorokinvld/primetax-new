import React from 'react'

function Table({data, headings, className, headClassName, rowClassName, cellClassName}) {
  return (
    <table className={className}>
      <thead className={headClassName}>
        <tr className={rowClassName}>
          {headings.map((heading) => (
            <th key={heading} className={cellClassName}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className={rowClassName}>
          {Object.values(data).map((detail) => (
            <td key={detail} className={cellClassName}>
              {detail}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table