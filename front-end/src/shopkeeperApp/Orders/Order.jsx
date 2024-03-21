import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Order = () => {
  const [orderList, setOrderList] = useState([])
  useEffect(() => {
    const fatchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/orders")
        console.log(response.data, "oooooooooooooooooooooo")
        console.log("hello")
        setOrderList(response.data)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }

    };
    fatchProduct() 
}, [])

  return (
  <>
    {orderList ? (<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div class="border shadow-sm rounded p-2" style={{ backgroundColor: "white" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="w-[100px]">
                Order
              </th>
              <th scope="col" class="min-w-[150px]">
                Customer
              </th>
              <th scope="col" class="hidden md:table-cell">
                Channel
              </th>
              <th scope="col" class="hidden md:table-cell">
                Date
              </th>
              <th scope="col" class="text-right">
                Total
              </th>
              <th scope="col" class="hidden sm:table-cell">
                Status
              </th>
              <th scope="col" class="text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((item) => {
              return (<tr>
              <td class="font-medium" id='order no'>{item.product.Name}</td>
              <td id='cos name'>Olivia Martin</td>
              <td class="hidden md:table-cell" id="channel">Online Store</td>
              <td class="hidden md:table-cell" id="date">{item.dateTime.substring(0,10)}</td>
              <td class="text-right" id="price">{item.product.New_price}$</td>
              <td class="hidden sm:table-cell" id="status">Shipped</td>
              <td class="text-right">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    <li>
                      <a class="dropdown-item" href="#">
                        View order
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Customer details
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>)
            })
          }
          </tbody>
        </table>
      </div>
    </main >):(<></>)}</>
  )
}

export default Order