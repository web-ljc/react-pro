import { useEffect, useState, forceUpdate } from "react"

export default function SetStatePage(props) {
  const [count, setCount] = useState(-1)
  useEffect(() => {
    setCount(0)
  })
  console.info('99999')

  const handle = () => {
    forceUpdate()
  }

  return (
    <div>
      <h3>SetStatePage</h3>
      <button onClick={handle}>{count}</button>
    </div>
  )
}