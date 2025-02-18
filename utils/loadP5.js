const loadP5 = async (p5ContainerRef) => {
  const p5 = await import("p5");

  new p5.default((sketch) => {
    let container = document.querySelector(".container");
    if (!container) {
      console.error("Error: .container not found!");
      return;
    }

    let containerHeight = container.clientHeight;
    let containerWidth = container.clientWidth;

    let leftContainerTop, rightContainerTop, leftContainerLeft;
    let Height, Width;

    const noOfLeftToRight = 9;  // Adjusted based on your data
    const noOfRightToLeft = 8;  // Adjusted based on your data

    const updateDimensions = () => {
      containerHeight = container.clientHeight;
      containerWidth = container.clientWidth;

      leftContainerTop =
        document.querySelector(".time-container-left").offsetTop + 80;
      rightContainerTop =
        document.querySelector(".time-container-right").offsetTop + 80;
      leftContainerLeft =
        document.querySelector(".time-container-left").offsetLeft + 50;

      Height = rightContainerTop - leftContainerTop;
      Width = document.querySelector(".time-container-left").offsetWidth;
    };

    sketch.setup = () => {
      updateDimensions();
      sketch.createCanvas(containerWidth, containerHeight).parent(
        p5ContainerRef.current
      );
      sketch.stroke(255);
      sketch.strokeWeight(2);
      sketch.noFill();
    };

    sketch.draw = () => {
      sketch.clear();
      sketch.setLineDash([8, 8]); // Keep dashed line

      sketch.curve(
        leftContainerLeft,
        rightContainerTop,
        leftContainerLeft + 20,
        0,
        leftContainerLeft,
        leftContainerTop,
        Width,
        0
      );

      for (let i = 0, j = -1; i < noOfLeftToRight; i++, j += 2) {
        sketch.bezier(
          leftContainerLeft,
          rightContainerTop + Height * j,
          leftContainerLeft,
          rightContainerTop + Height * 2 * i,
          Width,
          rightContainerTop + Height * j,
          Width,
          rightContainerTop + Height * 2 * i
        );
      }

      for (let i = 0, j = -2; i < noOfRightToLeft; i++, j += 2) {
        sketch.bezier(
          Width,
          rightContainerTop + Height * 2 * i,
          Width,
          rightContainerTop + Height * (3 + j),
          leftContainerLeft,
          rightContainerTop + Height * 2 * i,
          leftContainerLeft,
          rightContainerTop + Height * (3 + j)
        );
      }

      sketch.curve(
        leftContainerLeft,
        rightContainerTop,
        Width,
        rightContainerTop + Height * 10,
        Width - 400,
        containerHeight,
        Width,
        0
      );
    };

    sketch.windowResized = () => {
      updateDimensions();
      sketch.resizeCanvas(containerWidth, containerHeight);
    };

    window.addEventListener("scroll", () => {
      updateDimensions();
      sketch.redraw();
    });

    container.addEventListener("wheel", (event) => {
      event.stopPropagation(); // Keeps scroll smooth
    });

    sketch.setLineDash = (list) => {
      sketch.drawingContext.setLineDash(list);
    };
  });
};

export default loadP5;