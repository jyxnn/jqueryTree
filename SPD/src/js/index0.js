var itemsObj = {
	1:{
		title:'浦发银行鑫盈利系列365天纯债1号，业绩比较基准4.7%，很心水，怎么办？',
		answers:[
			{
				name:'A',
				des:'老司机，带带我',
				score:0 // 得分
			},{
				name:'B',
				des:'先告诉我风险多高',
				score:1
			}
		],
		resdes:{
			ok:'B',
			des:'理财非存款，市场有风险，投资需谨慎，广大投资者一定要选择匹配自身风险偏好和承受能力的理财产品哦。'
		}
	},
	2:{
		title:'FOF是什么？',
		answers:[
			{
				name:'A',
				des:'一篮子鸡',
				score:0 // 得分
			},{
				name:'B',
				des:'一篮子基金',
				score:1
			}
		],
		resdes:{
			ok:'B',
			des:'FOF（Fund of Funds），即基金中的基金。FOF将多只基金捆绑在一起，投资FoF等于同时投资多只基金，但比分别投资的成本大大降低了。'
		}
	},
	3:{
		title:'快三十岁，还没有存款，咋整？',
		answers:[
			{
				name:'A',
				des:'去公安局修改年龄',
				score:0 // 得分
			},{
				name:'B',
				des:'开源节流，学会理财',
				score:1
			}
		],
		resdes:{
			ok:'B',
			des:'存钱不等于理财，但是要学会理财，一定要先懂得如何进行合理的财富规划。当财富积累到一定量之后，理财对财富的增值效果将会非常喜人。'
		}
	},
	4:{
		title:'已知：浦发银行鑫盈利系列182天纯债1号为固定持有期产品，到期自动还款<br>问：产品到期应该做什么？',
		answers:[
			{
				name:'A',
				des:'忘了赎回怎么办？不行，我要上个闹钟5点起床',
				score:0 // 得分
			},{
				name:'B',
				des:'睡到自然醒，等自动还款',
				score:1
			}
		],
		resdes:{
			ok:'B',
			des:'该产品固定持有期182天，持有期满自动还款，不用持有人再亲自赎回，省心省事儿。'
		}
	},
	5:{
		title:'以下哪个不是对“固定持有期”的解释？',
		answers:[
			{
				name:'A',
				des:'麦子熟了，到丰收的时候了',
				score:0 // 得分
			},{
				name:'B',
				des:'一周上班5天，多一天少一天都不行',
				score:0
			},{
				name:'C',
				des:'该毕业了，学校宿舍不让住了',
				score:0
			},{
				name:'D',
				des:'以上都不对',
				score:1
			}
		],
		resdes:{
			ok:'D',
			des:'购入固定持有期的理财产品，需要按照固定天数持有该产品，持有期满后自动还款，无需担心错过赎回。例如，浦发银行的悦盈利系列理财产品，固定持有期限有35天、90天、123天、184天、366天等多种安排，各种款式各种花色，任君选择。'
		}
	},
	6:{
		title:'现金管理类产品到底是什么鬼？',
		answers:[
			{
				name:'A',
				des:'赎回本金实时到账“灵活鬼”，如天添盈增利1号',
				score:0 // 得分
			},{
				name:'B',
				des:'1万起售“开心鬼”，如天添盈增利2号',
				score:0
			},{
				name:'C',
				des:'每7天自动滚动 “机灵鬼”，如周周享盈增利1号',
				score:0
			},{
				name:'D',
				des:'以上都是',
				score:1
			}
		],
		resdes:{
			ok:'D',
			des:'现金管理类理财产品大多申赎起点低，流动性近似于活期储蓄，申购和赎回交易都非常方便。具有持有期长短随心、交易灵活、设置业绩比较基准便于掌握运作情况等特点，特别适合用来管理短期闲置资金。'
		}
	},
	7:{
		title:'行业“黑话”中的“央妈”是指？ ',
		answers:[
			{
				name:'A',
				des:'中央银行（央行）',
				score:1 // 得分
			},{
				name:'B',
				des:'驰名中外的下饭神器“老干妈”',
				score:0
			}
		],
		resdes:{
			ok:'A',
			des:'中央银行，是一国最高货币金融管理机构，在各国金融体系中居于主导地位。我国的中央银行是中国人民银行（简称央行或人行）。中国银行（简称中行）是国有商业银行之一，与建行、农行、工商银行等类似。'
		}
	},
	8:{
		title:'下面对“负利率”解读，哪一个更准确？',
		answers:[
			{
				name:'A',
				des:'强盗!我找你借钱是你的荣幸，借100还80',
				score:0 // 得分
			},{
				name:'B',
				des:'倒霉!养了一年的猪," 通胀"咬一口,哦豁,白养了',
				score:1
			}
		],
		resdes:{
			ok:'B',
			des:'负利率，是指物价飞涨，存银行的利率赶不上通货膨胀率，导致银行存款利率实际为负，故而原本10000元存银行一年以后，加上利息所得，能买的东西还是越来越少。'
		}
	},
	9:{
		title:'理财产品的流动性是什么意思？',
		answers:[
			{
				name:'A',
				des:'获得现金的便利程度，比如赎回资金到账速度。',
				score:1 // 得分
			},{
				name:'B',
				des:'确认过眼神，是水做的人',
				score:0
			}
		],
		resdes:{
			ok:'A',
			des:'流动性是指你能够获得现金的便利程度。在所有的金钱种类中，现金是最具有流动性的，因为可以立即得到它。相反，诸如房产、股票或者退休金账户里的资金，它们的流动性是比较差的，因为当你需要钱的时候很难在短时间内变现，甚至强制变现的时候可能会遭受损失。'
		}
	},
	10:{
		title:'熊猫债券，是什么？',
		answers:[
			{
				name:'A',
				des:'熊猫饲养员才能买的债券',
				score:0 // 得分
			},{
				name:'B',
				des:'境外机构在中国发行的债券,得有中国特色',
				score:1
			}
		],
		resdes:{
			ok:'B',
			des:'熊猫债券”是指国际多边金融机构在华发行的人民币债券。根据国际惯例，国外金融机构在一国发行债券时，一般以该国最具特征的吉祥物命名。2005年9月28日，国际多边金融机构首次获准在华发行人民币债券， 财政部部长金人庆把首发债券命名为“熊猫债券”。'
		}
	}
}
var subjectnum = '';

