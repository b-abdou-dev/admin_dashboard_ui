import UploadFileIcon from "@mui/icons-material/UploadFile";

import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <div className="header">
        <h2 className="title">New Product</h2>
      </div>
      <div className="Wrapper">
        <div className="inputsContainer">
          <div className="uploadImageContainer">
            <img
              className="productImage"
              //   default image
              src={require("./default_product.png")}
              alt="product"
            />
            <div className="uploadContainer">
              <label htmlFor="file" className="fileUploadLabel">
                <UploadFileIcon className="fileUploadIcon" />
              </label>
              <input
                type="file"
                accept=".jpg, .png, .jpeg"
                id="file"
                className="fileUploadInput"
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="product-name" className="itemLabel">
              Product Name
            </label>
            <input
              id="product-name"
              type="text"
              className="itemInput"
              placeholder="ThinkPad"
            />
          </div>
          <div className="row">
            <label htmlFor="stock" className="itemLabel">
              Stock
            </label>
            <input
              id="stock"
              type="number"
              className="itemInput"
              placeholder="0"
              min="0"
            />
          </div>
          <div className="row">
            <label htmlFor="active" className="itemLabel">
              Active
            </label>

            <select name="active" id="active" className="selectActive">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="footer">
          <button className="createButton">Create</button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
