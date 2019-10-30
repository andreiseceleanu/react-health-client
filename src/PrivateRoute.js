import { Route, Redirect } from 'react-router-dom';
import React from 'react'

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={(props)=>(
        localStorage.getItem("tokenString")!==null ? <Component {...props}/> 
        : <Redirect to='/loginform'/>
      )
    }/>
  )

  export default PrivateRoute;