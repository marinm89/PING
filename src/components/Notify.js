import React from 'react';

export default function Notify() {
  return (
    <div>
      <form>
        <input type="email" pattern=".+@globex.com" required></input>
        <button>Notify Me</button>
      </form>
    </div>
  );
}
