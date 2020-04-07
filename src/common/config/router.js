let routes = [{ 
	redirect: {
		name: "index"
	},
	component: 'layout',//主布局
	children: [{   
		component: 'index/index'//默认首页
	},{
		component: 'shop/goods/list'//商品列表
	}]
}, {
	component: 'login/index' //登录
}, {
	path: '*',
	redirect: {
		name: "index"
	}
}]

//获取路由信息方法
let getroutes = function(){
	createRoute(routes)
	return routes
}

//自动生成路由
function createRoute(arr){
	for(let i = 0;i<arr.length;i++){
		if(!arr[i].component) return
		//去除index
		let val = getvalue(arr[i].component)
		//自动生成name
		arr[i].name = arr[i].name || val.replace(/\//g,"_")
		//自动生成path
		arr[i].path = arr[i].path || `/${val}`
		//自动生成component
		let componentfun = import(`../../views/${arr[i].component}.vue`)
		arr[i].component = ()=>componentfun
		if(arr[i].children && arr[i].children.length>0){
			createRoute(arr[i].children)
		}
	}
}
//去除index
function getvalue(str){
	// 列 str = login/index
	//获取最后一个/的索引
	let index = str.lastIndexOf('/')
	//获取最后一个/后面的值
	let val = str.substring(index+1,str.length)
	//判断是不是结尾
	if(val=="index"){
		return str.substring(index,-1)
	}
	return str
}
console.log(routes)
export default getroutes()
