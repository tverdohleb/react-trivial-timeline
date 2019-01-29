# Trivial but powerful react timeline

## Demo

Visit [demo page](https://master-react-trivial-timeline.now.sh) to see component in action.

## Getting started

```
# via yarn
yarn add react-trivial-timeline

# via npm
npm install --save react-trivial-timeline 
```

`react-trivial-timeline` has `react`, `react-dom`, `prop-types` and `styled-components` as peer dependencies.

## Usage
```
import { Timeline, Event } from 'react-trivial-timeline';

ReactDOM.render(
  <div>
    <Timeline lineColor="black">
        <Event interval={{ start: 2010 }} title="Event title" subtitle="Subtitle">
          Content
        </Event>
        <Event interval="2016 – 2019" title="Some text">
          Some content
        </Event>
      </Timeline>
  </div>,
  document.getElementById('root')
);
```
