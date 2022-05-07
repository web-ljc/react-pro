/* 
  1类中的构造器不是必须的，要对实例进行一些初始化的操作，添加指定属性时才写
  2如果A类继承了B类，且A类写了构造器，那么A类构造器中的super是必须要调用
  3类中所定义的方法，都是放在了类的原型对象上
*/
// 创建一个Person类
class Person {
  // 构造器方法
  constructor(name, age) {
    // 构造器中的this是谁？ -- 类的实例对象
    this.name = name
    this.age = age
  }
  // 一般方法, 放在了类的原型对象上，供实例使用
  speak() {
    // 通过person实例，调用方法时，方法中的this就是Person实例
    console.info(`我叫${this.name}，我的年龄${this.age}`)
  }
}
// 创建一个student类，继承Person类
class Student extends Person {
  // 继承父级数据，要使用super
  constructor(name, age, grade){
    super(name, age)
    this.grade = grade
  }
  // 重写从父级继承过来的方法
  speak() {
    console.info(`我叫${this.name}，我的年龄${this.age},正在读${this.grade}`)
  }
  study() {
    console.info('我很努力学习')
  }
}

const p1 = new Person('zs', 20)
// 实例p1的构造函数constructor
const p2 = new p1.constructor('ls', 30)

// console.info('p1 =>',p1)
// console.info('p2 =>',p2)
// p1.speak()
// p2.speak()

const s1 = new Student('小张', 10, '初一')
console.info('s1 => ',s1)
s1.speak()
s1.study()

