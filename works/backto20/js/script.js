$(document).ready(function(){
	//隱藏其他問題，只顯示第一題
	$(".quiz").hide();
	$(".quiz:first").addClass("curr").show();
	
	//記錄答yes的次數
	var yesN = 0;//答yes的次數
	$("#yes").click(function(){
		yesN++
	});
	
	//按下答案之後
	var n = 2;//初始化答題計數
	$("#options").click(function(){
		//隱藏當前的題目，顯示下一題
		$(".curr").hide();
		$(".curr").next(".quiz").show().addClass("curr");
		$(".curr:first").removeClass("curr");
		
		//增加計數
		$("#progress").html("<span>" + (n++) + "/8</span>");
		
		//根據答yes次數轉址
		if (n==10){
			window.location.replace("result.html#" + yesN);
			$("#progress").html("<span>頁面載入中...</span>")
		}
	});
	
	//處理結果頁面內容
	//根據網址結尾帶的參數顯示結果
	var u = window.location.href;
	var v = u.split('#',2)[1];
	
	switch (true){
		case (v < 3):
		$("#avator").html("<img src='img/avatorB.png'>");
		$("#result").html("<h2>沈夢君│演員：歸亞蕾</h2><h3>項前進的奶奶，七十歲的嗆辣老奶奶。</h3><p>刀子口豆腐心的你，其實比想像中更友善、情感更豐富，有時甚至很容易心軟。</p><p>平時總用嚴厲的面具來隱藏心中的良善，你常常會感到缺乏安全感，接受已發生的事實，不要過度逞強是改變的重要因素之一！</p>");
		break;
		
		case (v >2 && v <5):
		$("#avator").html("<img src='img/avatorC.png'>");
		$("#result").html("<h2>譚子明│演員：陳柏霖</h2><h3>時尚、挑剔、傲嬌的音樂總監。</h3><p>你擁有迷人的特質，常有讓人感覺如謎團般吸引人的魅力；面對心中的夢想時，你通常會選擇耐心地培養實力、或是獨自鑽研創造並自律的規範自己。</p><p>但是學習如何喜歡自己是很重要的，當你試著自我探索，在你心中潛伏的雄心壯志就會顯現出來。</p>");
		break;
		
		case (v >4 && v <7):
		$("#avator").html("<img src='img/avatorA.png'>");
		$("#result").html("<h2>孟麗君│演員：楊子姍</h2><h3>沈夢君重返20歲後的隱藏身份，化名為「孟麗君」來致敬鄧麗君。</h3><p>你擁有敏銳的品味，個性古靈精怪又惹人喜愛，面對各種狀況總是全力以赴，常常是團體中的中心人物、佼佼者。</p><p>如果你能試著去培養穩重、內斂的思考，將會得到更深層的感官回饋和蛻變。</p>");
		break;
		
		case (v >6 && v <9):
		$("#avator").html("<img src='img/avatorD.png'>");
		$("#result").html("<h2>項前進│演員：鹿晗</h2><h3>沈夢君的孫子，青春熱血的樂隊主唱。</h3><p>你常有著像孩子般的天真爛漫，充滿想像力又具獨特性，喜歡追求輕鬆的樂趣、隨遇而安。</p><p>充滿玩心的你，常會讓人懷疑你是否與現實社會脫節，但是只要專注於自己想做的事情，或許就能發現心中最偉大的夢想。</p>");
		break;
	}
	
	//email符合格式才顯示送出按鈕
	$("#email").keypress(function(){
		$("#alert1").hide();
		var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
		if (reg.test($("#email").val().trim()) == false){
			$("#alert2").show();
		}else{
			$("#alert2").hide();
			$("#next-disable").hide();
			$("#next-active").show();
		}
	});
	
	//處理例外狀況
	$("#next-disable").click(function(){
		$("#alert1").show();
	});
	
	//按下送出按鈕時隱藏表單並顯示完成資訊
	$("#next-active").click(function(){
		window.location.replace("result2.html#" + window.location.href.split('#',2)[1]);
	});
	
	//隱藏完成資訊
	$("#close-btn, #filter").click(function(){
		$("#filter").hide();
	});
});

