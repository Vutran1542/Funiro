import React, { useState } from 'react'
import './mainpage.css'
import { Card, Col, Input, Menu, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Shoppage from '../mainmenu/shoppage/shoppage';
import About from '../mainmenu/about/about';
import Contact from '../mainmenu/Contact/contact';

function Mainpage() {
    // let products = [
    //     {
    //         id: 1,
    //         name: "Syltherine",
    //         images: "img/1.PNG.png",
    //         content: "Stylish cafe chair",
    //         price: 2500000,
    //     },
    //     {
    //         id: 2,
    //         name: "Leviosa",
    //         images: "leviosa.PNG",
    //         content: "Stylish cafe chair",
    //         price: 2500000,
    //     },
    //     {
    //         id: 3,
    //         name: "Lolita",
    //         images: "lolita.PNG",
    //         content: "Stylish cafe chair",
    //         price: 2500000,
    //     },
    //     {
    //         id: 4,
    //         name: "Respira",
    //         images: "respita.PNG",
    //         content: "Stylish cafe chair",
    //         price: 2500000,
    //     },
    //     {
    //         id: 5,
    //         name: "Grifo",
    //         images: "grifo.PNG",
    //         content: "Stylish cafe chair",
    //         price: 2500000,
    //     },
    //     {
    //         id: 6,
    //         name: "Muggo",
    //         images: "muggo.png",
    //         content: "Stylish cafe chair",
    //         price: 2500000,
    //     },
    //     {
    //         id: 7,
    //         name: "Pingky",
    //         images: "./img/muggo.png",
    //         content: "Stylish cafe chair",
    //         price: 2500000,
    //     },
    //     {
    //         id: 8,
    //         name: "Potty",
    //         images: "muggo.PNG",
    //         content: "Stylish cafe chair",
    //         price: 2500000,
    //     }
    // ]
    const [contentComponent, setContentComponent] = useState("");
    const [collapsed, setCollapsed] = useState(false);

    const handleMenuClick = (key) => {
        switch (key) {
            case '2':
                setContentComponent(<Shoppage />);
                break;
            case '3':
                setContentComponent(<About />);
                break;
            case '4':
                setContentComponent(<Contact />);
                break;
            default:
                setContentComponent(null);
        }
    };
    return (
        <div className='container'>
            <div className='scroll-up-btn'>
                <i className='fas fa-angle-up'></i>
            </div>
            <Sider trigger={null} collapsed={collapsed} className='logo'>
                <Menu
                    className='navbar'
                    onSelect={({ key }) => handleMenuClick(key)}
                    cover={<img alt="/" src="/img/logo.png" />}
                    items={[
                        {
                            key: '1',
                            label: 'Home',
                        },
                        {
                            key: '2',
                            label: 'Shop'
                        },
                        {
                            key: '3',
                            label: 'About',
                        },
                        {
                            key: '4',
                            label: 'Contact',
                        }
                    ]}
                />
                <div className='home_logo'>
                    <img src='/img/logo.png' alt="#"></img>
                    <h1>Funiro</h1>
                </div>
            </Sider>
            <Content>
                {contentComponent}
            </Content>
            <div className='main-pic'>
                <div className='box-text'>
                    <div className='main-text'>
                        <h5>New Arrival</h5>
                        <h1>Discover Our<br />New Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <a href='#'>Buy Now</a>
                    </div>
                </div>
            </div>
            <div className='range'>
                <div className='range-text'>
                    <h1>Browse The Range</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='row-pic'>
                    <span><img src="./img/dining.png" alt='#' /><br />Dining</span>
                    <span><img src="/img/living.png" alt='#' /><br />Living</span>
                    <span><img src="/img/bedroom.png" alt='#' /><br />Bedroom</span >
                </div >
            </div >
            <div className='product'>
                <h1>Our Product</h1>
                <Row className='row' gutter={16}>
                    <Col span={5}>
                        <Card className='card'
                            bordered={false}
                            cover={<img alt="/" src="/img/Syltherine.png" bordered={false} />}
                        >
                            <h2>Syltherine</h2>
                            <p>Stylish cafe chair</p>
                            <span>Rp 2.500.000</span>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card className='card'
                            bordered={false}
                            cover={<img alt="/" src="/img/leviosa.png" />}
                        >
                            <h2>Leviosa</h2>
                            <p>Stylish cafe chair</p>
                            <span>Rp 2.500.000</span>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card className='card'
                            bordered={false}
                            cover={<img alt="/" src="/img/lolita.png" />}
                        >
                            <h2>Lolita</h2>
                            <p>Luxury big sofa</p>
                            <span>Rp 7.000.000</span>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card className='card'
                            bordered={false}
                            cover={<img alt="/" src="/img/respita.png" />}
                        >
                            <h2>Respira</h2>
                            <p>Outdoor bar table and stool</p>
                            <span>Rp 500.000</span>
                        </Card>
                    </Col>
                </Row>
                <Row className='row' gutter={16}>
                    <Col span={5}>
                        <Card className='card'
                            bordered={false}
                            cover={<img alt="/" src="/img/grifo.png" />}
                        >
                            <h2>Grifo</h2>
                            <p>Night lamp</p>
                            <span>Rp 1.500.000</span>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card className='card'
                            bordered={false}
                            cover={<img alt="/" src="/img/muggo.png" />}
                        >
                            <h2>Muggo</h2>
                            <p>Small mug</p>
                            <span>Rp 150.000</span>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card className='card'
                            bordered={false}
                            cover={<img alt="/" src="/img/pingky.png" />}
                        >
                            <h2>Pingky</h2>
                            <p>Cute bed set</p>
                            <span>Rp 7.000.000</span>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card className='card'
                            bordered={false}
                            cover={<img alt="/" src="/img/potty.png" />}
                        >
                            <h2>Potty</h2>
                            <p>Minimalist flower pot</p>
                            <span>Rp 500.000</span>
                        </Card>
                    </Col>
                </Row>
                <a href='#'>Learn More</a>
            </div>
            <div className='inspiration'>
                <Row className='inspiration-content' gutter={16}>
                    <Col span={8} className='content-text'>
                        <h1>50+ Beautiful rooms
                            inspiration</h1>
                        <p>Our designer already made a lot of beautiful <br />prototipe of rooms that inspire you</p>
                        <a href='#'>Explore More</a>
                    </Col>
                    <Col span={8}
                        className='content-img'>
                        <img src="/img/inner-peace.png" alt='#' />
                        <Card className='card-inner'>
                            <p>01---Bed Room</p>
                            <h1>Inner Peace</h1>
                        </Card>
                        <span className="material-symbols-outlined" style={{
                            position: "absolute",
                            width: "40px",
                            height: "40px",
                            background: "#B88E2F",
                            color: "#fff",
                            justifyContent: "center",
                            alignContent: "center",
                            textAlign: "center",
                            paddingTop: "9px",
                            marginTop: "520px",
                            marginLeft: "-155px"
                        }}>
                            arrow_forward
                        </span>
                    </Col>
                </Row>
            </div>
            <div className='share'>
                <p>Share your setup with</p>
                <h1>#FuniroFurniture</h1>
                <div className='share-img'>
                    <img alt='#' src='/img/f1.png' style={{
                        width: "100px",
                        height: "410px"
                    }} />
                    <img alt='#' src='/img/f2.png' style={{
                        marginLeft: "32px"
                    }} />
                    <img alt='#' src='/img/f5.png' style={{
                        marginLeft: "32px", position: "absolute", marginTop: "170px"
                    }} />
                    <img alt='#' src='/img/f6.png' style={{
                        marginLeft: "355px", position: "absolute", marginTop: "150px"
                    }} />
                    <img alt='#' src='/img/f9.png' style={{
                        marginLeft: "675px", width: "260px", height: "500px",
                    }} />
                    <img alt='#' src='/img/f3.png' style={{
                        marginTop: "32px"
                    }} />
                    <img alt='#' src='/img/f4.png' style={{
                        marginLeft: "32px"
                    }} />
                    <img alt='#' src='/img/f7.png' style={{
                        marginLeft: "32px"
                    }} />
                    <img alt='#' src='/img/f8.png' style={{
                        marginLeft: "32px"
                    }} />
                </div>
            </div>
            <Row className='footer' gutter={16}>
                <Col span={6} className='footer-content-1' >
                    <h5>Funiro.</h5>
                    <p>400 University Drive Suite 200 Coral Gables,
                        <br />FL 33134 USA</p>
                </Col>
                <Col span={6} className='footer-content-2'>
                    <h4>Link</h4>
                    <span>Home</span>
                    <span>Shop</span>
                    <span>About</span>
                    <span>Contact</span>
                </Col>
                <Col span={6} className='footer-content-3'>
                    <h4>Help</h4>
                    <span>Payment Options</span><br />
                    <span>Returns</span>
                    <span>Privacy Policies</span>
                </Col>
                <Col span={6} className='footer-content-4'>
                    <h4>Newsletter</h4>
                    <Row gutter={16} style={{ marginTop: "55px" }}>
                        <Col span={14}><Input placeholder="Fill Email Here" bordered={false} /></Col>
                        <Col span={6}><p>SUBSCRIBE</p></Col>
                    </Row>
                </Col>
            </Row>
            <hr className='line' />
            <div className='footer-E'>
                <p>2023 furino. All rights reverved</p>
            </div>
        </div >
    )
}

export default Mainpage
