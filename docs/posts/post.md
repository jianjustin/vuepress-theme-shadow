---
layout: post
title: C语言学习笔记
date: 2018-10-10
categories: C语言
---



## 环境搭建

* mac
    * 检查mac的gcc版本 - `gcc -v` 
    * 添加运行配置
       [参考](https://www.jianshu.com/p/b3d10ae1ecba)
    * 集成开发环境clion安装

## 基础语法   

  * 数据类型
    1. 基本类型
      
      `char`,`short`,`int`,`long`,`double`,`float`
      
      * 各基本数据类型所占字节数比较
      * 如何定义常量
          1. 使用 #define 预处理器。
          2. 使用 const 关键字
      * 什么是储存类
        
         >存储类定义 C 程序中变量/函数的范围（可见性）和生命周期。这些说明符放置在它们所修饰的类型之前;包括`auto`,`register`,`static`,`extern`
         
         * `auto` - auto 存储类是所有局部变量默认的存储类
         * `register` - register 存储类用于定义存储在寄存器中而不是 RAM 中的局部变量
         * `static` - static 存储类指示编译器在程序的生命周期内保持局部变量的存在
         * `extern` - extern 存储类用于提供一个全局变量的引用，全局变量对所有的程序文件都是可见的
      
    2. 枚举类型
       * 定义枚举类型
       
                 enum DAY
                 {
                    MON=1, TUE, WED, THU, FRI, SAT, SUN
                 };
             
       * 定义枚举变量
       
                 enum DAY day;
    3. void类型
    4. 派生类型
    
  * 运算符
    1. 算术运算符
    2. 关系运算符
    3. 逻辑运算符
    4. 位运算符
    5. 赋值运算符
    6. 杂项运算符

  * 运算逻辑
    * 判断
      1. if...else 语句
      2. switch 语句
      
    * 循环
      1. while 循环
      2. for 循环	
      3. do...while 循环
    
    ><span style="color:red">比较break,continue,goto的区别</span>
    
  * 函数
    * 函数组成
      * 返回类型
      * 函数名称
      * 参数
      * 函数主体
    * 函数定义
      
            return_type function_name( parameter list )
		     {
		        body of the function
		     }
  * 数组
    * 数组声明`type arrayName [ arraySize ];`
    * 数组初始化`double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};`
    * 数组访问`double salary = balance[9];`
  * 指针

  >指针是一个变量，其值为另一个变量的地址，即，内存位置的直接地址<br>
  >
  > >  `type *var-name;`

  * 结构体
    
    * 结构体定义
      
			struct tag { 
		​	    member-list
		​	    member-list 
		​	    member-list  
		​	    ...
		​	} variable-list ;
		
	* 共用体定义

			union [union tag]
		​	{
		​	   member definition;
		​	   member definition;
		​	   ...
		​	   member definition;
		​	} [one or more union variables];


​    
  * I/O文件
    * 文件打开
        ​    

            FILE *fopen( const char * filename, const char * mode );

    * 文件关闭

            int fclose( FILE *fp );

    * 文件写入

            int fputc( int c, FILE *fp );

    * 文件读取

            int fgetc( FILE * fp );








