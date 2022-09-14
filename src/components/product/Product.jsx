import "./product.css";

const Product = ({img,link,text}) => {
  
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <h2 className="p-img-text">{text}</h2>
      </a>
    </div>
  );
};

export default Product;
