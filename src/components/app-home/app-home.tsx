import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Use at your own risk! This is a work in progress. I am not responsible for any damage to your printer or any other equipment.
        </p>
        <div class="ui">
          <div class="settings">
            <em-settings />
          </div>
          <div class="preview">
            <em-preview />
          </div>
        </div>
        <div class="gcode">
          <em-gcode />
        </div>
      </div>
    );
  }
}
