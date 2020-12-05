import React from 'react';
import ListChildren from './ListChildren'

function List() {
  return (
    <div className="list">
      <ul>
        <li><ListChildren napis="jestem w lisicie"></ListChildren></li>
        <li><ListChildren napis="jestem w lisicie"></ListChildren></li>
        <li><ListChildren napis="jestem w lisicie"></ListChildren></li>
        <li><ListChildren napis="jestem w lisicie"></ListChildren></li>
      </ul>
    </div>
  )

}

export default List