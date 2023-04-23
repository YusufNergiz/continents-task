import React from 'react'
import Input from '../components/input/Input'
import { useSelector } from 'react-redux'
import Loading from '../components/loading/Loading'

function Main() {

const loading = useSelector(state => state.continent.loading)

  return (
    <>
        <Input />
    </>
  )
}

export default Main