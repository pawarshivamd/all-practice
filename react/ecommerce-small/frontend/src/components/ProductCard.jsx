import { Card, Button, Badge, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';

const ProductCard = ({ productData = {}}) => {
    const { id, title, price, category, description, image, rating } = productData || { };

    return (
        <Card className="h-100 shadow-sm hover-shadow transition-all border-0 overflow-hidden rounded-4">
            {/* Image Wrapper with fixed aspect ratio */}
            <div className="p-3 bg-light d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                <Card.Img 
                    variant="top" 
                    src={image} 
                    style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }} 
                />
            </div>

            <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                    <Badge bg="secondary" className="text-uppercase fw-normal" style={{ fontSize: '0.7rem' }}>
                        {category}
                    </Badge>
                </div>

                <Card.Title className="fs-6 fw-bold mb-1 text-truncate-2" style={{ height: '2.8rem' }}>
                    {title}
                </Card.Title>

                <div className="d-flex align-items-center mb-2">
                    <div className="text-warning d-flex align-items-center me-2">
                        <StarFill size={14} className="me-1" />
                        <span className="text-dark fw-bold small">{rating?.rate }</span>
                    </div>
                    <span className="text-muted small">({rating?.count} reviews)</span>
                </div>

                <Card.Text className="text-muted small line-clamp-2 mb-3">
                    {description}
                </Card.Text>

                <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fs-4 fw-bold text-primary">
                            ${price}
                        </span>
                    </div>

                    <Stack direction="horizontal" gap={2}>
                        <Button 
                            as={Link} 
                            to={`${id}`} 
                            variant="outline-dark" 
                            className="w-50 btn-sm"
                        >
                            Details
                        </Button>
                        <Button 
                            variant="primary" 
                            className="w-50 btn-sm fw-bold"
                        >
                            Add to Cart
                        </Button>
                    </Stack>
                </div>
            </Card.Body>
        </Card>
    );
};
export default ProductCard