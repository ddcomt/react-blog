import * as React from 'react'
const list = [
  {
    content:
      '基于react框架的个人博客前后端分离全栈系统，UI使用antd、flex布局兼容移动端;使用的技术有react，react-redux，react-router-dom，fetch，node，express，jsonwebtoken，passport等',
    title: 'React个人博客+后台管理',
    url: 'https://github.com/zhangwj0520/react-blog'
  },
  {
    content:
      '使用vue框架和elementUI实现的简易资金管理项目，分权限登录注册,添加收入支出账单,记录时间,根据日期查询收支情况.用到的技术有vue vue-cli3.0 vuex vue-router axios node等',
    title: 'VUE资金管理系统',
    url: 'https://github.com/zhangwj0520/vue-ele'
  },
  {
    content:
      '使用vue框架和bootstrap实现的一个简单的pizza点餐系统，实现用户登录注册,全局路由守卫，价格管理等功能；主要技术栈: vue-cli3.0 vuex vue-router axios',
    title: 'VUE-全栈点餐系统',
    url: 'https://github.com/zhangwj0520/pizza-app/'
  },
  {
    content:
      '基于node的课程管理系统,实现登录守卫，不同用户访问自己的数据；数据库使用MongoDB，登录守卫，密码加密存储，用到的主要的技术:node handlebars模板引擎 等',
    title: 'node课程管理系统',
    url: 'https://github.com/zhangwj0520/node-app'
  }
]
const Works = () => {
  return (
    <div className="works">
      <p className="title">作品集</p>
      <div className="cards">
        {list.map((item, index) => (
          <div key={index} className="item">
            <span className="work-title">{item.title}</span>
            <p>{item.content}</p>
            <a className="work-link" href={item.url} target="view_window">
              GitHub地址
            </a>
          </div>
        ))}
      </div>
      <p>
        <a
          href="https://github.com/fxy5869571"
          style={{
            color: '#fff',
            cursor: 'pointer'
          }}>
          gitHub查看
        </a>
      </p>
    </div>
  )
}

export default Works