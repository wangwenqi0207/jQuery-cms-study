	let bigMirrorSingleton =(function(){ //自运行函数
		let instance;
		function Bigmirror(obj){ //构造放大镜函数
			this.boxDom=null; //设置展示图片的盒子 镜子 被展示区域dom元素为空
			this.mirrorDom=null;
			this.showDom=null;

			this.initData(); //初始化跟样式有关的数据
			for(let key in obj){ //实例的json属性数组赋给对象
				this[key]=obj[key];
			}
			this.createUI(); //创建HTML元素
			this.updateUI(); //根据上面的数据修改HTML元素的样式属性
			this.addEvent(); //添加事件
		}

		Bigmirror.prototype.initData=function(){ //初始化跟样式有关的方法
			this.width=100;
			this.height=100;
			this.left=0;
			this.top=0;
			this.opacity=0.5;
			this.bgColor="white";
			this.multiple=3; //放大多少倍
			this.direction="右";
		}

		Bigmirror.prototype.createUI=function(){ //创建dom元素
			this.mirrorDom=document.createElement("div");
			this.mirrorDom.style.cssText="position:absolute;display:none;";
			this.showDom=document.createElement("div");
			this.showDom.style.cssText="position:absolute;display:none;border:1px solid black;";
		}

		Bigmirror.prototype.updateUI=function(){
			this.mirrorDom.style.display="block";
			this.mirrorDom.style.left=this.left+"px";
			this.mirrorDom.style.top=this.top+"px";
			this.mirrorDom.style.width=this.width+"px";
			this.mirrorDom.style.height=this.height+"px";
			this.mirrorDom.style.backgroundColor=this.bgColor;
			this.mirrorDom.style.opacity=this.opacity;
			this.boxDom.appendChild(this.mirrorDom);

			let left1=this.left;
			let top1=this.top;
			switch(this.direction){
				case "右":left1=this.boxDom.offsetWidth+10;
				break;
				case "下":top1=this.boxDom.offsetHeight+10;
				break;
				default:;break;
			}
			//被展示部分的宽高是镜子的三倍 原图是box原图的三倍 不是被放大三倍
			//而是初始值就是三倍
			this.showDom.style.left=left1+"px";
			this.showDom.style.top=top1+"px";
			this.showDom.style.display="block";
			this.showDom.style.height=(this.height*this.multiple)+"px";
			this.showDom.style.width=(this.width*this.multiple)+"px";
			this.showDom.style.backgroundColor=this.bgColor;
			this.showDom.style.backgroundImage = getStyle(this.boxDom,"backgroundImage");
			this.showDom.style.backgroundSize = (this.boxDom.offsetWidth*this.multiple)+"px "+(this.boxDom.offsetHeight*this.multiple)+"px";
			this.boxDom.appendChild(this.showDom);//将showDom插入box的子元素
		}
//添加鼠标事件
		Bigmirror.prototype.addEvent = function(){
		this.boxDom.addEventListener("mouseout",this.outEvent,false);
		this.boxDom.addEventListener("mousemove",this.moveEvent,false);
	}

		Bigmirror.prototype.outEvent = ()=>{
		console.log("outEvent");		
		instance.mirrorDom.style.display  ="none";
		instance.showDom.style.display  ="none";
		instance.boxDom.removeEventListener("mouseout",this.outEvent,false);
		instance.boxDom.removeEventListener("mousemove",this.moveEvent,false);
	}

		Bigmirror.prototype.moveEvent =(event)=>{
			let evt=event || window.event; 
			//保证鼠标在放大镜中间 instance是放大镜 要做成单例
			instance.left = evt.pageX-instance.boxDom.offsetLeft-instance.width/2;
			instance.top = evt.pageY-instance.boxDom.offsetTop-instance.height/2;
			//设定边界
			if(instance.left<0){
			instance.left=0;
			}else if(instance.left>instance.boxDom.offsetWidth-instance.width){
			instance.left=instance.boxDom.offsetWidth-instance.width;
			}
		if(instance.top<0){
			instance.top=0;
			}else if(instance.top>instance.boxDom.offsetHeight-instance.height){
			instance.top=instance.boxDom.offsetHeight-instance.height;
			}

			instance.mirrorDom.style.left = instance.left+"px";
			instance.mirrorDom.style.top = instance.top+"px";
			//showDom相对于父元素定位在父元素的外面 即负的位置
			instance.showDom.style.backgroundPosition = (-1*instance.left*instance.multiple)+"px "+(-1*instance.top*instance.multiple)+"px";	
		}

		return { //getInstances单例
			getInstance:function(obj){
				if(instance==undefined){ //如果没有放大镜
					instance=new Bigmirror(obj); //那么就new一个实例
				}else{ //如果已经有 那么就把实例中的属性显示出来
					instance.initData();
					for(let key in obj){
						instance[key]=obj[key];
					}
					instance.updateUI();
					instance.addEvent();
				}
			}
		}
	})();