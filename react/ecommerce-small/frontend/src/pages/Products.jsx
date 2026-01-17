import { Col, Container, Row } from "react-bootstrap"
import ProductCard from "../components/ProductCard"
import { useSelector } from "react-redux"
import { current } from "@reduxjs/toolkit"

const Products = () => {
  const {ProductData} = useSelector((state) => state.product)
  return (
    <section className="py-5">
      <Container>
        <Row >
          {ProductData.map((CurEle, i) => (
            <Col md={6} lg={4}>
              <ProductCard key={i} productData={CurEle} />
            </Col>
          )
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Products
