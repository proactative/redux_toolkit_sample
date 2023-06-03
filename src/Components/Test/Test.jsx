import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { increment, decrement, reset, greetings  } from '../../ReduxToolkitLogics/TestSlice'
import './Test.css'

function Test() {
  const count = useSelector((state) => state.test.count)
  const phrase = useSelector((state) => state.test.phrase)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <h1>{phrase}</h1>
      <p className="count">{count}</p>
      <button className="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button className="button button_reset" onClick={() => dispatch(reset())}>
        reset
      </button>
      <button className="button button_greetings" onClick={() => dispatch(greetings("Hello, my friends!"))}>
        greetings
      </button>

    </div>
  )
}

export default Test
