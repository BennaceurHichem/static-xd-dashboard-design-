import React from 'react'
import Nav from './Nav'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './Deposits/Deposits'

import depositData from '../../DepositData.json'
const Main = () => {
    return (
        <div>
            <Nav />
            <NewDepositBtn />
            <Deposits title="Active Deposits" count={2} data={depositData.active} />
            <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
       
        </div>
    )
}

export default Main
