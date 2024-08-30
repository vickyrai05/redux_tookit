'use client';
import { getApi } from "@/utilits/page";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../../public/styles/product.scss';
import { BiDollar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { add } from "./Redux/CartSlice";
import Swal from "sweetalert2";
function page() {
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()
  console.log(product)
  const getProduct = async () => {
    let response = await getApi('https://fakestoreapi.com/products')
    setProduct(response)
  }

  const handleadd = (product) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Product Add Your Cart",
      showConfirmButton: false,
      timer: 1500
    });
    dispatch(add(product))
  }


  useEffect(() => {
    getProduct()
  }, [])
  return (
    <section className="product_section">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="product_area">
              {product.map((item) => (
                <div key={item.id} className="card">
                  <div>
                    <div className="cardImage">
                      <img src={item.image} fetchPriority="low" title="..." alt="product" />
                    </div>
                    <p>
                      {item.title}
                    </p>
                    <div className="price">
                      <BiDollar />{item.price}
                    </div>
                  </div>
                  <div className="add" onClick={() => handleadd(item)}>
                    Add to Cart
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default page;
