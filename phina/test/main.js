// phina.js をグローバル領域に展開
phina.globalize();

var SCREEN_X = 800;
var SCREEN_Y = 800;

// MainScene クラスを定義
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(option) {
    // 親クラス初期化
    this.superInit(option);
    // グリッド
		Grid({
			width: 800,
			columns: 80,
		});
    var gx = this.gridX;
    var gy = this.gridY;
    // 横線
    var axeX = RectangleShape({
      width: gx.width,
      height: 2,
      fill: '#aaa',
    }).addChildTo(this).setPosition(gx.center(), gy.center());
    axeX.alpha = 0.5;    
    // 縦線
    var axeY = RectangleShape({
      width: 2,
      height: gy.width,
      fill: '#aaa',
    }).addChildTo(this).setPosition(gx.center(), gy.center());
    axeY.alpha = 0.5;
    // グリッド点
    var pointGroup = DisplayElement().addChildTo(this);

    (17).times(function(spanX) {
      (17).times(function(spanY) {
        var point = CircleShape({
          radius: 2,
          fill: '#aaa',
        }).addChildTo(pointGroup).setPosition(gx.span(spanX), gy.span(spanY));
      });
    });
		PolygonShape({
			stroke: 'white',
			strokeWidth: 16,
			radius: 64,
			sides: 6,
		}).addChildTo(this).setPosition(100, 480);
  },
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main', // メインシーンから開始する
		
    width: SCREEN_X,
    height: SCREEN_Y,
  });
	app.enableStats();
  // アプリケーション実行
  app.run();
});