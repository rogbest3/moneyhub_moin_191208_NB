<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/router.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/cmm_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/main_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/auth_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/cookie.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/mypage.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/mypage_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/cus_info.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/sidebar.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/cus_info_chg.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/pwd_chg.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/auth_mgmt.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/alarm.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/ref_mgmt.js"></script>
</head>
<body>
	<div id="root">
	</div>
	<script>
		app.run('<%=application.getContextPath()%>')
	</script>
</body>
</html>