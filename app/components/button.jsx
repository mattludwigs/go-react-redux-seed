import React from 'react';

export const Button = props => {
  return <button className={props.classes.join(' ')} value={props.value || 'Submit'}></button>
}
