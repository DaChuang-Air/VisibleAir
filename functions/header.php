<?php



function get_header(){



return  ' 
<nav class="navbar horizontal-menu navbar-fixed-top navbar-minimal"><!-- set fixed position by adding class "navbar-fixed-top" -->
		<div class="navbar-inner">
			<!-- Navbar Brand -->
			<div class="navbar-brand">
				<a href="/VisibleAir/index.php" class="logo">
					<img src="assets/images/logo-white-bg@2x.png" width="80" alt="" class="hidden-xs" />
					<img src="assets/images/logo@2x.png" width="80" alt="" class="visible-xs" />
				</a>
			</div>	
			<!-- Mobile Toggles Links -->
			<div class="nav navbar-mobile">
			
				<!-- This will toggle the mobile menu and will be visible only on mobile devices -->
				<div class="mobile-menu-toggle">
					<!-- This will open the popup with user profile settings, you can use for any purpose, just be creative -->
					<a href="#" data-toggle="settings-pane" data-animate="true">
						<i class="linecons-cog"></i>
					</a>
					<a href="#" data-toggle="user-info-menu-horizontal">
						<i class="fa-bell-o"></i>
						<span class="badge badge-success">7</span>
					</a>
					<!-- data-toggle="mobile-menu-horizontal" will show horizontal menu links only -->
					<!-- data-toggle="mobile-menu" will show sidebar menu links only -->
					<!-- data-toggle="mobile-menu-both" will show sidebar and horizontal menu links -->
					<a href="#" data-toggle="mobile-menu-horizontal">
						<i class="fa-bars"></i>
					</a>
				</div>	
			</div>
			<div class="navbar-mobile-clear"></div>
			<!-- main menu -->
			<ul class="navbar-nav">
				<li>
					<a href="index.php">
						<i class="linecons-cog"></i>
						<span class="title">首页</span>
					</a>
					<ul>
						<li>
							<a href="index.php">
								<span class="title">当前城市指数</span>
							</a>
						</li>
						<li>
							<a href="index-airIndexChange.php">
								<span class="title">各空气参数变化</span>
							</a>
						</li>
						<li>
							<a href="index-airQualityChange.php">
								<span class="title">当前城市空气质量变化</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="ranking.php">
						<i class="linecons-desktop"></i>
						<span class="title">排名情况</span>
					</a>
				</li>
				
				<li>
					<a href="dataAnalyse.php">
						<i class="linecons-note"></i>
						<span class="title">数据分析</span>
					</a>
				</li>
				<li>
					<a href="mapPosition.php">
						<i class="linecons-desktop"></i>
						<span class="title">地图定位</span>
					</a>
				</li>
				<li>
					<a href="contactUs.php">
						<i class="linecons-diamond"></i>
						<span class="title">联系我们</span>
					</a>
				</li>
			</ul>
			<!-- notifications and other links -->
			<ul class="nav nav-userinfo navbar-right">
				
				<li class="search-form"><!-- You can add "always-visible" to show make the search input visible -->
			
					<form method="get" action="extra-search.html">
						<input type="text" name="s" class="form-control search-field" placeholder="Type to search..." />
						
						<button type="submit" class="btn btn-link">
							<i class="linecons-search"></i>
						</button>
					</form>
				</li>
			</ul>
		</div>
	</nav>';

}

	?>