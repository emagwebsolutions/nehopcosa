// SetTransform.js

import Flatted from 'flatted';
import { createTransform } from 'redux-persist';

const SetTransform = createTransform(
  (inboundState, key) => Flatted?.stringify(inboundState),
  (outboundState, key) => Flatted?.parse(outboundState)
);

export default SetTransform;
