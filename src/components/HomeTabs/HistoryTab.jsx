import React, { useState, useEffect } from 'react';
// import { fetchSuppliers } from '../../api';

const Suppliers = () => {
  const [expandedSupplierId, setExpandedSupplierId] = useState(null);

  const handleCardClick = (supplierId) => {
    setExpandedSupplierId((prevExpandedSupplierId) =>
      prevExpandedSupplierId === supplierId ? null : supplierId
    );
  };

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

// demo data
    const demoSuppliers = [
        {
            supplier_id: 1,
            supplier_name: 'Supplier 1',
            supplier_email: 'sadsasad',
            supplier_phone: '123-456-7890',
            supplier_address: '123 Main St',
            supplier_city: 'City A',
        },
        {
            supplier_id: 2,
            supplier_name: 'Supplier 2',
            supplier_email: 'asdasd',
            supplier_phone: '987-654-3210',
            supplier_address: '456 Main St',
            supplier_city: 'City B',
        }
    ];

    useEffect(() => {
        setSuppliers(demoSuppliers);
        setLoading(false);
    }, []);



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-button-container mt-3">
              <h1>History</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {loading && (
              <div className="text-center">
                <div className="spinner-border text-primary mt-5" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {error && <p className="text-center mt-5">Error...</p>}
            {suppliers
              .filter((supplier) => {
                if (search === '') {
                  return supplier;
                } else if (supplier.supplier_name.toLowerCase().includes(search.toLowerCase())) {
                  return supplier;
                }
                return false;
              })
              .map((supplier) => (
                <div
                  key={supplier.supplier_id}
                  className={`card mt-2 ${supplier.supplier_id === expandedSupplierId ? 'expanded' : ''}`}
                  onClick={() => handleCardClick(supplier.supplier_id)}
                >
                  <div className="card-body">
                    <h5 className="card-title">{supplier.supplier_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {supplier.supplier_email || 'Supplier Email'}
                    </h6>
                    <p className="card-text">{supplier.supplier_address}</p>
                  </div>
                    <div className="additionalcard">
                      <p>Additional Info: {supplier.additional_info}</p>
                      <button className="btn btn-primary">Action 1</button>
                      <button className="btn btn-secondary">Action 2</button>
                    </div>
                  
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
