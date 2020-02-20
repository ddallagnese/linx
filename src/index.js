import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Principal from './components/Principal'

ReactDOM.render(<Principal />, document.getElementById('root'))

serviceWorker.unregister()
