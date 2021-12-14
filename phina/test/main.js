// phina.js ���O���[�o���̈�ɓW�J
phina.globalize();

var SCREEN_X = 800;
var SCREEN_Y = 800;

// MainScene �N���X���`
phina.define("MainScene", {
  // �p��
  superClass: 'DisplayScene',
  // ������
  init: function(option) {
    // �e�N���X������
    this.superInit(option);
    // �O���b�h
		Grid({
			width: 800,
			columns: 80,
		});
    var gx = this.gridX;
    var gy = this.gridY;
    // ����
    var axeX = RectangleShape({
      width: gx.width,
      height: 2,
      fill: '#aaa',
    }).addChildTo(this).setPosition(gx.center(), gy.center());
    axeX.alpha = 0.5;    
    // �c��
    var axeY = RectangleShape({
      width: 2,
      height: gy.width,
      fill: '#aaa',
    }).addChildTo(this).setPosition(gx.center(), gy.center());
    axeY.alpha = 0.5;
    // �O���b�h�_
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

// ���C������
phina.main(function() {
  // �A�v���P�[�V��������
  var app = GameApp({
    startLabel: 'main', // ���C���V�[������J�n����
		
    width: SCREEN_X,
    height: SCREEN_Y,
  });
	app.enableStats();
  // �A�v���P�[�V�������s
  app.run();
});