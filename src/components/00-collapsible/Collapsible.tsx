import { useState, type ReactNode } from 'react';
import { HeaderLevel } from '../../constants/header-level';
import { constructClassName } from '../../utils/class';
import './Collapsible.scss';

interface HeaderProps {
  level: HeaderLevel;
  children?: ReactNode;
}

interface CollapsibleProps {
  header: string;
  isHeadless?: boolean;
  headerLevel?: HeaderLevel;
  isInitiallyCollapsed?: boolean;
  prefix?: string | number;
  className?: string;
  children?: ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      {props.level === HeaderLevel.secondary && <h2>{props.children}</h2>}
      {props.level === HeaderLevel.tertiary && <h3>{props.children}</h3>}
    </>
  );
};

const Collapsible = (props: CollapsibleProps) => {
  const isInitiallyCollapsed = !props.isHeadless
    ? props.isInitiallyCollapsed !== undefined
      ? props.isInitiallyCollapsed
      : true
    : false;
  const [isCollapsed, setCollapseState] = useState(isInitiallyCollapsed);
  const className = constructClassName([
    props.className,
    props.isHeadless ? 'headless' : '',
    isCollapsed ? 'collapsed' : ''
  ]);
  return (
    <section className={className}>
      {!props.isHeadless && (
        <div className="section-header" onClick={() => setCollapseState(!isCollapsed)}>
          <Header level={props.headerLevel || HeaderLevel.secondary}>
            {props.prefix && <span className="section-number">{props.prefix}.</span>}
            <span>{props.header}</span>
          </Header>
          <span className="section-chevron">&#10094;</span>
        </div>
      )}
      {!isCollapsed && <div className="section-body">{props.children}</div>}
    </section>
  );
};

export default Collapsible;
