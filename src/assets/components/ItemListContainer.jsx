const ItemListContainer = ({ greeting }) => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">Presentacion de carrito</h1>
                <p className="card-text text-center">{greeting}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemListContainer
  