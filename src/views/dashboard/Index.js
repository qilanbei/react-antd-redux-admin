import React, { Component } from 'react';
import { Statistic, Card, Row, Col } from 'antd';
// import { } from '@ant-design/icons'

class Index extends Component {

    state = {

    }


    render() {
        return (
          <div className="site-statistic-demo-card">
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                </Card>
              </Col>
              <Col span={12}>
                <Card>

                </Card>
              </Col>
            </Row>
          </div>
        );
    }
}

export default Index;
