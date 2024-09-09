import React from 'react'
import { Link } from "react-router-dom";

const Button = ({name,link,onclick}) => {
  return (
    <div>
        <Link to={link}>
      <button onClick={onclick} className="px-10 py-6 mt-10 text-3xl bg-black text-white w-40 rounded-xl">
        {name}
      </button>
      </Link>
    </div>
  )
}

export default Button
