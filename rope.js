class Rope {
     constructor(bodyA,bodyB,offsetX,offsetY){ 
         this.offsetX = offsetX;
          this.offsetY = offsetY; 
          var options ={ 
              bodyA: bodyA, bodyB: bodyB,
               pointB:{x:this.offsetX, y:this.offsetY} } 
              this.rope = Constraint.create(options);
               World.add(world,this.rope); }
               display() {
                    var pointA = this.rope.bodyA.position;
                     var pointB = this.rope.bodyB.position;
                      var anchor2X = pointA.x; 
                      var anchor2Y = pointA.y;
                       var anchor1X = pointB.x + this.offsetX;
                        var anchor1Y = pointB.y + this.offsetY;
                         strokeWeight(3); 
                         line(anchor2X,anchor2Y,anchor1X,anchor1Y); 
                        }
                     }

