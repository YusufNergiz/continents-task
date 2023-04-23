import React from 'react'
import Input from '../../components/input/Input'
import { useSelector } from 'react-redux'
import Loading from '../../components/loading/Loading'

function Main() {

const loading = useSelector(state => state.continent.loading)

  return (
    <div className='mt-5'>
        <Input />
    </div>
  )
}

export default Main