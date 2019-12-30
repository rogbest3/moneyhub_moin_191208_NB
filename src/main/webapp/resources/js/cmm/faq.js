"use strict"
var faq = faq || {}
faq =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, faq_vue_js, main_class
	
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		faq_vue_js = js + '/vue/faq_vue.js'
		main_class = x
	}
	let onCreate =x=>{
		init(x)
		$.when(
			$.getScript(faq_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('.' + main_class)
		.html(faq_vue.faq())
		$('html').scrollTop(0);
	}

	return { onCreate }
})()