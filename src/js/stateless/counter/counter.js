import React from 'react'
import { connect } from 'react-redux'

import { incrementCounter } from '../../actions/appActions'

import './counter.scss'

const counter = (props) => {
  return (
    <div className="cnt-Counter">
      <h1 className="cnt-Counter_Title">A fizzbuzz application with a touch of <span className="cnt-Counter_Title cnt-Counter_Title-alternative">Beauty</span></h1>

      <p className="cnt-Counter_Text">{props.appReducer.text || props.appReducer.count}</p>
      <button
        className="cnt-Counter_Button"
        onClick={() => props.dispatch(incrementCounter(props.appReducer.count))}>Increment count</button>
    </div>
  )
}

const mapStateToProps = state => (
  state
)

export default connect(mapStateToProps)(counter)