function createSubject6 (arr){
	var resSubject6 = [];
	for(var i = 0;i<arr.length;i++){
		resSubject6.push(itemsObj[arr[i]])
	}
	saveData('subject6',resSubject6)
}

// 题目相关操作初始化
function subjectoptinit(arr){
	var obj = {allscore:0,answerd:false,prized:false,prizeOpt:''}; // 默认得分
	for(var i = 1;i<=6;i++){
		obj[i] = {
			id:arr[i-1],
			opt:false, // 操作与否
			sel:'-1',  // 选中的答案索引，0开始
			style:''	// 对应的样式
		}
	}
	sessionStorage.setItem('myopt',JSON.stringify(obj))
}

// phone 规则
var regPhone = /^1[0-9]{10}$/;
var regQQ = /^[1-9][0-9]{4,14}$/;
// alert-fun
function alertInfo(message,type){
	weui.alert(message, function () {
		if(type=='toindex'){
			window.location.reload();
		}
    }, {
        title: ''
    });
}

// 接口API
var api = './';  
// 部署 './''
//本地  'answer/'



function saveData(key,obj){
	sessionStorage.setItem(key,encode64(JSON.stringify(obj)))
}
function getData(key){
	return JSON.parse(decode64(sessionStorage.getItem(key)))
}
wxshare();
//微信分享
function wxshare(){
	$.ajax({
		url: api+'api.php?action=jssdk',
		dataType:'json'
	}).done(function(res){
		var signPackage = {
		    appId: res.appId,
		    timestamp : res.timestamp,
		    nonceStr : res.nonceStr,
		    signature : res.signature
		};
		// alert('-appId-'+res.appId + '-timestamp-'+ res.timestamp + '-nonceStr-'+res.nonceStr+'-signature-'+res.signature)
		wx.config({
		    debug: false,
		    appId: signPackage.appId,
		    timestamp: signPackage.timestamp,
		    nonceStr: signPackage.nonceStr,
		    signature: signPackage.signature,
		    jsApiList: [
		      // 所有要调用的 API 都要加到这个列表中
		      'onMenuShareTimeline',
		      'onMenuShareAppMessage',
		    ]
		  });
		 wx.ready(function () {
		 	var title = '年终财商大考核';
		 	var desc = '拯救12.12  拥抱圣诞君'
		 	var link = window.location.href;
		 	var img = 'http://cdn.46zr.cn/answer/img/share.jpg';
		    // 在这里调用 API
		    wx.onMenuShareTimeline({ 
		        title: title, // 分享标题
		        desc: desc, // 分享描述
		        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		        imgUrl: img, // 分享图标
		        success: function () {
		          // 设置成功
		        }
		     });

	        wx.onMenuShareAppMessage({ 
		        title: title, // 分享标题
		        desc: desc,
		        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		        imgUrl: img, // 分享图标
		        success: function () {
		          // 设置成功
		    	}
		    })

		  });
	})
}


