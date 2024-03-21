import React, {useEffect, useState} from 'react'

const ShopOwnerprofilePage = () => {
    const [shopkeeperdata, setshopdata] = useState({});
    useEffect(() => {
        let locals = () => {
            setshopdata(JSON.parse(localStorage.getItem('shopkeeper')));
        }
        locals();
    }, [])
  
    return (
    <>
            { shopkeeperdata ?
                (<div className="container-fluid">
            <br />

            <div class="px-4 py-6 md:py-12 min-h-[calc(100vh_-_theme(spacing.32))_]">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 d-flex gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Avatar"
                                width="80"
                                height="80"
                               
                                style={{ aspectRatio: "80 / 80", objectFit: "cover", borderRadius: "50%" }}
                            />
                            <div class="grid gap-1.5">
                                        <h1 class="text-2xl font-bold">{shopkeeperdata.fullName}</h1>
                                <p class="text-sm text-muted">Owner since 2019</p>
                            </div>
                        </div>
                        <div class="row gap-4">
                            <h2 class="text-lg font-semibold">Shop Discreption</h2>
                            <p>
                                Sarah Day is passionate about creating beautiful and unique handmade jewelry. Her shop, DayDream Designs,
                                offers a stunning collection of earrings, necklaces, and bracelets that are perfect for adding a touch of
                                elegance to any outfit.
                            </p>
                            <div class="grid gap-2">
                                <h2 class="text-lg font-semibold">Contact</h2>
                                <div class="grid gap-0.5">
                                    <p>sarahday@example.com</p>
                                    <p>(123) 456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-orientation="horizontal"
                        role="none"
                        class="shrink-0 bg-gray-100 h-[1px] w-full border-gray-200 dark:border-gray-800"
                    ></div>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <a class="d-flex flex-column gap-1" href="#" style={{ textDecoration: "none", color: "black" }}>
                                <img
                                    
                                    src="https://images.unsplash.com/photo-1616715623022-65d18f0042ae?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Product Image"
                                    width="200"
                                    height="200"
                                    class=" rounded aspect-square object-cover rounded-lg overflow-hidden border border-gray-200 w-full transition-transform translate-y-0 scale-100 dark:border-gray-800 hover:scale-105"
                                />
                                <div class="grid gap-0.5" >
                                    <h3 class="font-semibold" >Crystal Drop Earrings</h3>
                                    <p class="text-sm text-muted">$24.99</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-md-6">
                            <a class="d-flex flex-column gap-1" href="#" style={{ textDecoration: "none", color: "black" }}>
                                <img
                                    
                                    src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Product Image"
                                    width="200"
                                    height="200"
                                    class=" rounded aspect-square object-cover rounded-lg overflow-hidden border border-gray-200 w-full transition-transform translate-y-0 scale-100 dark:border-gray-800 hover:scale-105"
                                />
                                <div class="grid gap-0.5" >
                                    <h3 class="font-semibold" >Crystal Drop Earrings</h3>
                                    <p class="text-sm text-muted">$24.99</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-md-6">
                            <a class="d-flex flex-column gap-1" href="#" style={{ textDecoration: "none", color: "black" }}>
                                <img
                                    
                                    src="https://images.unsplash.com/photo-1567361678487-b386b0763596?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Product Image"
                                    width="200"
                                    height="200"
                                    class=" rounded aspect-square object-cover rounded-lg overflow-hidden border border-gray-200 w-full transition-transform translate-y-0 scale-100 dark:border-gray-800 hover:scale-105"
                                />
                                <div class="grid gap-0.5" >
                                    <h3 class="font-semibold" >Crystal Drop Earrings</h3>
                                    <p class="text-sm text-muted">$24.99</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                <br /></div>):(<>loading...</>) }
        </>

    )
}

export default ShopOwnerprofilePage