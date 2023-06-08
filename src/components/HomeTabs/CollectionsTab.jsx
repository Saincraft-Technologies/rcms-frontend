import React, { useState, useEffect } from 'react';
import { Badge } from 'react-bootstrap';

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
      supplier_name: '50,000/-',
      supplier_email: '6/6/2023',
      supplier_phone: '123-456-7890',
      supplier_address: 'Business XYZ',
      supplier_city: 'City A Address',
      status: 'Pending',
    },
    {
      supplier_id: 2,
      supplier_name: '70,000/-',
      supplier_email: '4/5/2023',
      supplier_phone: '987-654-3210',
      supplier_address: 'Business ABC',
      supplier_city: 'City B Address',
      status: 'Pending',
    },
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
              <h1>Collections</h1>
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
                } else if (
                  supplier.supplier_name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return supplier;
                }
                return false;
              })
              .map((supplier) => (
                <div
                  key={supplier.supplier_id}
                  className={`card mt-2 ${
                    supplier.supplier_id === expandedSupplierId ? 'expanded' : ''
                  }`}
                  onClick={() => handleCardClick(supplier.supplier_id)}
                >
                  <div className="card-body mb-1">
                    <h5 className="card-title">{supplier.supplier_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {supplier.supplier_email || 'Supplier Email'}
                    </h6>
                    <p className="card-text">{supplier.supplier_address}</p>
                    <Badge
                      pill
                      bg={supplier.status === 'Pending' ? 'warning' : 'success'}
                    >
                      {supplier.status}
                    </Badge>
                  </div>
                  {supplier.supplier_id === expandedSupplierId && (
                       <div className="additionalcard p-4">
                       <p>
                         Additional Info:  {supplier.supplier_city}
                       </p>
                       
                       <button className="btn btn-primary ">Accept Payment</button>
                       {/* <button className="btn btn-secondary">Paid Receipt</button> */}
                       
 
 
                     </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
