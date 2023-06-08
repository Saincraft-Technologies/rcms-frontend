import React from 'react'
import {Button, Card, Badge} from 'react-bootstrap'
import {Link } from 'react-router-dom'

const HomeTab = () => {

    const businesses = [
        {
          id: 1,
          name: 'Business A',
          location: 'City A',
          phone: '123-456-7890',
          email: 'businessA@example.com',
          notifications: 3,
        },
        {
          id: 2,
          name: 'Business B',
          location: 'City B',
          phone: '987-654-3210',
          email: 'businessB@example.com',
          notifications: 1,
        },
        // Add more businesses here...
      ];
      
      const BusinessTile = ({ business }) => {
        return (
          <Card className="mb-4">
            <Card.Body>
              <div className="badge-container position-absolute top-0 end-0">
                {business.notifications > 0 && (
                  <Badge pill bg="secondary" className="notification-badge">
                    {business.notifications}
                  </Badge>
                )}
              </div>
              <Link to="/about" className="text-decoration-none">
                <Card.Title>{business.name}</Card.Title>
              </Link>
              <div className="details">
                <div className="mb-2">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  {business.location}
                </div>
                <div className="mb-2">
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  {business.phone}
                </div>
                <div>
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  {business.email}
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      };

  return (
    <>
          {/* Register button */}
          <div className="container mt-4 text-center">
          <div className="row">
            <div className="col">
        <Link to="/register">
          <Button className="m-3" variant="primary">
            Register Business
          </Button>
        </Link>
              </div>
              </div>
        </div>
        {/* business tiles */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              {businesses.slice(0, Math.ceil(businesses.length / 2)).map(business => (
                <BusinessTile key={business.id} business={business} />
              ))}
            </div>
            <div className="col-md-6">
              {businesses
                .slice(Math.ceil(businesses.length / 2), businesses.length)
                .map(business => (
                  <BusinessTile key={business.id} business={business} />
                ))}
            </div>
          </div>
        </div>
        </>
  )
}

export default HomeTab