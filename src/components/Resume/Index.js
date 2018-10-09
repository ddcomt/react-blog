import * as React from 'react'

const Index = () => (
  <div className="index" key="index">
    <img
      className="header-img"
      src="http://pg9vj30g0.bkt.clouddn.com/luffy.jpg"
      alt="header-img"
      key="img"
    />
    <p className="title" key="title">
      心想到，话说到，事做到，尽己所能，高调做事，低调做人。
    </p>
    <div className="split" key="split" />
    <p key="name">我叫张为杰</p>
    <p key="work">一名前端开发爱好者</p>
    <p key="emil">邮箱:576579227@qq.com</p>
    <p key="tel">电话:18803129525</p>
  </div>
)

export default Index