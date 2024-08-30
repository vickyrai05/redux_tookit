'use client';
import { Col, Container, Row } from "react-bootstrap";
import '../../../public/styles/navbar.scss';
import Link from "next/link";
import logo from '../../../public/images/snitch.png'
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const item = useSelector((state) => state.cart)
    return (
        <section className="navbarsection">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="navbararea">
                            <div className="logo">
                                <Image src={logo} fetchPriority="low" title="..." alt="logo" />
                            </div>
                            <div className="link">
                                <ul>
                                    <li>
                                        <Link href="/" >Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="login">
                                <Link href='./cart'>
                                    <div className="carticon">
                                        <IoCartOutline />
                                        <span className="count">{item.length}</span>
                                    </div>
                                </Link>
                                <div className="search">
                                    <IoSearchOutline />
                                </div>
                                <div className="userlogin"><span><FaRegUser /></span>Login</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}