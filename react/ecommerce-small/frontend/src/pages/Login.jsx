import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { asyncLoginUser } from '../store/action/UserAction'
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }, } = useForm()

  const onSubmit = (data) => {
    
    watch();
    dispatch(asyncLoginUser(data))
    navigate('/')
    reset();
  }
  return (
    <Container >
      <div className='d-flex align-items-center min-vh-100'>
        <Form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3 gy-3">
            <Form.Group as={Col} md='12' controlId="email">
              <Form.Label>User Email</Form.Label>
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                defaultValue='john@gmail.com'
              />
            </Form.Group>
            <Form.Group as={Col} md='12' controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password")}
                type="password"
                defaultValue='123456'
                placeholder="Enter your password"
              />
            </Form.Group>
            <Col md='12'>
              You have not account? <Link to="/register">Register</Link>
            </Col>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    </Container>

  )
}

export default Login
