import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const e = React.createElement;

const StyledContainer = styled.div``;

const StyledList = styled.ul`
  max-width: 95%;
  list-style: none;
  padding: 0px;
`;

const StyledItem = styled.li`
  position: relative;
`;

const StyledIcon = styled.div`
  border: ${(props) => {
    if (props.lineColor === null) {
      return 'none';
    }
    return `2px solid ${props.lineColor}`;
  }};
  padding: ${(props) => {
    if (props.lineColor === null) {
      return '2px';
    }
    return '0';
  }};
  background: ${(props) => props.iconFill};
  border-radius: 10px;
  display: block;
  width: 1em;
  height: 1em;
`;

const Interval = ({ interval, separator }) => {
  if (typeof interval === 'string') {
    return interval;
  }
  if (interval.start && interval.end) {
    return (
      <>
        {interval.start}
        {separator}
        {interval.end}
      </>
    );
  }
  if (!interval.start && interval.end) {
    return (
      <>
        now
        {separator}
        {interval.end}
      </>
    );
  }
  if (interval.start && !interval.end) {
    return (
      <>
        {interval.start}
        {separator}
        now
      </>
    );
  }
  return '';
};

const StyledContent = styled.div`
  position: relative;
  margin-left: 2.5em;

  :before {
    background-color: ${(props) => props.lineColor};
    content: '';
    margin-left: 1px;
    position: absolute;
    top: 0;
    left: -2em;
    width: 2px;
    height: 100%;
  }
`;

const StyledInterval = styled.p`
  margin: 0 0 0 1em;
  padding: 0.25em 1em;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 1em;
`;

const StyledTitle = styled(({ tag, children, ...props }) => e(tag, props, children))`
  margin-top: 0;
`;

StyledTitle.defaultProps = {
  tag: 'h3',
};

const StyledDescription = styled.div``;

const StyledSubtitle = styled(({ tag, children, ...props }) => e(tag, props, children))``;

StyledSubtitle.defaultProps = {
  tag: 'h4',
};

const StyledIntervalContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em 0;
  align-items: center;
`;

export const Timeline = ({ lineColor, intervalSeparator, children }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      lineColor: child.props.lineColor || lineColor,
      intervalSeparator: child.props.intervalSeparator || intervalSeparator,
    }),
  );
  return (
    <StyledContainer>
      <StyledList>{childrenWithProps}</StyledList>
    </StyledContainer>
  );
};

Timeline.propTypes = {
  lineColor: PropTypes.string.isRequired,
  intervalSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
};

Timeline.defaultProps = {
  intervalSeparator: <>&nbsp;&mdash; </>,
  children: null,
};

export const Event = ({
  title,
  subtitle,
  interval,
  children,
  lineColor,
  titleTag,
  subtitleTag,
  intervalColor,
  intervalSeparator,
  intervalBackground,
  iconFill,
  iconOutline,
}) => (
  <StyledItem>
    <StyledIntervalContainer>
      <StyledIcon
        lineColor={iconOutline === null ? null : iconOutline || lineColor}
        iconFill={iconFill}
      />
      <StyledInterval color={intervalColor} background={intervalBackground}>
        <Interval interval={interval} separator={intervalSeparator} />
      </StyledInterval>
    </StyledIntervalContainer>
    <StyledContent lineColor={lineColor}>
      <StyledTitle tag={titleTag}>{title}</StyledTitle>
      {subtitle && <StyledSubtitle tag={subtitleTag}>{subtitle}</StyledSubtitle>}
      <StyledDescription>{children}</StyledDescription>
    </StyledContent>
  </StyledItem>
);

Event.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  interval: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  intervalSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  lineColor: PropTypes.string,
  titleTag: PropTypes.string,
  subtitleTag: PropTypes.string,
  intervalColor: PropTypes.string,
  intervalBackground: PropTypes.string,
  iconFill: PropTypes.string,
  iconOutline: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null, undefined])]),
};

Event.defaultProps = {
  subtitle: '',
  interval: 'Now',
  children: null,
  titleTag: 'h3',
  subtitleTag: 'h4',
  intervalBackground: '#cccccc',
  intervalColor: '#000000',
  iconFill: 'transparent',
  iconOutline: undefined,
  lineColor: '#000000',
  intervalSeparator: <>&nbsp;&mdash; </>,
};
