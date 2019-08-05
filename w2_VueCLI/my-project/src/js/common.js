/**
 * ESModule
 *  在模块内定义的变量都是局部变量
        *要想在外面获取这里的局部变量必须要导出  
 * import引入模块对象
 * export向模块对象添加属性
 * 
 * 修改属性名用as
 */

 let username = 'laoxie';

//  导出
//给模块对象添加password属性
 export let password = 123;
 //给模块对象添加username属相
 export {username};
 //给米块对象的default属相添加值
 export default username;