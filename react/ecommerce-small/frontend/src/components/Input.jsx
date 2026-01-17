import { Form } from 'react-bootstrap'

const Input = ({ labelName, type = "text", error, as, rows, ...rest }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label className="fw-bold text-capitalize">{labelName}</Form.Label>
            <Form.Control
                as={as}      
                rows={rows}  
                type={type}
                {...rest}
                isInvalid={!!error}
                placeholder={`Enter ${labelName}...`}
            />
            <Form.Control.Feedback type="invalid">
                {error?.message}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default Input
