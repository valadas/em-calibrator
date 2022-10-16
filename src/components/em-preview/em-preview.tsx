import { Component, Host, h } from '@stencil/core';
import * as GCodePreview from "gcode-preview";
import state from '../../store/store';

@Component({
  tag: 'em-preview',
  styleUrl: 'em-preview.scss',
  shadow: true,
})
export class EmPreview {
  
  private canvas!: HTMLCanvasElement;
  private preview: GCodePreview.WebGLPreview;

  componentDidLoad() {
    this.initPreview();
    setInterval(() => {
      this.redraw();
    }, 1000);
  }

  componentWillUpdate() {
    this.initPreview();
  }

  private initPreview() {
    this.preview = GCodePreview.init({
      buildVolume: {
        x: state.buildVolume.x,
        y: state.buildVolume.y,
        z: state.buildVolume.z,
      },
      canvas: this.canvas,
      allowDragNDrop: false,
    });
  }

  private redraw = () => {
    this.preview.processGCode(state.gcode)
  }

  render() {
    return (
      <Host>
        <canvas ref={e => this.canvas = e}/>
        <p>{state.buildVolume.x} x {state.buildVolume.y}</p>
      </Host>
    );
  }

}
