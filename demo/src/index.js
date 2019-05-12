import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'emotion'
import {Canvas, Heading, Paragraph, Box} from '@pndr/demo-utils'

import {Dialog, DialogActions, DialogAction, DialogBody, DialogHeading} from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

class Demo extends Component {
  render() {
    return (
        <Canvas>
          <Heading>
            Confirmation Dialog
          </Heading>
          <Paragraph>
            With a heading, body, and two actions
          </Paragraph>
          <Box>
            <Dialog>
              <DialogHeading>
                Are you sure you want to delete this table?
              </DialogHeading>
              <DialogBody>
                All the data in this table will be lost.
              </DialogBody>
              <DialogActions>
                <DialogAction>
                  Cancel
                </DialogAction>
                <DialogAction danger>
                  Delete
                </DialogAction>
              </DialogActions>
            </Dialog>
          </Box>
          <Heading>
            Alert Dialog
          </Heading>
          <Paragraph>
            With a heading, body, and one action
          </Paragraph>
          <Box>
            <Dialog>
              <DialogHeading>
                Are you sure you want to delete this table?
              </DialogHeading>
              <DialogBody>
                All the data in this table will be lost.
              </DialogBody>
              <DialogActions>
                <DialogAction primary>
                  OK
                </DialogAction>
              </DialogActions>
            </Dialog>
          </Box>
        </Canvas>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
