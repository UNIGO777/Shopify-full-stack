import React from 'react'

const Massages = () => {
  return (
   <div className='p-2'>
<div class="card border rounded-lg bg-light text-dark shadow-sm w-100 max-w-3xl p-3">
  <div class="p-6 gap-4 d-flex flex-md-row p-2" style={{justifyContent:"space-between", alignItems:"center"}}>
    <div class="d-flex flex-column gap-1">
      <h3 class="text-2xl font-weight-bold">Notifications</h3>
      <p class="text-sm text-muted">
        You have 3 unread messages.
      </p>
    </div>
    <button class="btn btn-primary inline-flex items-center justify-center font-medium w-auto" >
      Mark as Read
    </button>
  </div>
  <div class="p-0">
    <div class="border-top border-gray-200"></div>
    <div class="divide-y divide-gray-200">
      <div class="p-6 gap-4">
        <div class="d-flex p-3 px-5 gap-4" style={{justifyContent:"space-between", alignItems:"center"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
                          <div class="d-flex gap-5 p-2" style={{ justifyContent: "space-between", maxHeight:"40px"}}>
            <p class="text-sm font-weight-medium">New order received!</p>
            <p class="text-sm text-gray-500">
              You have a new order #1234.
            </p>
          </div>
          <button class="btn btn-outline-primary inline-flex items-center justify-center">
            View
          </button>
        </div>
        
      </div>
    </div>
  </div>
</div></div>

  )
}

export default Massages