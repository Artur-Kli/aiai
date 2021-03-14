import React from 'react'
import {DingdingOutlined, SmileTwoTone} from '@ant-design/icons'
import { Button } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

import styles from './app.module.scss'

export function App() {
  return (
    <div className="container">
        <h1>Hello From Frontend-Client</h1>
      <h2 className={styles.test_ff}>Test other font-family</h2>
      <DingdingOutlined style={{ fontSize: '10em', color: '#08c' }} />
      <SmileTwoTone twoToneColor="#08c" style={{ fontSize: '7em', color: 'rgba(255,255,255.6)' }} />
      <DingdingOutlined style={{ fontSize: '10em', color: '#08c', transform: 'scaleX(-1)' }} />

      <Button danger>Default</Button>

      <hr/>
      <br/><br/>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>

    </div>
  )
}

export default App
