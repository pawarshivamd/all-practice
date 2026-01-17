import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Card, Form } from 'react-bootstrap';
import { StarFill, CartPlus, ArrowLeft, BagCheck } from 'react-bootstrap-icons';
// import UpdateProduct from './UpdateProduct';
import { useForm } from 'react-hook-form';
import { asyncDeleteProducts, asyncUpdateProducts } from '../store/action/ProductAction';
import Input from '../components/Input';

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useSelector((state) => state.product.ProductData);
  const user = useSelector((state) => state.user.data)

  const singleProduct = product?.find((item) => item.id == id);
  const dispatch = useDispatch()

  const { title, price, category, description, image, rating } = singleProduct || {};
  if (!singleProduct) {
    return (
      <Container className="text-center py-5">
        <h3>Product not found!</h3>
        <Button variant="primary" onClick={() => navigate('/')}>Go Back Home</Button>
      </Container>
    );
  }
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      image: singleProduct.image,
      title: singleProduct.title,
      price: singleProduct.price,
      category: singleProduct.category,
      description: singleProduct.description
    }
  }
  );

  const onSubmit = (data) => {
    dispatch(asyncUpdateProducts(id, data))
  };
  const handleDelete = () => {
    dispatch(asyncDeleteProducts(id))
    navigate("/products")
  }
  return (
    <Container className="py-5">
      <Button
        variant="link"
        className=" p-0 mb-4 text-decoration-none d-flex align-items-center"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="me-2" /> Back to Products
      </Button>

      <Row className="gy-4">
        <Col lg={6}>
          <Card className="border-0 shadow-sm p-4 text-center bg-white" style={{ borderRadius: '15px' }}>
            <div style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Card.Img
                src={image}
                style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </Card>
        </Col>

        {/* --- Right Side: Product Info --- */}
        <Col lg={6} className="ps-lg-5">
          <div className="product-info">
            <Badge bg="light" text="dark" className="text-uppercase mb-2 border">
              {category}
            </Badge>

            <h1 className="display-6 fw-bold mb-3">{title}</h1>

            <div className="d-flex align-items-center mb-4">
              <div className="bg-warning text-white px-2 py-1 rounded d-flex align-items-center me-3">
                <span className="fw-bold me-1">{rating?.rate}</span>
                <StarFill size={14} />
              </div>
              <span className="text-white-50 small">
                {rating?.count} Ratings & Reviews
              </span>
            </div>

            <div className="mb-4">
              <h2 className="text-primary fw-bold">${price}</h2>
              <p className="text-success small fw-bold">Inclusive of all taxes</p>
            </div>

            <hr />

            <div className="mb-4">
              <h5 className="fw-bold">Product Description</h5>
              <p className="text-white-50 lh-lg">
                {description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="d-grid gap-3 d-md-flex mt-5">
              <Button
                variant="outline-primary"
                size="lg"
                className="px-4 py-3 fw-bold d-flex align-items-center justify-content-center flex-grow-1"
              >
                <CartPlus className="me-2" size={20} /> Add to Cart
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="px-4 py-3 fw-bold d-flex align-items-center justify-content-center flex-grow-1"
              >
                <BagCheck className="me-2" size={20} /> Buy Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      {user && user?.isAdmin &&
        (
          <Card className="shadow-sm border-0 p-4 rounded-5 mt-5">
            <h2 className="mb-4">Create New Product</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className='gy-3'>
                <Col md={12}>
                  <Input labelName="Product Image" type="url" error={errors.image} {...register("image")} />
                </Col>
                <Col md={6}>
                  <Input labelName="Title" error={errors.title} {...register("title")} />
                </Col>
                <Col md={3}>
                  <Input labelName="Price" type="number" error={errors.price} {...register("price")} />
                </Col>
                <Col md={3}>
                  <Input labelName="Category" error={errors.category} {...register("category")} />
                </Col>

                <Col md={12}>
                  <Input labelName="Description" as="textarea" rows={4} error={errors.description} {...register("description")} />
                </Col>
              </Row>
              <Card.Footer>
                <Button type="submit" variant="primary" size="lg" className="mt-4 px-5">
                  Update Product
                </Button>
                <Button type="button" onClick={handleDelete} variant="danger" size="lg" className="mt-4 px-5">
                  Delete Product
                </Button>
              </Card.Footer>

            </Form>
          </Card>
        )
      }
    </Container>
  );
};

export default ProductsDetails;