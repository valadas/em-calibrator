import { Component, Host, h } from '@stencil/core';
import state from '../../store/store';
import { Rect } from './rect';
@Component({
  tag: 'em-gcode',
  styleUrl: 'em-gcode.scss',
  shadow: true,
})
export class EmGcode {
  private generateGcode = () => {
    let result = "";
    result += state.startGcode;
    result += "\n";
    result += `G21 ; set units to millimeters\n`;
    result += `G90 ; use absolute coordinates\n`;
    result += `M83 ; use relative distances for extrusion\n`;
    result += this.generateTestGcode();
    result += "\n";
    result += state.endGcode;
    state.gcode = result;
    return state.gcode;
  }

  private generateTestGcode = () => {
    let result = "";
    var totalLayers = Math.round(state.height / state.layerHeight);
    result += "; total layers: " + totalLayers + "\n";
    result += `G1 F${state.speed * 60}\n`;
    for (var i = 0; i < totalLayers; i++) {
      result += this.generateLayer(i);
    }
    return result;
  }
  
  generateLayer = (layer: number) => {
    let result = "";
    result += "; layer " + layer + "\n";
    result += `G0 Z${((layer + 1) * state.layerHeight).toFixed(2)}\n`;
    const rect: Rect = {
      left: (state.buildVolume.x / 2) - (state.width / 2),
      right: state.buildVolume.x / 2 + state.width / 2,
      front: state.buildVolume.y / 2 - state.depth / 2,
      back: state.buildVolume.y / 2 + state.depth / 2,
    }
    let extrusion = 3.80596;
    extrusion = extrusion / 0.4 * state.nozzleSize;
    extrusion = extrusion / 0.2 * state.layerHeight;
    extrusion = extrusion / 100 * state.width;
    result += this.generateWall(rect, extrusion);
    result += this.generateFill(rect, extrusion);
    return result;
  }

  generateWall = (rect: Rect, extrusion: number) => {
    let result = "";
    result += `G0 X${rect.left.toFixed(2)} Y${rect.front.toFixed(2)}\n`;
    result += `G1 X${rect.right.toFixed(2)} E${extrusion}\n`;
    result += `G1 Y${rect.back.toFixed(2)} E${extrusion}\n`;
    result += `G1 X${rect.left.toFixed(2)} E${extrusion}\n`;
    result += `G1 Y${rect.front.toFixed(2)} E${extrusion}\n`;
    return result;
  }

  generateFill = (rect: Rect, extrusion: number) => {
    let result = "";
    const lineWidth = 0.506884 / 0.4 * state.nozzleSize / 0.2 * state.layerHeight;
    let yPosition = rect.front;
    let xPosition = rect.left;
    const emPerLine = (state.maxEm - state.minEm) / (rect.back - rect.front) / lineWidth;
    let adjustedExtrusion = extrusion * state.minEm;
    while ((yPosition + lineWidth ) < rect.back) {
      adjustedExtrusion += emPerLine;
      yPosition += lineWidth;
      result += `G1 Y${yPosition.toFixed(5)}\n`;
      const resultFromLine = this.generateFillLine(xPosition, adjustedExtrusion);
      result += resultFromLine.result;
      xPosition = resultFromLine.xPosition;
    }
    return result;
  }

  generateFillLine(xPosition: number, extrusion: number) {
    let result = "";
    let newX: number;
    if (xPosition < state.buildVolume.x / 2){
      newX = xPosition + state.width;
    }
    if (xPosition > state.buildVolume.x / 2){
      newX = xPosition - state.width;
    }

    result += `G1 X${newX.toFixed(5)} E${extrusion.toFixed(5)}\n`;
    xPosition = newX;
    return { result, xPosition };
  }

  private saveGcode(){
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([state.gcode], {type: "text/plain"}));
    a.download = "em-calibration.gcode";
    a.click();
  }

  render() {
    return (
      <Host>
        <textarea 
          readOnly
          value={this.generateGcode()}
        />
        <button
          onClick={() => this.saveGcode()}
        >Save Gcode</button>
      </Host>
    );
  }
}