$(function(){
	// fetch 开始测试，是否三次
	function fetchlogin(phone){
		$.ajax({
			url:api+'api.php?action=login',
			type:'post',
			data:{
				mobile:phone
			},
			dataType:'json'
		}).done(function(res){
			if(res.code==200){
				fetchSubject();
			}else if(res.code == 400){
				alertInfo('请输入正确的手机号')
			}else if(res.code == 401){
				alertInfo('今日答题次数已满3次，请明天再来吧！','toindex')
			}
		})
	}
	// 获取6道题目
	function fetchSubject(){
		$.ajax({
			url: api + 'api.php?action=questions',
			dataType:'json'
		}).done(function(res){
			var random6 = res.data.questions;
			createSubject6(random6)
			subjectoptinit(random6);
			subjectnum = 1;
			//题目显示
			//答题弹层隐藏
			$('.anwser-box .mask-prize').hide();
			htmlHbs();
		})
	}
	//开始音乐
	function startVoice(){
		$('#bg-music')[0].play();
		$('.voice-icon-start').show();
		$('.voice-icon-close').hide();
	}
	//暂停音乐
	function stopVoice(){
		$('#bg-music')[0].pause();
		$('.voice-icon-start').hide();
		$('.voice-icon-close').show();
	}
	$('.voice-icon-start').click(function(){
		stopVoice();
	})
	$('.voice-icon-close').click(function(){
		startVoice();
	})
	// ----首页----
	// 规则
	$('.rule-btn').click(function(){
		$('.mask').show();
		$('.rule-img').show();
	})
	$('.close').click(function(){
		$('.mask').hide();
		$('.rule-img').hide();
	})
	// 开始测试
	$('.test-btn').click(function(){
		//音乐响起
		startVoice();
		$('.mask').show();
		$('.phone-input').show();
	})
	// 确认测试
	$('.btn-ok').click(function(){
		var phone = $('.input-val').val();
		if(regPhone.test(phone)){
			// 获取题库
			sessionStorage.setItem('phone',phone)	
			// 调接口
			fetchlogin(phone)
		}else{
			alertInfo('请输入正确的手机号')
		}
		console.log('value',phone);
		
	})

	// 答题页---
	// console.log('subjectnum',subjectnum)
	
	// 奖品类型
	var priceType = {
		1: 'prize1',
		2: 'prize2',
		3: 'prize3',
		4: 'prizeSpecial',
		5: 'prize0',
	}

	// htmlHbs();
	// 题目渲染
	function htmlHbs(){
		$('.mask').hide();
		$('.index-box').hide();
		$('.result-box').hide();
		$('.anwser-box').show();
		// 解决刷新操作，该题已操作数据丢失 
		var myopt = JSON.parse(sessionStorage.getItem('myopt'))

		// 原点高亮
		$('.dots li').removeClass('cur-dot');
		$('.dots li').eq(subjectnum-1).addClass('cur-dot');
		// 为最后一道题，更改按钮为提交
		if(subjectnum == 6){
			$('.anwser-box .footer-answer img').attr('src','img/submit-subject.png').removeClass('next-subject-btn').addClass('submit-subject-btn');
			fetchInitState();
		}else{
			$('.anwser-box .footer-answer img').attr('src','img/next-subject.png').removeClass('submit-subject-btn').addClass('next-subject-btn');
		}
		
		// 获取数据
		var subjectInfo = getData('subject6')[subjectnum-1]; 
		subjectInfo.resOk = subjectInfo.resdes.ok;
		subjectInfo.resDes = subjectInfo.resdes.des;	
		var source = $('#hbsSubject').html();
		var tpl = Handlebars.compile(source);
		var html = tpl(subjectInfo);
		$('#subject').html(html)
		// 判断是否操作过,操作过，对应的选项样式修改，并展示答案说明
		// console.log('my----',subjectnum,myopt[subjectnum],myopt[subjectnum].opt);
		if(myopt[subjectnum].opt){
			var index = myopt[subjectnum].sel;
			$('#subject li').eq(index).addClass(myopt[subjectnum].style)
			$('#subject .des-answers').show();
		}
	}	
	// 选择答案
	$('#subject').on('click','li',function(){
		console.log('click');
		var myopt = JSON.parse(sessionStorage.getItem('myopt'))
		// 判断是否未点击过
		if(!myopt[subjectnum].opt){
			// 更新为点击过
			myopt[subjectnum].opt = true;
			var score = $(this).data('score');
			var index = $(this).index(); // 返回同辈中的索引
			if(score == 1){
				myopt[subjectnum].sel = index;
				myopt[subjectnum].style = 'answer-success' 
				$(this).addClass('answer-success')
			}else{
				myopt[subjectnum].sel = index;
				myopt[subjectnum].style = 'answer-fail'
				$(this).addClass('answer-fail')
			}
			$('.anwser-box .des-answers').show();
			myopt.allscore = (myopt.allscore-0) + score;
			// 存储当前选中的答案
			updateSessionStorage(myopt);
		}else{
			console.log('caozuoguo')
		}
	});
	// 下一题
	$('.anwser-box').on('click','.next-subject-btn',function(){
		// 进行过选择，进行跳转
		var myopt = JSON.parse(sessionStorage.getItem('myopt'))
		// console.log('点击下一题')
		if(myopt[subjectnum].opt){
			subjectnum++;
			htmlHbs();
		}else{
			console.log(222)
		}
	})
	// 提交操作
	$('.anwser-box').on('click','.submit-subject-btn',function(){
		console.log('提交答案')
		var myopt = JSON.parse(sessionStorage.getItem('myopt'))
		myopt.answerd = true; // 存储答题操作
		updateSessionStorage(myopt);
		fetchSubmit(); // 显示答题结果（未中奖、中奖礼盒）
	})
	
	// 答题失败结果
	$('.btn-again').click(function(){
		// login ->subject
		fetchlogin(sessionStorage.getItem('phone'))
	})
	$('.btn-toindex').click(function(){
		// showResultPage();
		window.location.reload();
	})
	$('.btn-tores').click(function(){
		showResultPage();
	})
	
	// 答题成功结果
	$('.btn-prize-cj').click(function(){
		// 抽奖  已抽过 结果页，并销毁当前页面
		$(this).addClass('doudon'); // 抖动效果
		fetchPrize();
	})
	// 抽奖页面样式
	function prizeOptHtml(type){
		$('.'+ priceType[type]).show(); 
		// $('.mask').css('opacity',.95);
		$('.res-success').hide();
	}
	// 抽奖页面的确认按钮操作
	$('.btn-prize1').click(function(){
		var name = $('.prize1 .name').val();
		var qq = $('.prize1 .qq').val();
		var address = $('.prize1 .address').val();
		if(regInfo(name,address,qq)){
			fetchSubmitUserInfo({name:name,qq:qq,address:address})
		}
	})
	$('.btn-prize2').click(function(){
		var name = $('.prize2 .name').val();
		var address = $('.prize2 .address').val();
		if(regInfo(name,address,-1)){
			fetchSubmitUserInfo({name:name,address:address})
		}
	})
	$('.btn-prize3').click(function(){
		var name = $('.prize3 .name').val();
		var address = $('.prize3 .address').val();
		if(regInfo(name,address,-1)){
			fetchSubmitUserInfo({name:name,address:address})
		}
	})
	$('.btn-prizeSpecial').click(function(){
		showResultPage();
	})

	function showResultPage(){
		$('.index-box').hide();
		$('.mask').hide();
		$('.anwser-box').hide();
		$('.result-box').show();
	}
	// 校验
	function regInfo(name,address,qq){
		if(!name){
			alertInfo('请输入您的姓名');
			return false;
		}
		if(qq!=-1&&!regQQ.test(qq)){
			alertInfo('请输入正确的QQ号码');
			return false;
		}
		if(!address){
			alertInfo('请输入您的地址');
			return false;
		}
		return true;

	}
	// 更新题目操作变量的值
	function updateSessionStorage(obj){
		sessionStorage.setItem('myopt',JSON.stringify(obj))
	}
	// fetch 提交答案
	function fetchSubmit(){
		console.log('tijiaodaan')
		var myopt = JSON.parse(sessionStorage.getItem('myopt'))
		// 数据处理
		var params = [];
		var selType = ['A','B','C','D']
		for(var key in myopt){
			if(myopt[key].id){
				var item = myopt[key];
				params.push({id:item.id,answer:selType[item.sel]})
			}
		}
		console.log('params',params)
		$.ajax({
			url:api+'api.php?action=answer',
			type:'post',
			data:{answer:params},
			dataType:'json'
		}).done(function(res){
			if(res.code == 200){
				var resdata = res.data;
				$('.mask').show();
				// 存储是否中奖
				if(resdata.right_count == 6){
					myopt.prized = true;
					// 全答对
					$('.anwser-box .res-success').show();
				}else{
					myopt.prized = false;
					$('.anwser-box .res-fail').show();
				}
				updateSessionStorage(myopt);
			}else{
				alertInfo(res.msg,'toindex')
			}
			console.log('ianswers',res);
		})
	}
	// fetch 获取奖品
	function fetchPrize(){
		var myopt = JSON.parse(sessionStorage.getItem('myopt'))
 		$.ajax({
			url:api+'api.php?action=prize',
			dataType:'json'
		}).done(function(res){
			if(res.code == 200){
				var type = res.data.prize.yes_id;
				// 存储中了几等奖
				myopt.prizeOpt = type;
				updateSessionStorage(myopt);
				prizeOptHtml(type)
			}else{
				alertInfo(res.msg,'toindex')
			}
		})
	}
	// fetch-model 最后一道题页面状态初始化（是否答题、是否中奖 是否抽奖 中了几等奖）
	function fetchInitState(){
		var myopt = JSON.parse(sessionStorage.getItem('myopt'))
		if(myopt.answerd){
			$('.mask').show();
			if(myopt.prized){ // 是否中奖
				if(myopt.prizeOpt>0){ // 是否抽奖
					prizeOptHtml(myopt.prizeOpt); // 中奖结果页面显示
				}else{
					// 礼盒
					$('.anwser-box .res-success').show();
				}
			}else{
				// 未中奖
				$('.anwser-box .res-fail').show();
			}
		}else{
			// 未答题，只显示题目
		}
	}
	// fetch 提交用户信息
	function fetchSubmitUserInfo(data){
		$.ajax({
			url: api + 'api.php?action=address',
			type:'post',
			data:data,
			dataType:'json'
		}).done(function(res){
			if(res.code==200){
				showResultPage();
			}else{
				alertInfo(res.msg,'toindex')
			}
		})
	}
	
})