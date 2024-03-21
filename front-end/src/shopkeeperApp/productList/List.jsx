import React from 'react'
import { useNavigate } from 'react-router-dom'


const List = () => {
  let Navigate = useNavigate()
  const hendleAddproduct = function() {
    Navigate('/addproduct')
    console.log("first")
  }
  return (
    <div class="d-flex flex-col h-screen  rounded p-2" style={{height:"88%"}} >
  <main class="flex-1 overflow-auto p-4 rounded" style={{backgroundColor:"white", minHeight:"100%"}}>
    <div class="d-flex items-center rounded p-2"  style={{justifyContent:"space-between"}}>
      <h1 >Products</h1>
      <button class=" rounded items-center justify-center " style={{width:"auto"}} onClick={()=>hendleAddproduct()}>
        Add product
      </button>
    </div>
    <div class="border shadow-sm rounded p-3" style={{overflow:"hidden"}}>
      <div class="relative  overflow-auto" style={{width:"77vw"}}>
        <table class=" caption-bottom text-sm" style={{width:"95%"}} >
          <thead class="[&amp;_tr]:border-b "  style={{borderBottom:"2px solid #dadada"}}>
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ">
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                Image
              </th>
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Name
              </th>
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Price
              </th>
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Inventory
              </th>
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                Actions
                                  </th>
                
                              </tr>
                              <br />
          </thead>
          <tbody class="[&amp;_tr:last-child]:border-0" style={{borderBottom:"2px solid #dadada"}}>
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" >
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 rounded" >
                <img
                  src="https://images.unsplash.com/photo-1710743387014-698052dfbe53?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="64"
                  height="64"
                  alt="Product image"
                  class="aspect-square rounded object-cover"
                />
              </td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Glimmer Lamps</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$49.99</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">500 in stock</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <div>
                  <div>
                    <button
                      class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium "
                      style={{backgroundColor:"white", border:"none",color:"#dadada"}}
                      id="menu"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-4 h-4"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                      <span class="sr-only">Toggle menu</span>
                    </button>
                  </div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</div>
  )
}

export default List