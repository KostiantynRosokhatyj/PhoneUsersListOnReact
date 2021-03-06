import * as React from 'react'
import {Button, Col, Row} from "antd";
import 'antd/dist/antd.css';
import Contact from "./Contact";
import Bucket from "./Bucket";


// @ts-ignore
function Contacts(props) {
    const {contacts, onClick} = props
    return (
        <div>
            {contacts.map((contact: { id: string | number | null | undefined; name: any; email: any; number: any; }) =>
                <Row key={contact.id}>
                    <Col span={2}>
                        <Contact phoneContact={contact.name} onClick={() => onClick(contact.name)}/>
                    </Col>

                    <Col span={4}>
                        <Contact phoneContact={contact.email}/>
                    </Col>

                    <Col span={3}>
                        <Contact phoneContact={contact.number}/>
                    </Col>

                    <Col span={1}>
                        <Button className="buttons" type="primary" onClick={function handleClick(e) {
                            e.preventDefault();
                            window.location.replace('http://localhost:3000/change');
                        }}>Edit</Button>
                    </Col>

                    <Col span={2}>
                        <Bucket key={contact.id} onClick={() => onClick(contact.name)}/>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default Contacts