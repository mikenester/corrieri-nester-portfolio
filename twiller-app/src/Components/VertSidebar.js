import { Link } from "react-router-dom";
import { useState } from "react";

import { Icon, Menu, Sidebar, Grid, Checkbox } from "semantic-ui-react";

function VertSidebar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bar">
      <Grid columns={1}>
        <Grid.Column>
          <Checkbox
            checked={visible}
            label={{ children: <code>Menu</code> }}
            onChange={(e, data) => setVisible(data.checked)}
          />
        </Grid.Column>

        <Grid.Column>
          {/* <Sidebar.Pushable> */}
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as={Link} to="/home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="user outline" />
              User
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="info" />
              Info
            </Menu.Item>
          </Sidebar>
          {/* <Sidebar.Pusher>
          <Segment basic>
            <Header as="h3">App Content</Header>
          </Segment>
        </Sidebar.Pusher> */}
          {/* </Sidebar.Pushable> */}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default VertSidebar;
