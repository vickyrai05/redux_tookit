'use client';
import { Col, Container, Row } from "react-bootstrap";
import { remove } from "../Redux/CartSlice";
import '../../../public/styles/cartpage.scss';
import { BiDollar } from "react-icons/bi";
const { useSelector, useDispatch } = require("react-redux");
import Swal from "sweetalert2";
const Cartpage = () => {
    const items = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const handleremove = (removeId) => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Product has been Removed.",
            showConfirmButton: false,
            timer: 1500
          });
        dispatch(remove(removeId))
    }
    return (
        <div className="cartpage">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="cartarea">
                            {items.map((product) => (
                                <div key={product.key} className="cartbox">
                                    <div className="cartimage"><img src={product.image} alt="" /></div>
                                    <div className="content">
                                        <div className="title">{product.title}</div>
                                        <div className="price"> <BiDollar /> {product.price}</div>
                                        <div className="remove" onClick={() => handleremove(product.id)}>Remove to Cart</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cartpage;