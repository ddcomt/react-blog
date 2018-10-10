import * as React from 'react'
const outCircle = [
  { label: 'fetch', color: 'rgba(121,100,102,0.8)' },
  { label: 'antd', color: 'rgba(76,157,160,0.8)' },
  { label: 'less', color: 'rgba(66,66,66,0.8)' },
  { label: 'element', color: 'rgba(117,148,179,0.8)' },
  { label: 'git', color: 'rgba(71,83,94,0.8)' },
  { label: 'node', color: 'rgba(147,147,189,0.8)' },
  { label: 'webpack', color: 'rgba(121,100,102,0.8)' },
  { label: 'axios', color: 'rgba(121,100,102,0.8)' }
]
const innerCircle = [
  { label: 'react', color: 'rgba(179,164,140,0.8)' },
  { label: 'redux', color: 'rgba(171,209,220,0.8)' },
  { label: 'vue', color: 'rgba(238,215,163,0.8)' },
  { label: 'vuex', color: 'rgba(207,184,178,0.8)' }
]
const Skill = () => (
  <div className="skill">
    <p className="title">技能栈</p>
    <div className="skills">
      <div className="skill-circle">
        <div className="out-circle">
          {outCircle.map((item, index) => (
            <div
              key={index}
              className={`circle-item circle-item${index}`}
              style={{ backgroundColor: item.color }}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="inner-circle">
          {innerCircle.map((item, index) => (
            <div
              key={index}
              className={`innerCircle-item innerCircle-item${index}`}
              style={{ backgroundColor: item.color }}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="skill-intru">
        <p>1. 熟练使用DIV+CSS布局构建静态页面，了解HTML5和CSS3</p>
        <p>2. 熟练掌握JavaScript,并封装一些简单工具库</p>
        <p>3. 熟练使用jQuery,了解jQuery核心源码</p>
        <p>4. 掌握ES6中的Promise generator async等，</p>
        <p>5. 熟悉react框架,了解react/redux核心源码</p>
        <p>6. 了解MVVM设计模式，可以使用Vue,vue-router,vuex进行项目开发</p>
        <p>7. 熟练使用nodejs、express等实现后端接口等</p>
        <p>8. 熟悉前端自动化和工程化，熟悉git、webpack</p>
        <p>9. 熟悉mongoDB，了解Antd,Element UI, Bootsrap, canvas ,echarts</p>
        <p>10.熟悉基本linux命令, 熟悉HTTP协议</p>
      </div>
    </div>
  </div>
)

export default Skill