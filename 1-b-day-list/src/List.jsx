import React from 'react';

function List(props) {
  const people = props.people;

  function renderPerson(person) {
    const { id, name, age, image } = person;

    return (
      <article key={id} className='person'>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    );
  }

  return <>{people.map(renderPerson)}</>;
}

export default List;