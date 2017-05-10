import React from 'react';
import { Card } from './Card/Card';

export const CardGrid = ({ data = {}, faveClick }) => {

  return (
    <section className='card-grid'>
      {Object.keys(data).map((key, index) => {
        return (
          <Card key={index}
                id={index}
                data={data[key]}
                faveClick={faveClick}/>
        )
      })}
    </section>
  )
}
