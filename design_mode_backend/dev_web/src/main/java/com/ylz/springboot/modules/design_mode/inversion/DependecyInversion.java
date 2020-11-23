package com.ylz.springboot.modules.design_mode.inversion;

/**
 * 依赖倒置原则
 *
 * Created by lhh on 2019/9/2.
 */
public class DependecyInversion {

    public static void main(String[] args) {
        /**
         * 方式一的客户端使用
         */
       Person person=new Person();
       person.receive(new Email());

        /**
         * 方式二的客户端使用---依赖倒转原则
         */
        Person_two person_two=new Person_two();
        person_two.receive(new Email_Two());

    }

}
 class Email{
    public String getInfo(){
        return "电子邮件信息：hello,world";
    }
}
 class Weixin{
    public String getInfo(){
        return "微信信息：hello,world";
    }
}
 class Duanxin{
    public String getInfo(){
        return "短信信息：hello,world";
    }
}
/**
 * 方式一
 * 人接收电子邮件
 *
 * 问题：email 被依赖，如果从微信，短信 获取消息,
 * 入参和email 关联了,想要实现微信,短信的 获取消息，要用重载。
 */
 class Person{
    //email 接收
    public void receive(Email email){
        System.out.println(email.getInfo());
    }
    //微信 接收
    public void receive(Weixin weixin){
        System.out.println(weixin.getInfo());
    }
    //短信 接收
    public void  receive(Duanxin duanxin){
        System.out.println(duanxin.getInfo());
    }
}

/*************************  方式二 依赖倒置原则实现功能 *****************/
/**
 * 接收接口
 */
interface IReceiver{
    public String getInfo();
}
/**
 * 邮件实现接收接口
 */
class Email_Two implements IReceiver{

    @Override
    public String getInfo() {
        return "电子邮件信息：哈哈";
    }
}
/**
 * 微信实现接收接口
 */
class Weixin_Two implements IReceiver{

    @Override
    public String getInfo() {
        return "微信信息：哈哈";
    }
}
class Person_two {
    //这里我们是对接口的依赖
    public void receive(IReceiver iReceiver){
        System.out.println(iReceiver.getInfo());
    }
}