import React from 'react';

import { storiesOf } from '@storybook/react';

import { Timeline, Event } from '../src';

storiesOf('Timeline', module).add('demo', () => (
  <Timeline lineColor="black">
    <Event interval={{ start: 2010 }} title="Event title" subtitle="Subtitle">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.
    </Event>
    <Event interval="2016 – 2018" title="Some text">
      It is a long established fact that a reader will be distracted by the readable content of a
      page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using &quot;Content here, content here&quot;,
      making it look like readable English.
    </Event>
    <Event interval="2016 – 2018" title="Can be without long text content" />
    <Event interval="2016 – 2018" title="Can be with only title" subtitle="and subtitle" />
    <Event
      intervalSeparator={<>&hellip;</>}
      lineColor="lime"
      interval={{ start: 2010 }}
      title="Can be customized"
      subtitle="Line color, interval separator, etc">
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
      model text, and a search for &quot;lorem ipsum&quot; will uncover many web sites still in
      their infancy.
    </Event>
    <Event interval={{ start: 2010 }} title="Event" subtitle="Can also contain images etc">
      <img src="https://placekitten.com/400/400" alt="Kitten" />
    </Event>
    <Event
      interval={{ start: 2010 }}
      iconFill="linear-gradient(45deg, #FED373, #F15245, #D92E7F, #9B36B7, #515ECF)"
      iconOutline={null}
      title="Icons can have totally custom backgrounds"
      subtitle="And outline can be turned off"
    />
  </Timeline>
));
