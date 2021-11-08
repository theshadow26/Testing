import React from 'react'

import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

function Todo (props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={props.text} secondary='pretttt dummy' />
      </ListItem>
    </List>
  )
}

export default Todo
