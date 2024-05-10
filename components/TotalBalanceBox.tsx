import React from 'react'
import AnimatedBalance from './AnimatedBalance'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        {/* {doughnutChart} */}
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='text-18 font-semibold text-gray-900'>
          Bank Accounts: {totalBanks}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance
          </p>
          <p className='total-balance-amount flex-center gap-2'>
            <AnimatedBalance amount={totalCurrentBalance}/>
            
          </p>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox