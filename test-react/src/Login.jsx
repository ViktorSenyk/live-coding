import React from 'react';

export default function Login({ onLogin }) {
  return (
    <button className="login btn" onClick={() => onLogin(true)}>
      Login
    </button>
  );
}
