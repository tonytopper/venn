var createVennDiagram = function() {
    //Create a stage by getting a reference to the canvas
    var diagramData = [{"color":"red"}, {"color":"blue"}, {"color":"yellow"}, {"color":"green"}];
    var N = diagramData.length;
    var stage = new createjs.Stage("technology-diagram");
    $.each(diagramData, function(index, value) {
	    circle = new createjs.Shape();
	    strokeSize = 2;
        radius = Math.round(stage.canvas.width / (N * 2));
        console.log(radius);
            skewAmount = (radius / Math.PI) - (strokeSize * 2);
        if (index == 0) {
            x = radius + strokeSize ;
        } else if (index == 1 || index == 2) {
            x = (stage.canvas.width / 2);	
        } else if (index == 3) {
            x = stage.canvas.width - radius
        }
        y = 0 + radius + strokeSize * 2;
        if (index == 0 || index == 3) {
            y = y + skewAmount;
        }
        graphics = new createjs.Graphics();
        graphics.setStrokeStyle(strokeSize);
            graphics.beginStroke(diagramData[index].color);
        graphics.beginFill(diagramData[index].color).arc(x, y, radius, 0, Math.PI*2);
        circle = new createjs.Shape(graphics);
        circle.alpha = .2;
        if (index == 0 || index == 1) {
            circle.skewX = -skewAmount;
            circle.x = circle.x - skewAmount
        }
        if (index == 2 || index == 3) {
            circle.skewX = skewAmount;
            circle.x = circle.x + skewAmount; 
        }
        if (index == 0) {
            circle.x = circle.x + radius * 2 + skewAmount;
        }
        if (index == 3) {
            circle.x = circle.x - radius * 2 - skewAmount;
        }
        stage.addChild(circle);
        stage.update();
    });
}

createVennDiagram();

