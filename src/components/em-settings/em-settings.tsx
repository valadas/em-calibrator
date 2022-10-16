import { Component, Host, h } from '@stencil/core';
import state from '../../store/store';

@Component({
  tag: 'em-settings',
  styleUrl: 'em-settings.scss',
  shadow: true,
})
export class EmSettings {

  render() {
    return (
      <Host>
        <div class="card start-end">
          <h2>Start/End gcodes</h2>
          <div class="card-content">
            <p>IMPORTANT: Make sure you copy the start/end gcode from your slicer if you need to.
              This may include homing, QGL, Bl-Touch, pre-heating, setting temperatures, etc.
              Any line starting with <code>;</code> is a comment and does nothing.</p>
            <label>
              Start gcode
            </label><br />
            <textarea
              value={state.startGcode}
              onInput={e => state.startGcode = (e.target as HTMLTextAreaElement).value}
            />
            <label>End gcode</label>
            <textarea
              value={state.endGcode}
              onInput={e => state.endGcode = (e.target as HTMLTextAreaElement).value}
            />
          </div>
        </div>
        <div class="card build-volume">
          <h2>Build volume</h2>
          <div class="card-content">
            <label>
              X
            </label>
            <input
              type="number"
              value={state.buildVolume.x}
              onInput={e => state.buildVolume = {
                ...state.buildVolume,
                x : Number((e.target as HTMLInputElement).value)}
              }
            />
            <label>
              Y
            </label>
            <input
              type="number"
              value={state.buildVolume.y}
              onInput={e => state.buildVolume = {
                ...state.buildVolume,
                y: Number((e.target as HTMLInputElement).value)}
              }
            />
            <label>
              Z
            </label>
            <input
              type="number"
              value={state.buildVolume.z}
              onInput={e => state.buildVolume = {
                ...state.buildVolume,
                z: Number((e.target as HTMLInputElement).value)}
              }
            />
          </div>
        </div>
        <div class="card test-settings">
          <h2>Test settings</h2>
          <div class="card-content">
            <label>Width</label>
            <input
              type="number"
              min={10}
              max={state.buildVolume.x-20}
              value={state.width}
              onInput={e => state.width = Number((e.target as HTMLInputElement).value)}
            />
            <label>Depth</label>
            <input
              type="number"
              min={10}
              max={state.buildVolume.y-20}
              value={state.depth}
              onInput={e => state.depth = Number((e.target as HTMLInputElement).value)}
            />
            <label>Height</label>
            <input
              type="number"
              min={10}
              max={state.buildVolume.y-20}
              value={state.height}
              onInput={e => state.height = Number((e.target as HTMLInputElement).value)}
            />
            <label>Speed</label>
            <input
              type="number"
              min={10}
              max={300}
              value={state.speed}
              onInput={e => state.speed = Number((e.target as HTMLInputElement).value)}
            />
            <label>Layer height</label>
            <input
              type="number"
              min={0.1}
              max={1.8}
              value={state.layerHeight}
              onInput={e => state.layerHeight = Number((e.target as HTMLInputElement).value)}
            />
            <label>Nozzle Size</label>
            <input
              type="number"
              min={0.1}
              max={1.2}
              value={state.nozzleSize}
              onInput={e => state.nozzleSize = Number((e.target as HTMLInputElement).value)}
            />
            <label>Min EM</label>
            <input
              type="number"
              value={state.minEm}
              onInput={e => state.minEm = Number((e.target as HTMLInputElement).value)}
            />
            <label>Max EM</label>
            <input
              type="number"
              value={state.maxEm}
              onInput={e => state.maxEm = Number((e.target as HTMLInputElement).value)}
            />
          </div>
        </div>
      </Host>
    );
  }

}
