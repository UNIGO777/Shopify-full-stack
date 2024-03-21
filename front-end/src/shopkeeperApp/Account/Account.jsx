import React from 'react'

const Account = () => {
  return (
    <div class="card p-2" style={{gap:"10px"}}>
  <div class="card-header" style={{gap:"10px"}}>
    <h5 class="card-title">Account Details</h5>
    <p class="card-description">Your account balance and payment history</p>
  </div>
  <div class="card-body" >
    <div class="row">
      <div class="col-md-6" >
        <div class="d-flex align-items-center gap-2" >
          <div class="d-flex align-items-center gap-2">
            <img
              src="/placeholder.svg"
              width="64"
              height="64"
              class="rounded-circle"
              alt="Avatar"
              style={{aspectRatio:"64 / 64", objectFit: "cover"}}
            />
            <div class="d-flex flex-column " >
              <h2 class="font-weight-bold">John Doe</h2>
              <p class="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
            </div>
          </div>
          <button class="btn btn-sm btn-primary">Edit profile</button>
        </div>
      </div>
    </div>
    <div class="card" style={{marginBottom:"10px"}}>
      <div class="card-header">
        <h5 class="card-title">Account Balance</h5>
        <p class="card-description">Your current balance and pending transactions</p>
      </div>
      <div class="card-body d-flex align-items-center gap-4">
        <div class="d-flex flex-column">
          <h3 class="font-weight-bold">$1,250.00</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">Available balance</p>
        </div>
        <div class="separator"></div>
        <div class="d-flex flex-column">
          <h3 class="font-weight-bold">$250.00</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">Pending transactions</p>
        </div>
      </div>
    </div>
    <div class="card" style={{marginBottom:"10px"}}>
      <div class="card-header">
        <h5 class="card-title">Recent Transactions</h5>
        <p class="card-description">Your most recent incoming and outgoing transactions</p>
      </div>
      <div class="card-body p-0">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <div class="font-weight-bold">Deposit</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Incoming</div>
              </td>
              <td>
                <div class="font-weight-bold">+$100.00</div>
              </td>
              <td class="text-right">
                <div class="font-weight-bold">Feb 15, 2023</div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="font-weight-bold">Order #1234</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Outgoing</div>
              </td>
              <td>
                <div class="font-weight-bold">-$75.00</div>
              </td>
              <td class="text-right">
                <div class="font-weight-bold">Feb 10, 2023</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Payment History</h5>
        <p class="card-description">A chronological list of all your past transactions</p>
      </div>
      <div class="card-body p-0">
        <table class="table">
          <thead>
            <tr>
              <th class="w-100">Date</th>
              <th class="min-w-150">Description</th>
              <th class="hidden md:table-cell">Amount</th>
              <th class="text-right">Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-weight-bold">Feb 15, 2023</td>
              <td>Deposit</td>
              <td>+$100.00</td>
              <td class="text-right">Credit card</td>
            </tr>
            <tr>
              <td class="font-weight-bold">Feb 10, 2023</td>
              <td>Order #1234</td>
              <td>-$75.00</td>
              <td class="text-right">Wallet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Account