import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { asyncCreateProducts } from '../store/action/ProductAction'
import { useDispatch } from 'react-redux'

const CreateProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.id = nanoid()
        dispatch(asyncCreateProducts(data))
        console.log("Form Data:", data);
        navigate("/products")
    };

    return (
        <Container className="py-5">
            <Card className="shadow-sm border-0 p-4 rounded-5">
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

                    <Button type="submit" variant="primary" size="lg" className="mt-4 px-5">
                        Create Product
                    </Button>
                </Form>
            </Card>
        </Container>
    )
}

export default CreateProduct