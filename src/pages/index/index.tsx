import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import { AtList, AtListItem, AtButton } from "taro-ui"
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
  }

  constructor(props){
    super(props);
    this.state = {      
      // todos: [
      //   { title: '利拉德50分+超远三分压哨绝杀', done: false },
      //   { title: '利拉德超神三分绝杀 多角度回顾利拉德绝杀瞬间', done: false},
      //   { title: '天生大心脏！利拉德超远绝杀雷霆vs读秒干翻火箭', done: false}
      // ],
      todos: Taro.getStorageSync('todos') || [],
      inputValue: ''
    }
  }

  // 显示输入内容
  handleInput = (e) => {
    console.log(e.detail.value);
    this.setState({
      inputValue: e.detail.value
    })
  }

  // 添加列表
  handleAdd = () => {
    if(this.state.inputValue){
      this.setState({
        todos: [...this.state.todos, {title: this.state.inputValue, done: false}],
        inputValue: ''
      },this.saveStorage)
    }else{
      return false;
    }
  }

  // 数据缓存
  saveStorage = () => {
    Taro.setStorageSync('todos', this.state.todos);
  }


  // switch切换
  handleChange = (e, index) => {
    console.log(e, index)
    const todos = [...this.state.todos];
    todos[index].done = e.detail.value;
    this.setState({
      todos
    })
  }

  // 删除列表
  handleDelete = (index) => {
    console.log(index)
    const todos = [...this.state.todos];
    console.log(todos);
    todos.splice(index, 1);
    this.setState({
      todos
    },this.saveStorage)
  }


  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>当前环境：{Taro.getEnv()}</Text>
        <View>
          <View className='at-row'>
            <View className='at-col at-col-8'>
              <Input className="input" value={this.state.inputValue} onChange={this.handleInput}></Input>
            </View>
            <View className='at-col at-col-4'>
            <AtButton type='primary' size='small' onClick={this.handleAdd}>添加</AtButton>
            </View>
          </View>
        </View>
        {
          this.state.todos.map((item, index) => {
            // return <View className="list" key={index}>{item.title}</View>

            return <View className='at-row'>

                      <View className='at-col at-col-9'>
                        <AtList>
                          <AtListItem
                            className = {{'okDone': item.done}}
                            title={item.title}
                            isSwitch
                            switchIsCheck = {item.done}
                            onSwitchChange={(e) => this.handleChange(e, index)}
                          />
                        </AtList>
                      </View>
                      <View className='at-col at-col-3'>
                        <AtButton className="delete" type='secondary' size='small' onClick={() => this.handleDelete(index)}>删除</AtButton>
                      </View>
                    </View>

          })
        }
      </View>
    )
  }
}
