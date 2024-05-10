import React from 'react'
import { Link } from 'react-router-dom'

function Button(
  props: {  title: string, href:string,children?: React.ReactNode  } 

): React.ReactNode {
  return (
    <Link to={props.href} className="bg-white text-purple-700 font-bold py-2 px-4  hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
      {props.children || props.title}
    </Link>
  )
}

export default Button