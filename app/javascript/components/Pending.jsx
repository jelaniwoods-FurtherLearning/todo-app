import React from 'react';

const Pending = ({ pending }) => {
  return (
    <div>
      <h4>Pending</h4>
      {pending.map((todo, i) => {
        return (
          <div class="form-check" key={i}>
            <input class="form-check-input" type="checkbox" checked={todo.completed} value="" id={`checkbox${todo.id}`} />
            <label class="form-check-label" for={`checkbox${todo.id}`}>
              {todo.title}
            </label>
          </div>
        )
      })}
    </div>
  )
};

export default Pending;
