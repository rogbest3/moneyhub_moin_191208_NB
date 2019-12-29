"use strict"
var mypage = mypage || {}
mypage =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cmm_vue_js, nav_vue_js, main_vue_js, mypage_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cmm_vue_js = js + '/vue/cmm_vue.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		mypage_vue_js = js + '/vue/mypage_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cmm_vue_js),
			$.getScript(nav_vue_js),
			$.getScript(main_vue_js),
			$.getScript(mypage_vue_js)
		)
		.done(()=>{
			setContentView()
			
			$('#mgmt')
			.click(()=>{
				sidebar.onCreate()
			})
			
			$('#logout')
			.click(()=>{
				app.onCreate()
			})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		$('#root')
		.html(nav_vue.logined_nav())
		.append(main_vue.logined_main())
		.append(cmm_vue.footer())
	}
	
	
	
	return { onCreate }
})()