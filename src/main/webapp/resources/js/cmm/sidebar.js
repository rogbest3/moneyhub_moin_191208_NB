"use strict"
var sidebar = sidebar || {}
sidebar = (()=>{
	let _, js, nav_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		nav_vue_js = js + '/vue/nav_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(nav_vue_js)
		)
		.done(()=>{
			setContentView()
			mypage_move()
		})
		.fail(()=>{
			alert()
		})
	}
	let setContentView =()=>{
		$('#root div.themoin-main')
		.html(nav_vue.sidebar_cus())
		cus_info.onCreate()
	}
	
	let mypage_move =()=>{
		$('#cus_info')
		.click(()=>{
			cus_info.onCreate()
		})
		
		$('#pwd_chg')
		.click(()=>{
			pwd_chg.onCreate()
		})
		
		$('#auth_mgmt')
		.click(()=>{
			auth_mgmt.onCreate()
		})
		
		$('#alarm')
		.click(()=>{
			alarm.onCreate()
		})
		
		$('#ref_mgmt')
		.click(()=>{
			ref_mgmt.onCreate()
		})
	}
	return { onCreate }
})()