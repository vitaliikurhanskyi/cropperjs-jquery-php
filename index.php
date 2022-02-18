<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="libs/cropper/cropper.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="wrapper">


		<div id="on" class="on2"></div>

		<div id="form_wrapper">
			<form action="#" method="POST">
				<input type="file" class="image" id="image">
			</form>
		</div>

		<div id="overlay" class="overlay">

			<div id="moadal_window" class="modal_window clearfix">
				<div class="preview"></div>
				<div class="crop_img_wrap">
					<img class="image_modal" id="imagemodal">
				</div>
				<button id="modal_close">Colose</button>
				<button id="crop" class="crop">Crop</button>
			</div>
		</div>

	</div>




	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	<script src="libs/cropper/cropper.js"></script>
	<script src="js/common.js"></script>
</body>
</html>