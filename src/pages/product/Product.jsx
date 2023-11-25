import UploadFileIcon from "@mui/icons-material/UploadFile";

import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../data";

const Product = () => {
  return (
    <div className="product">
      <div className="header">
        <h2 className="title">Product</h2>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            title={productData.title}
            data={productData.data}
            xDataKey={productData.xDataKey}
            yDataKey={productData.yDataKey}
            grid="grid"
          />
        </div>
        <div className="productTopRight">
          <div className="productDescription">
            <img
              src="https://images.unsplash.com/photo-1625831463095-3330e301730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVub3ZvJTIwdGhpbmtwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="product"
              className="image"
            />
            <div className="infoContainer">
              <div className="productName">ThinkPad</div>
              <div className="productInfoWrapper">
                <div className="productInfo">
                  <div className="param">id:</div>
                  <div className="value">123</div>
                </div>
                <div className="productInfo">
                  <div className="param">sales:</div>
                  <div className="value">45</div>
                </div>
                <div className="productInfo">
                  <div className="param">active:</div>
                  <div className="value">yes</div>
                </div>
                <div className="productInfo">
                  <div className="param">stock:</div>
                  <div className="value">34</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reached 2:50:56 */}
      <div className="userEditWrapper">
        <div className="productEdit">
          <div className="editHeader">
            <h2 className="editTitle">Edit</h2>
          </div>
          <div className="detailsMain">
            <div className="detailsUpdateContainer">
              <div className="detailItem">
                <span className="productLabel">Product Name</span>
                <input
                  className="productInput"
                  type="text"
                  placeholder="Product Name"
                />
              </div>
              {/* reached */}
              <div className="detailItem">
                <span className="productLabel">Stock</span>
                <input
                  className="productInput"
                  type="number"
                  placeholder="Number of Items"
                  min="0"
                />
              </div>
              <div className="detailItem">
                <label htmlFor="" className="productLabel">
                  Active
                </label>
                <select name="active" id="active" className="productInput">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="detailsActionContainer">
              <div className="uploadImageContainer">
                <img
                  className="productImage"
                  src="https://images.unsplash.com/photo-1625831463095-3330e301730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVub3ZvJTIwdGhpbmtwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                  alt="product"
                />
                <div className="uploadContainer">
                  <label htmlFor="file" className="fileUploadLabel">
                    <UploadFileIcon className="fileUploadIcon" />
                  </label>
                  <input type="file" id="file" className="fileUploadInput" />
                </div>
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <button className="updateButton">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
