import './Collapsible.scss';
import { useState } from 'react';
import { constructClassName } from '../../services/utility';

type HeaderLevel = 2 | 3;

interface HeaderProps {
  level: HeaderLevel;
  children?: React.ReactNode;
}

interface CollapsibleProps {
  header: string;
  isHeadless?: boolean;
  headerLevel?: HeaderLevel;
  isInitiallyCollapsed?: boolean;
  prefix?: string | number;
  className?: string;
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      {props.level === 2 && <h2>{props.children}</h2>}
      {props.level === 3 && <h3>{props.children}</h3>}
    </>
  );
}

const Collapsible = (props: CollapsibleProps) => {
  const isInitiallyCollapsed: boolean = !props.isHeadless
    ? props.isInitiallyCollapsed !== undefined ? props.isInitiallyCollapsed : true
    : false;
  const [isCollapsed, setCollapsedState] = useState<boolean>(isInitiallyCollapsed);
  const className: string = constructClassName([props.className, props.isHeadless ? 'headless' : '']);
  return (
    <section className={constructClassName([className, isCollapsed ? 'collapsed' : ''])}>
      {!props.isHeadless &&
        <div className='section-header' onClick={() => setCollapsedState(!isCollapsed)}>
          <Header level={props.headerLevel || 2}>
            {props.prefix && <span className='section-number'>{props.prefix}.</span>}
            <span>{props.header}</span>
          </Header>
          <span className='section-chevron'>&#10094;</span>
        </div>
      }
      {!isCollapsed && <div className='section-body'>{props.children}</div>}
    </section>
  );
}

export default Collapsible;