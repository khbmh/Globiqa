import React from 'react';
import { Link } from 'react-router';

function MyActs() {
  return (
    <div className='mx-auto max-w-xl gap-8 lg:gap-16 flex justify-around *:btn *:btn-outline items-center'>
      <button>
        <Link to="added-visas">My Added visas</Link>
      </button>
      <button>
        <Link to="applied-visas">My visa Applications</Link>
      </button>
    </div>
  );
}

export default MyActs;
