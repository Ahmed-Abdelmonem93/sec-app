import React from 'react'
import  "./Maincontent.css";

export default function maincontent({pageName}) {
  return (
    <main>
    <h1 className="my-title">{pageName}</h1>
  </main>
  )
}
