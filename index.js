import 'babel/polyfill'
import React from 'react'
import { render } from 'react-dom'

import App from './src/App'

import './assets/css/styles.scss'

render(<App />, document.getElementById('root'))