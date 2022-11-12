import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {
  return (
    <div style={{textAlign:'left'}}>
    <Link to={'/controlpanel'}><button>All flight</button></Link><br />
    <Link to={'/controlpanel/sort'}><button>sort flights</button></Link><br />
    <Link to={'/controlpanel/add'}><button>add flight</button></Link><br />
    <Link to={'/controlpanel/delete'}><button>delete flight</button></Link><br />
    <Link to={'/'}><button onClick={()=>{props.setMenuFlag(false)}}>EXIT</button></Link> 
  </div>
  )
}
