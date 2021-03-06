/** @jsx h */

import h from '../../helpers/h'

export const schema = {
  blocks: {
    paragraph: {},
    quote: {
      last: [{ object: o => o === 'text' }],
    },
  },
}

export const input = (
  <value>
    <document>
      <quote>
        <paragraph />
      </quote>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <quote />
    </document>
  </value>
)
