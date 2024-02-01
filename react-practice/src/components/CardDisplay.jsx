import React from 'react';

function CardDisplay({ cardInfo }) {
  const { name, title, email, phone } = cardInfo;

  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{title}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default CardDisplay;