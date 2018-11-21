import React from 'react'
import { connect } from 'react-redux'

import { incrementCounter } from '../../actions/appActions'

import './reset.scss'
import Reset from '../../../assets/svgs/refresh'

const reset = (props) =>
  <div className="rst-Reset">
    <button
      className="rst-Reset_Button"
      onClick={() => props.dispatch(incrementCounter(0))}>
      <Reset/>
    </button>
  </div>

const mapStateToProps = state => (
  state
)

export default connect(mapStateToProps)(reset)

