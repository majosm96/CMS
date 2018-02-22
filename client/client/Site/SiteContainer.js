import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu secondary>
          <Menu.Item position="right" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item position="right" name="messages" active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item position="right" name="friends" active={activeItem === 'contact'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}

