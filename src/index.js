import React from 'react'
import ReactDOM from 'react-dom'
import { Clock } from './utils/Main'

var render = ReactDOM.render
var root = document.querySelector('#root')

render(
  <Clock />,
  root
)