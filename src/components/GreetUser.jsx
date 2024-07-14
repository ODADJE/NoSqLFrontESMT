import React from 'react';

function GreetUser({ name }) {
  return (
    <div className="border-b pb-7 mb border-base-300 flex flex-col flex-wrap">
      <h2 className="text-2xl flex flex-wrap">
        <span className="text-primary">Welcome,</span>
        &nbsp;{name}
      </h2>
      <p className="text-base-content/65 text-md">Here's your dashboard</p>
    </div>
  );
}

export default GreetUser;
