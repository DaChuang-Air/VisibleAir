(function(exports){
			
			var infoWindow, map, level = 4,
			// 地图中心点
			center = {lng: 107.666015, lat: 40.279525},
			features = [{type: "Marker", name: "安阳", desc: "河南省 517.28万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 114.392052, lat: 36.101128}},
				{type: "Marker", name: "保定", desc: "河北省 1119.44万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 115.458841, lat: 38.876802}},
				{type: "Marker", name: "鞍山", desc: "辽宁省 364.59万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 122.994947, lat: 41.10833}},
				{type: "Marker", name: "宝鸡", desc: "陕西省 371.67万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 107.237806, lat: 34.362497}},
				{type: "Marker", name: "包头", desc: " 内蒙古自治区 265.04万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 109.840708, lat: 40.65655}},
				{type: "Marker", name: "北海", desc: "广西自治区 153.93万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 109.120331, lat: 21.480946}},
				{type: "Marker", name: "北京", desc: "北京市 1961.24万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 116.40564, lat: 39.894987}},
				{type: "Marker", name: "本溪", desc: "辽宁省 170.95万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 123.685799, lat: 41.483891}},
				{type: "Marker", name: "滨州", desc: "山东省 374.85万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 117.971363, lat: 37.381207}},
				{type: "Marker", name: "沧州", desc: "河北省  713.41万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 116.858826, lat: 38.298559}},
				{type: "Marker", name: "长春", desc: "吉林省 767.71万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 125.32362, lat: 43.816941}},
				{type: "Marker", name: "常德", desc: "湖南省 517.72万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 111.697998, lat: 29.034709}},
				{type: "Marker", name: "长沙", desc: "湖南省 704.41万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 112.93808, lat: 28.231054}},
				{type: "Marker", name: "常熟", desc: "江苏省 150.7 万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.752492, lat: 31.653683}},
				{type: "Marker", name: "长治", desc: "山西省 333.46万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.116093, lat: 36.196218}},
				{type: "Marker", name: "常州", desc: "江苏省 459.2万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

119.974308, lat: 31.811208}},
				{type: "Marker", name: "潮州", desc: "广东省 266.98万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 116.62262, lat: 23.657104}},
				{type: "Marker", name: "承德", desc: "河北 347.32万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

117.962437, lat: 40.952937}},
				{type: "Marker", name: "成都", desc: "四川省 1404.76万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 104.066963, lat: 30.576302}},
				{type: "Marker", name: "赤峰", desc: "内蒙古自治区 434.12万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 118.886856, lat: 42.257817}},
				{type: "Marker", name: "重庆", desc: "直辖市 2884.62万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 106.551557, lat: 29.563009}},
				{type: "Marker", name: "大连", desc: "辽宁省 669.04万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.614682, lat: 38.914003}},
				{type: "Marker", name: "丹东", desc: "辽宁省 244.47万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 124.354451, lat: 40.000787}},				
				{type: "Marker", name: "大庆", desc: "黑龙江省 290.45万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 125.103784, lat: 46.58931}},
				{type: "Marker", name: "大同", desc: "山西省 337.48万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.300129, lat: 40.076763}},
				{type: "Marker", name: "德阳", desc: "四川省 361.58万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 104.397894, lat: 31.126856}},
				{type: "Marker", name: "德州", desc: "山东省 556.82万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 116.357465, lat: 37.434093}},
				{type: "Marker", name: "东莞", desc: "广东省 822.02万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.7518, lat: 23.020673}},
				{type: "Marker", name: "东营", desc: "山东省 203.53万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.674767, lat: 37.434751}},
				{type: "Marker", name: "鄂尔多斯", desc: "内蒙古自治区 194.07万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 109.781327, lat: 39.608266}},
				{type: "Marker", name: "佛山", desc: "广东省 719.43万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.121436, lat: 23.021479}},
				{type: "Marker", name: "抚顺", desc: "辽宁省 213.81万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 123.957208, lat: 41.880872}},
				{type: "Marker", name: "富阳", desc: "浙江省 65.9万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

119.960076, lat: 30.048692}},				
				{type: "Marker", name: "福州", desc: "福建省 711.54 万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.296494, lat: 26.074508}},
				{type: "Marker", name: "广州", desc: "广东省 1270.08万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.264385, lat: 23.12911}},
				{type: "Marker", name: "桂林", desc: "广西壮族自治区 474.8万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 110.179954, lat: 25.234479}},
				{type: "Marker", name: "贵阳", desc: "贵州省 432.46万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 106.630154, lat: 26.647661}},
				{type: "Marker", name: "哈尔滨", desc: "黑龙江省 1063.6万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 126.534967, lat: 45.803775}},
				{type: "Marker", name: "海口", desc: "海南省 204.62万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 110.331573, lat: 20.028839}},
				{type: "Marker", name: "海门", desc: "江苏省 100.06万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.181615, lat: 31.871173}},
				{type: "Marker", name: "邯郸", desc: "河北省 917.47万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 114.538962, lat: 36.625657}},
				{type: "Marker", name: "杭州", desc: "浙江省 870.04万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.15507, lat: 30.274085}},
				{type: "Marker", name: "合肥", desc: "安徽省 570.2万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

117.227219, lat: 31.820592}},
				{type: "Marker", name: "衡水", desc: "河北省 434.08万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 115.670177, lat: 37.73892}},
				{type: "Marker", name: "河源", desc: "广东省 295.3万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

114.700961, lat: 23.743686}},
				{type: "Marker", name: "菏泽", desc: "山东省 828.78万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 115.480656, lat: 35.23375}},
				{type: "Marker", name: "淮安", desc: "江苏省 479.99万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.015288, lat: 33.61036}},
				{type: "Marker", name: "呼和浩特", desc: "内蒙古自治区 286.66万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 111.749181, lat: 40.842585}},
				{type: "Marker", name: "惠州", desc: "广东省 459.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

114.416196, lat: 23.111847}},
				{type: "Marker", name: "葫芦岛", desc: "辽宁省 262.35万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.83694, lat: 40.711041}},
				{type: "Marker", name: "湖州", desc: "浙江省 289.35万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.086823, lat: 30.894348}},
				{type: "Marker", name: "江门", desc: "广东省  444.89万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.081508, lat: 22.579117}},
				{type: "Marker", name: "江阴", desc: "江苏省 121.73万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.284939, lat: 31.920658}},
				{type: "Marker", name: "胶南", desc: "山东省 83.00万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.046446, lat: 35.872347}},
				{type: "Marker", name: "胶州", desc: "山东省 84.31万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.033382, lat: 36.26468}},
				{type: "Marker", name: "焦作", desc: "河南省 353.99万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.241823, lat: 35.215893}},
				{type: "Marker", name: "嘉兴", desc: "浙江省 450.17万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.755486, lat: 30.746129}},
				{type: "Marker", name: "嘉峪关", desc: "甘肃省 23.19万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 98.289152, lat: 39.77313}},
				{type: "Marker", name: "揭阳", desc: "广东省 587.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

116.372831, lat: 23.549993}},
				{type: "Marker", name: "吉林", desc: "吉林省 441.47万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 126.549572, lat: 43.837883}},
				{type: "Marker", name: "即墨", desc: "山东省 117.72万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.447161, lat: 36.389402}},
				{type: "Marker", name: "济南", desc: "山东省 681.4万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

117.12, lat: 36.651216}},
				{type: "Marker", name: "金昌", desc: "甘肃省 46.41万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

102.188043, lat: 38.520089}},
				{type: "Marker", name: "荆州", desc: "湖北省 569.17万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 112.239741, lat: 30.335165}},
				{type: "Marker", name: "金华", desc: "浙江省 536.16万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.647445, lat: 29.079059}},
				{type: "Marker", name: "济宁", desc: "山东省 808.19万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 116.587282, lat: 35.414982}},
				{type: "Marker", name: "金坛", desc: "江苏省 55.00万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

119.597897, lat: 31.723247}},
				{type: "Marker", name: "锦州", desc: "辽宁省 312.65万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.126846, lat: 41.095685}},
				{type: "Marker", name: "九江", desc: "江西省 472.88万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 116.00193, lat: 29.705078}},
				{type: "Marker", name: "句容", desc: "江苏省 62.36万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

119.168695, lat: 31.944999}},
				{type: "Marker", name: "开封", desc: "河南省 467.62万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 114.307583, lat: 34.797282}},
				{type: "Marker", name: "克拉玛依", desc: "新疆维吾尔自治区 39.1万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 84.889207, lat: 45.579889}},
				{type: "Marker", name: "库尔勒", desc: "新疆维吾尔自治区 60.17万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 86.174633, lat: 41.725892}},
				{type: "Marker", name: "昆明", desc: "云南省 643.2万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

102.832892, lat: 24.880095}},
				{type: "Marker", name: "昆山", desc: "江苏省 164.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.980737, lat: 31.385598}},
				{type: "Marker", name: "莱芜", desc: "山东省 129.85万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 117.676724, lat: 36.213814}},
				{type: "Marker", name: "莱西", desc: "山东省 75.00万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.51769, lat: 36.927527}},
				{type: "Marker", name: "莱州", desc: "山东省 90.2万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

119.942327, lat: 37.177017}},
				{type: "Marker", name: "廊坊", desc: "河北省 435.88万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 116.683752, lat: 39.538047}},
				{type: "Marker", name: "兰州", desc: "甘肃省 361.62万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 103.834304, lat: 36.061089}},
				{type: "Marker", name: "拉萨", desc: "西藏自治区 55.94万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 91.17211, lat: 29.652491}},
				{type: "Marker", name: "连云港", desc: "江苏省 439.39万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.221611, lat: 34.596653}},
				{type: "Marker", name: "聊城", desc: "山东省 578.99万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 115.98546, lat: 36.45703}},
				{type: "Marker", name: "临安", desc: "浙江省 56.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

119.724733, lat: 30.233873}},
				{type: "Marker", name: "临汾", desc: "山西省 431.66万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 111.518976, lat: 36.088005}},
				{type: "Marker", name: "临沂", desc: "山东省 1003.94万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.356448, lat: 35.104672}},
				{type: "Marker", name: "丽水", desc: "浙江省 211.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

119.918518, lat: 28.449374}},
				{type: "Marker", name: "柳州", desc: "广西壮族自治区 375.87万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 109.42841, lat: 24.326038}},
				{type: "Marker", name: "溧阳", desc: "江苏省 79.01万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

119.484211, lat: 31.416911}},
				{type: "Marker", name: "洛阳", desc: "河南省 654.95万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 112.45404, lat: 34.619683}},
				{type: "Marker", name: "泸州", desc: "四川省 421.84万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 105.442258, lat: 28.871811}},
				{type: "Marker", name: "马鞍山", desc: "安徽省 136.6万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.50676, lat: 31.670452}},
				{type: "Marker", name: "茂名", desc: "广东省 581.78万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 110.925456, lat: 21.662999}},
				{type: "Marker", name: "梅州", desc: "广东省 424.01万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 116.122239, lat: 24.288615}},
				{type: "Marker", name: "绵阳", desc: "四川省 461.39万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 104.678946, lat: 31.467495}},
				{type: "Marker", name: "牡丹江", desc: "黑龙江省 279.87万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 129.633169, lat: 44.551653}},
				{type: "Marker", name: "南昌", desc: "江西省 504.26万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 115.858198, lat: 28.682892}},
				{type: "Marker", name: "南充", desc: "四川省 627.86万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 106.110698, lat: 30.837793}},
				{type: "Marker", name: "南京", desc: "江苏省 800.47万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.796507, lat: 32.058505}},
				{type: "Marker", name: "南宁", desc: "广西壮族自治区 666.16万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 108.366543, lat: 22.817002}},
				{type: "Marker", name: "南通", desc: "江苏省 728.28万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.894291, lat: 31.980172}},
				{type: "Marker", name: "宁波", desc: "浙江省 760.57万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.6216, lat: 29.859514}},
				{type: "Marker", name: "盘锦", desc: "辽宁省 139.25万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 122.070714, lat: 41.119997}},
				{type: "Marker", name: "攀枝花", desc: "四川省 121.41万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 101.718637, lat: 26.582347}},
				{type: "Marker", name: "蓬莱", desc: "山东省 44.6万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.758848, lat: 37.810661}},
				{type: "Marker", name: "平顶山", desc: "河南省 490.44万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.310242, lat: 33.733477}},
				{type: "Marker", name: "平度", desc: "山东省 135.74万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.98842, lat: 36.776358}},
				{type: "Marker", name: "青岛", desc: "山东省 871.51万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.382609, lat: 36.067108}},
				{type: "Marker", name: "清远", desc: "广东省 369.84万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.056031, lat: 23.681764}},
				{type: "Marker", name: "秦皇岛", desc: "河北省 298.76万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.600493, lat: 39.935385}},
				{type: "Marker", name: "齐齐哈尔", desc: "黑龙江省 536.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31},lnglat: 

{lng: 123.918186, lat: 47.354348}},
				{type: "Marker", name: "泉州", desc: "福建省 812.85万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.675676, lat: 24.874132}},
				{type: "Marker", name: "曲靖", desc: "云南省 585.5万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

103.796167, lat: 25.489999}},
				{type: "Marker", name: "衢州", desc: "浙江省 212.27万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.859457, lat: 28.97008}},
				{type: "Marker", name: "日照", desc: "山东省 280.11万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.526925, lat: 35.416734}},
				{type: "Marker", name: "荣成", desc: "山东省 71.44万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

122.486658, lat: 37.16516}},
				{type: "Marker", name: "乳山", desc: "山东省 57.24万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

121.539765, lat: 36.919816}},
				{type: "Marker", name: "三门峡", desc: "河南省 223.39万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 111.200135, lat: 34.772494}},				
				{type: "Marker", name: "三亚", desc: "海南省 68.54万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

109.511909, lat: 18.252847}},
				{type: "Marker", name: "上海", desc: "直辖市 2301.91万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.473701, lat: 31.230416}},
				{type: "Marker", name: "汕头", desc: "广东省 539.1万人", color: "red", icon: "cir", offset: {x: -9, y: -31},lnglat: {lng: 

116.681972, lat: 23.354091}},
				{type: "Marker", name: "汕尾", desc: "广东省 293.57万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 115.375159, lat: 22.786186}},
				{type: "Marker", name: "韶关", desc: "广东省 282.66万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.597522, lat: 24.810403}},
				{type: "Marker", name: "绍兴", desc: "浙江省 491.22万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.580232, lat: 30.029753}},
				{type: "Marker", name: "沈阳", desc: "辽宁省 810.62万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 123.431396, lat: 41.797936}},
				{type: "Marker", name: "深圳", desc: "广东省 1035.79万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 114.057865, lat: 22.543096}},
				{type: "Marker", name: "石家庄", desc: "河北省 1016.38万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 114.51486, lat: 38.042307}},
				{type: "Marker", name: "石嘴山", desc: "宁夏回族自治区 72.55万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 106.383303, lat: 38.983236}},
				{type: "Marker", name: "寿光", desc: "山东省 120万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

118.790652, lat: 36.85548}},
				{type: "Marker", name: "宿迁", desc: "江苏省 471.56万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.275198, lat: 33.963232}},
				{type: "Marker", name: "苏州", desc: "江苏省 1046.6万人", color: "red", icon: "cir", offset: {x: -9, y: -31},lnglat: {lng: 

120.58529, lat: 31.298979}},
				{type: "Marker", name: "泰安", desc: "山东省 549.42万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 117.087614, lat: 36.200252}},
				{type: "Marker", name: "太仓", desc: "江苏省 70.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

121.13055, lat: 31.457735}},
				{type: "Marker", name: "太原", desc: "山西省 420.16万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 112.548879, lat: 37.87059}},
				{type: "Marker", name: "台州", desc: "浙江省 596.88万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.420757, lat: 28.656386}},
				{type: "Marker", name: "泰州", desc: "江苏省 461.86万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.923116, lat: 32.455778}},
				{type: "Marker", name: "唐山", desc: "河北省 757.73万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.180194, lat: 39.630867}},
				{type: "Marker", name: "天津", desc: "直辖市 1293.82万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 117.200983, lat: 39.084158}},
				{type: "Marker", name: "铜川", desc: "陕西省 83.44万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

108.945233, lat: 34.896756}},
				{type: "Marker", name: "瓦房店", desc: "辽宁省 94.28万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.979603, lat: 39.627114}},
				{type: "Marker", name: "威海", desc: "山东省 908.62万人", color: "red", icon: "cir", offset: {x: -9, y: -31},lnglat: {lng: 

122.12042, lat: 37.513068}},
				{type: "Marker", name: "渭南", desc: "山东省 280.48万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 109.509786, lat: 34.499995}},
				{type: "Marker", name: "文登", desc: "陕西省 528.61万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 122.053505, lat: 37.20022}},
				{type: "Marker", name: "温州", desc: "山东省 58.1万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.699362, lat: 27.993828}},
				{type: "Marker", name: "台州", desc: "浙江省 912.21万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.420757, lat: 28.656386}},
				{type: "Marker", name: "武汉", desc: "湖北省 978.54万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 114.305393, lat: 30.593099}},
				{type: "Marker", name: "芜湖", desc: "安徽省 226.3万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

118.432941, lat: 31.352859}},
				{type: "Marker", name: "吴江", desc: "江苏省 128.74万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.645135, lat: 31.13907}},
				{type: "Marker", name: "乌鲁木齐", desc: "新疆维吾尔自治区 311.03万人", color: "red", icon: "cir", offset: {x: -9, y: -

31}, lnglat: {lng: 87.616848, lat: 43.825592}},
				{type: "Marker", name: "无锡", desc: "江苏省 637.26万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.31191, lat: 31.49117}},
				{type: "Marker", name: "厦门", desc: "福建省 353.13万人", color: "red", icon: "cir", offset: {x: -9, y: -31},lnglat: {lng: 

118.089425, lat: 24.479834}},
				{type: "Marker", name: "西安", desc: "陕西省 846.78万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 108.93977, lat: 34.341575}},
				{type: "Marker", name: "湘潭", desc: "湖南省 374.86万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 112.944049, lat: 27.829738}},
				{type: "Marker", name: "咸阳", desc: "陕西省 489.48万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 108.708991, lat: 34.329605}},
				{type: "Marker", name: "邢台", desc: "河北省 710.41万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 114.504844, lat: 37.070589}},
				{type: "Marker", name: "西宁", desc: "湖北省 220.87万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 101.778224, lat: 36.617134}},
				{type: "Marker", name: "徐州", desc: "江苏省 858.05万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 117.284124, lat: 34.205768}},
				{type: "Marker", name: "延安", desc: "陕西省 218.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

109.489757, lat: 36.585445}},
				{type: "Marker", name: "盐城", desc: "江苏省 726.02万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.163562, lat: 33.347383}},
				{type: "Marker", name: "阳江", desc: "广东省 242.18万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 111.982232, lat: 21.857958}},
				{type: "Marker", name: "阳泉", desc: "山西省 136.85万人", color: "red", icon: "cir", offset: {x: -9, y: -31},lnglat: {lng: 

113.580519, lat: 37.856972}},
				{type: "Marker", name: "扬州", desc: "江苏省 445.98万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.412947, lat: 32.394213}},
				{type: "Marker", name: "烟台", desc: "山东省 696.82万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 121.447935, lat: 37.463822}},
				{type: "Marker", name: "宜宾", desc: "四川省 447.2万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

104.643215, lat: 28.751769}},
				{type: "Marker", name: "宜昌", desc: "湖北省 405.97万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 111.286471, lat: 30.691966}},
				{type: "Marker", name: "银川", desc: "宁夏回族自治区 199.31万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, 

lnglat: {lng: 106.230909, lat: 38.487194}},
				{type: "Marker", name: "营口", desc: "辽宁省 242.85万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 122.235417, lat: 40.667012}},
				{type: "Marker", name: "义乌", desc: "浙江省 123.4万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.075058, lat: 29.306841}},
				{type: "Marker", name: "宜兴", desc: "江苏省 124.37万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.823308, lat: 31.340637}},
				{type: "Marker", name: "岳阳", desc: "湖南省 547.79万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.128958, lat: 29.357104}},
				{type: "Marker", name: "云浮", desc: "广东省 236.01万人", color: "red", icon: "cir", offset: {x: -9, y: -31},lnglat: {lng: 

112.044491, lat: 22.915094}},
				{type: "Marker", name: "玉溪", desc: "云南省 230.4万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

102.527196, lat: 24.347321}},
				{type: "Marker", name: "枣庄", desc: "山东省 372.93万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 117.323725, lat: 34.810488}},
				{type: "Marker", name: "张家港", desc: "江苏省 150万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.555999, lat: 31.87554}},
				{type: "Marker", name: "张家界", desc: "湖南省 147.65万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 110.479191, lat: 29.117096}},
				{type: "Marker", name: "张家口", desc: "河北省 434.55万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 114.886335, lat: 40.767545}},
				{type: "Marker", name: "章丘", desc: "山东省 106.42万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 117.526228, lat: 36.681259}},
				{type: "Marker", name: "湛江", desc: "广东省 699.33万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 110.359377, lat: 21.270708}},
				{type: "Marker", name: "肇庆", desc: "广东省 391.81万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 112.465091, lat: 23.047192}},
				{type: "Marker", name: "招远", desc: "山东省 56.69万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

120.434072, lat: 37.355469}},
				{type: "Marker", name: "郑州", desc: "河南省 862.65万人", color: "red", icon: "cir", offset: {x: -9, y: -31},lnglat: {lng: 

113.625755, lat: 34.747043}},
				{type: "Marker", name: "镇江", desc: "江苏省 311.34万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 119.44747, lat: 32.208153}},
				{type: "Marker", name: "中山", desc: "广东省 312.09万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.392725, lat: 22.516999}},

				{type: "Marker", name: "舟山", desc: "浙江省 112.13万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 122.207216, lat: 29.985295}},
				{type: "Marker", name: "珠海", desc: "广东省 156.02万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.576678, lat: 22.270978}},
				{type: "Marker", name: "诸暨", desc: "浙江省 115.79万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 120.246863, lat: 29.708692}},
				{type: "Marker", name: "株洲", desc: "湖南省 385.56万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 113.133853, lat: 27.827987}},
				{type: "Marker", name: "淄博", desc: "山东省 453.06万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 118.054927, lat: 36.813487}},
				{type: "Marker", name: "自贡", desc: "四川省 267.89万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: 

{lng: 104.778442, lat: 29.33903}},
				{type: "Marker", name: "遵义", desc: "贵州省 612.7万人", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 

106.927389, lat: 27.725654}}			
				
				];

		function loadFeatures(){
			for(var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++){
				data = features[i];
				switch(data.type){
					case "Marker":
						feature = new AMap.Marker({ map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
							zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
							content: '<div class="icon icon-' + data.icon + ' icon-'+ data.icon +'-' + data.color +'"></div>' 

});
						break;
					case "Polyline":
						for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
							path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
						}
						feature = new AMap.Polyline({ map: map, path: path, extData: data, zIndex: 2,
							strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity 

});
						break;
					case "Polygon":
						for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
							path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
						}
						feature = new AMap.Polygon({ map: map, path: path, extData: data, zIndex: 1,
							strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
							fillColor: data.fillColor, fillOpacity: data.fillOpacity });
						break;
					default: feature = null;
				}
				<!--添加点击事件-->
				if(feature){ 
					AMap.event.addListener(feature, "click", mapFeatureClick); 
				}
				
			}
		}

		/* 监听事件实现代码 */
		function mapFeatureClick(e){
			
			document.getElementById('light').style.display="block";
			var cityData = e.target.getExtData();
			d3.selectAll("text").text(""); // 清空text中的内容
			// 显示城市名、地理位置以及设置其显示格式			
			d3.select("#cityname")
				.append("text")
				.text(cityData.name)
				.style("font-family","华文行楷")
				.style("font-size","18px")
				.style("font-weight","bold")
				.style("color","#333");
			d3.select("#lnglat")
				.append("text")
				.text("			"+cityData.lnglat.lng+" "+cityData.lnglat.lat)
				.attr("font-size","10px");
			
			}
			//Width and height
	var w = 500;
	var h = 130;
	var barPadding = 1;
			
	var mapdataAQI = [ 65, 66, 66, 79, 93,91, 70, 47, 49, 62,
							52, 41]; // 数据数组（交互时需要从数据库获取的）
	var body = d3.select("#container");
	var table = body.select("#tablecont").select("table");
	var tr = table.selectAll("tr");
			
	tr.select("#min").text(d3.min(mapdataAQI)); // 表格中最大值实现
	tr.select("#max").text(d3.max(mapdataAQI)); // 表格中最小值实现
			
			
			
	var	td3 = tr.select("#td3");		
			
	//创建svg元素
	var svg = td3.append("svg")
				.attr("width", w)
				.attr("height", h);
						
	//创建一个x轴的缩放比例尺 
	var xScale = d3.scale.linear()
					.domain([0,mapdataAQI.length])
					.range([0,w-3]);
	// 颜色缩放比例尺:AQI的值从0-500，颜色从蓝色到红色逐渐变换
	var mapdataAQIColor = d3.scale.linear()
								.domain([0,500])
								.range(["blue","red"]);			
	
	// 创建一个数轴：与x轴缩放比例尺配合使用，其标签显示在底部。
	var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("top");
	// 设置刻度线的条数和长度
	xAxis.ticks(5)
		.tickSize(100);
	// 调用x轴的数轴
	svg.append("g")
		.attr("class","axis")
		.attr("transform", "translate("+ barPadding +","+ h +")")
		.call(xAxis);

	// 条形图实现
	svg.selectAll("rect")
		.data(mapdataAQI)
		.enter()
		.append("rect")
		.attr("x", function(d, i) {
		   		return i * (w / mapdataAQI.length);
		   })
		.attr("y", function(d) {
		   		return h - (d / 5);
		   })
		.attr("width", w / mapdataAQI.length - barPadding)
		.attr("height", function(d) {
		   		return d / 5;
		   })
		.attr("fill", function(d) {
				return mapdataAQIColor(d);
		   });
		/* 地图  */
		map = new AMap.Map("mapContainer", {
			view: new AMap.View2D({
					center: new AMap.LngLat(center.lng, center.lat), // 中心点
					zoom: level // 缩放级别
				})
			});
		
		loadFeatures();
		map.plugin(["AMap.ToolBar", "AMap.OverView", "AMap.Scale"], function(){
			map.addControl(new AMap.ToolBar);
			map.addControl(new AMap.OverView({isOpen: true}));
			map.addControl(new AMap.Scale);
		});	
		})(window);