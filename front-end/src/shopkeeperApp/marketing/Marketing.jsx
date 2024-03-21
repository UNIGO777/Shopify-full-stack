import React from 'react'

const Marketing = () => {
  return (
    <div class="container-fluid">
  <main class="p-4 lg:p-6">
    <div class="row " style={{gap:"10px"}}>
      <div class="card p-3">
        <div class="card-header">
          <h2 class="card-title">Ad Details</h2>
          <p class="card-text">Enter the details of your ad below</p>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <label for="title" class="form-label">
                Title
              </label>
              <input id="title" placeholder="Enter ad title" class="form-control" />
            </div>
            <div class="col-md-6">
              <label for="description" class="form-label">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter ad description"
                class="form-control min-h-[100px]"
              ></textarea>
            </div>
            <div class="col-md-6">
              <label for="price" class="form-label">
                Price
              </label>
              <input id="price" placeholder="Enter ad price" class="form-control" />
            </div>
            <div class="col-md-6">
              <label for="category" class="form-label">
                Category
              </label>
              <select class="form-select">
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="books">Books</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="image" class="form-label">
                Image
              </label>
              <input id="image" accept="image/*" class="form-control" type="file" />
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" style={{width:"auto"}}>Save Changes</button>
        </div>
      </div>
      <div class="card p-3">
        <div class="card-header">
          <h2 class="card-title">My Ads</h2>
          <p class="card-text">Here are the ads you have created</p>
        </div>
        <div class="card-body">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <div class="card">
              <img
                src="/placeholder.svg"
                alt="Ad image"
                width="200"
                height="120"
                class="card-img-top"
              />
              <div class="card-body">
                <h3 class="card-title">Blue T-Shirt</h3>
                <p class="card-text">$29.99</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-sm btn-primary">Edit</button>
                <button class="btn btn-sm btn-outline-secondary">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

  )
}

export default Marketing